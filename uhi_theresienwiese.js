// @author: Inka Sofie Hatesohl
// Dieser Code soll dabei helfen den Urban Heat Island Effekt auf der 
// Theresienwiese in München während des Oktoberfestes analysieren

// Definiere die Zeiträume vor, während und nach dem Oktoberfest
var periods = [
  {start: '2023-07-01', end: '2023-08-31'},
  {start: '2023-09-16', end: '2023-10-03'},
  {start: '2024-03-01', end: '2024-04-30'}
];

//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////

// Berechnung der LST mit dem Split-Window Algorithmus 

// Funktion zur LST-Berechnung für ein einzelnes Bild
function calculateLST(image) {
  // NDVI berechnen
  var ndvi = image.normalizedDifference(['B5', 'B4']).rename('NDVI');
  // Schritt 1: DN -> TOA Radiance (Strahlungswerte)
  // TOA Radiance berechnen
  var ML10 = ee.Number(image.get('RADIANCE_MULT_BAND_10'));
  var AL10 = ee.Number(image.get('RADIANCE_ADD_BAND_10'));
  var ML11 = ee.Number(image.get('RADIANCE_MULT_BAND_11'));
  var AL11 = ee.Number(image.get('RADIANCE_ADD_BAND_11'));

  var L10 = image.select('B10').multiply(ML10).add(AL10);
  var L11 = image.select('B11').multiply(ML11).add(AL11);
  
  // Schritt 2: Brightness Temperature (BT) berechnen
  // Planck-Koeffizienten abrufen
  var K1_10 = ee.Number(image.get('K1_CONSTANT_BAND_10'));
  var K2_10 = ee.Number(image.get('K2_CONSTANT_BAND_10'));
  var K1_11 = ee.Number(image.get('K1_CONSTANT_BAND_11'));
  var K2_11 = ee.Number(image.get('K2_CONSTANT_BAND_11'));
  // Brightness Temperature berechnen
  // Band 10
  var TB10 = L10.expression(
    '(K2 / log((K1 / L) + 1))', {
    'K1': K1_10, 'K2': K2_10, 'L': L10
  });

  // Band 11
  var TB11 = L11.expression(
    '(K2 / log((K1 / L) + 1))', {
    'K1': K1_11, 'K2': K2_11, 'L': L11
  });
  
  //print('RADIANCE_MULT_BAND_10:', ML10);
  //print('RADIANCE_ADD_BAND_10:', AL10);
  //print('RADIANCE_MULT_BAND_11:', ML11);
  //print('RADIANCE_ADD_BAND_11:', AL11);

  //print('K1_CONSTANT_BAND_10:', K1_10);
  //print('K2_CONSTANT_BAND_10:', K2_10);
  //print('K1_CONSTANT_BAND_11:', K1_11);
  //print('K2_CONSTANT_BAND_11:', K2_11);

  // Schritt 3: Emissivität berechnen
  
var ndviSoil = 0.2; // NDVI für Boden
var ndviVeg = 0.5; // NDVI für Vegetation
 
var fvc = ndvi.subtract(ndviSoil).divide(ndviVeg - ndviSoil);
 
var epsilonSoil10 = ee.Image(0.971); // Emissivität für Boden, Band 10
var epsilonVeg10 = ee.Image(0.987); // Emissivität für Vegetation, Band 10
var epsilonSoil11 = ee.Image(0.977); // Emissivität für Boden, Band 11
var epsilonVeg11 = ee.Image(0.989); // Emissivität für Vegetation, Band 11

var emissivity10 = epsilonSoil10.multiply(ee.Image(1).subtract(fvc)).add(epsilonVeg10.multiply(fvc));
var emissivity11 = epsilonSoil11.multiply(ee.Image(1).subtract(fvc)).add(epsilonVeg11.multiply(fvc));

// Korrekturterm und Delta Emissivität
var emissivity = (emissivity10.add(emissivity11)).divide(2);
var deltaEpsilon = emissivity10.subtract(emissivity11);

print('Emissivity', emissivity);

  // Schritt 4: BT von Kelvin in Celsius umrechnen
  // Umrechnung von Kelvin in Celsius für Band 10
  var TB10C = TB10.subtract(273.15);
  // Umrechnung von Kelvin in Celsius für Band 11
  var TB11C = TB11.subtract(273.15);
  
   // Schritt 5: Split-Window Algorithmus zur Berechnung der LST
  // Berechnung des Split-Window Algorithmus

  // Werte aus Standardwerken 
  var C0 = -0.268;
  var C1 = 1.378;
  var C2 = 0.183;
  var C3 = 54.300;
  var C4 = -2.238;
  var C5 = -129.200;
  var C6 = 16.400;
  var waterContent = 1.181;
  
  var epsilon10 = emissivity;
  var epsilon11 = emissivity.subtract(0.002);
  var delta_epsilon = epsilon10.subtract(epsilon11);

  // Berechnung der Landoberflächentemperatur (LST)
  // Ts = Ti + c1(Ti − Tj ) + c2(Ti − Tj )2 + c0  + (c3 + c4w)(1 − ε) + (c5 + c6w)Δε
  var lst = TB10C
    .add(ee.Image(C1).multiply(TB10C.subtract(TB11C)))
    .add(ee.Image(C2).multiply(TB10C.subtract(TB11C)).pow(2))
    .add(ee.Image(C0))
    .add(ee.Image(C3).add(ee.Image(C4).multiply(waterContent)).multiply(ee.Image(1).subtract(emissivity)))
    .add(ee.Image(C5).add(ee.Image(C6).multiply(waterContent)).multiply(delta_epsilon));
  
  return lst.clip(geometrymunich);
  }
  
// LST für alle drei Zeiträume berechnen
var lstResults = periods.map(function(period) {
  var image = ee.ImageCollection('LANDSAT/LC09/C02/T1')
    .filterDate(period.start, period.end)
    .filterBounds(munich)
    .sort('CLOUD_COVER')
    .first();
  
// Aufnahmedatum ausgeben
  var imageDate = ee.Date(image.get('system:time_start')).format('YYYY-MM-dd\'T\'HH:mm:ss');
  print('📅 Landsat 9 Aufnahmedatum für Zeitraum ' + periods.indexOf(period) + ':', imageDate);
  
  return calculateLST(image);
});

// Visualisierung
var lstVis = {min: 10, max: 35, palette: ['blue', 'green', 'yellow', 'orange', 'red', 'darkred']};

Map.centerObject(munich, 13);
Map.addLayer(lstResults[0], lstVis, 'LST Period 1', false);
Map.addLayer(lstResults[1], lstVis, 'LST Period 2', false);
Map.addLayer(lstResults[2], lstVis, 'LST Period 3', false);

//////////////
//Normierung//
//////////////
// Funktion zur Normierung der LST-Daten
function normalizeLST(image) {
  var mean = image.reduceRegion({
    reducer: ee.Reducer.mean(),
    geometry: munich,
    scale: 30
  }).get('constant');
  var stdDev = image.reduceRegion({
    reducer: ee.Reducer.stdDev(),
    geometry: munich,
    scale: 30
  }).get('constant');
  
  // Mittelwert und Standardabweichung als ee.Image darstellen
  var meanImage = ee.Image.constant(mean).clip(geometrymunich);
  var stdDevImage = ee.Image.constant(stdDev).clip(geometrymunich);
  
  // Normierung durchführen
  // Normierte LST = LST Mittelwert / Standardabweichung
  var normalized = image.subtract(meanImage).divide(stdDevImage);
  
  return normalized;
}

// Normierte LST-Daten berechnen
var normalizedLSTs = lstResults.map(function(lstImage) {
  return normalizeLST(lstImage);
});

// Ergebnisse ausgeben
//print('Normierte LST-Daten:', normalizedLSTs);

// Visualisierungsparameter für normierte LST-Daten
var normLSTVis = {
  min: -2, max: 2, palette: ['blue', 'white', 'red']
};

// Normierte LST-Bilder auf der Karte anzeigen
Map.addLayer(normalizedLSTs[0], normLSTVis, 'Normierte LST - Zeitraum 1', false);
Map.addLayer(normalizedLSTs[1], normLSTVis, 'Normierte LST - Zeitraum 2', false);
Map.addLayer(normalizedLSTs[2], normLSTVis, 'Normierte LST - Zeitraum 3', false);

// Differenzbilder erstellen
var diff12 = normalizedLSTs[1].subtract(normalizedLSTs[0]);
var diff23 = normalizedLSTs[1].subtract(normalizedLSTs[2]);

// Visualisierungsparameter für Differenzbilder
// blau unter Mittelwert, rot über Mittelwert
var diffVis = {
  min: -4, max: 4, palette: ['blue', 'white', 'red']
};

// Differenzbilder auf der Karte anzeigen
// Differenz Zeitraum 1 - Zeitraum 2 = wie hat sich die LST während des Oktoberfest im Vergleich zu vorher verhalten?
// rot = höhere Temp. während Oktoberfest; blau = niedrigere Temp. während Oktoberfest
Map.addLayer(diff12, diffVis, 'Differenz Zeitraum 2 - Zeitraum 1', false);
// Differenz Zeitraum 2 - Zeitraum 3 = wie hat sich die LST während des Oktoberfest im Vergleich zu nachher verhalten?
Map.addLayer(diff23, diffVis, 'Differenz Zeitraum 2 - Zeitraum 3', false);
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

// Funktion zur Berechnung der Albedo nach Naegeli et. al (modifiziert für Sentinel-2)
function calculateAlbedo(image) {
  // Gewichtungskoeffizienten für Sentinel-2 (modifiziert)
  var p2 = 0.356; // B2
  var p4 = 0.130; // B4
  var p8 = 0.373; // B8
  var p11 = 0.085; // B11
  var p12 = 0.072; // B12
  
  var b2 = image.select('B2');
  var b4 = image.select('B4');
  var b8 = image.select('B8');
  var b11 = image.select('B11');
  var b12 = image.select('B12');
  
  var albedo = b2.multiply(p2).add(b4.multiply(p4)).add(b8.multiply(p8))
    .add(b11.multiply(p11)).add(b12.multiply(p12)).subtract(ee.Image.constant(0.0018));
  
  return albedo.rename('albedo');
}

// Funktion zur Berechnung von NDVI und NDBI für Sentinel-2
function calculateNDVI_NDBI(sentinelImage) {
  var ndvi = sentinelImage.normalizedDifference(['B8', 'B4']).rename('NDVI');
  var ndbi = sentinelImage.normalizedDifference(['B11', 'B8']).rename('NDBI');
  var ndwi = sentinelImage.normalizedDifference(['B3', 'B8']).rename('NDWI');
  var albedo = calculateAlbedo(sentinelImage);
  return sentinelImage.addBands(ndvi).addBands(ndbi).addBands(ndwi).addBands(albedo);
}

// Funktion zur Anzeige von Aufnahmedatum und Cloud Cover für Sentinel-2
function displaySentinel2Date(collection, periodIndex) {
  var image = collection.first();
  var imageDate = ee.Date(image.get('system:time_start')).format('YYYY-MM-dd\'T\'HH:mm:ss');
  var cloudCover = image.get('CLOUDY_PIXEL_PERCENTAGE');
  print('📅 Sentinel-2 Aufnahmedatum für Zeitraum ' + periodIndex + ':', imageDate);
  print('☁️ Sentinel-2 Cloud Cover [%] für Zeitraum ' + periodIndex + ':', cloudCover);
  return image;
}

// Skalierungsfunktion für Sentinel-2
function scaleSentinel2(image){
  return image.divide(10000).clip(geometrymunich);
}

// Sentinel-2 Daten für alle drei Zeiträume laden und Aufnahmedaten ausgeben
var sentinel2Collections = periods.map(function(period, index) {
  var collection = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED')
    .filterDate(period.start, period.end)
    .filterBounds(munich)
    .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 20))
    .sort('CLOUDY_PIXEL_PERCENTAGE');
  
  // Aufnahmedatum ausgeben
  displaySentinel2Date(collection, index);

  return collection.map(scaleSentinel2); // Skalierungsfunktion anwenden
});

// NDVI und NDBI für alle drei Zeiträume berechnen
var sentinel2NDVI_NDBI = sentinel2Collections.map(function(collection) {
  var image = collection.first();
  return calculateNDVI_NDBI(image).clip(geometrymunich);
});
// Funktion, um ein Bild auf eine bestimmte Projektion und Auflösung umzurechnen
function reprojectImage(image) {
  var crs = 'EPSG:32632'; // Zielprojektion
  var transform = [10, 0, 600000, 0, -10, 5400000]; // Konsistente Transformation für beide Bänder
  
  return image.reproject({
    crs: crs,
    crsTransform: transform
  });
}

// Sentinel-2-Bilder auf die gemeinsame Projektion umprojizieren
var sentinel2NDVI_NDBI_reprojected = sentinel2NDVI_NDBI.map(function(image) {
  return reprojectImage(image);
});

// Funktion zur Berechnung von Statistiken für NDVI
function calculateNDVIStats(image) {
  var stats = image.select('NDVI').reduceRegion({
    reducer: ee.Reducer.mean().combine({
      reducer2: ee.Reducer.stdDev(),
      sharedInputs: true
    }).combine({
      reducer2: ee.Reducer.minMax(),
      sharedInputs: true
    }),
    geometry: munich,
    scale: 10
  });
  
  var mean = stats.get('NDVI_mean');
  var min = stats.get('NDVI_min');
  var max = stats.get('NDVI_max');
  
  return {
    mean: mean,
    min: min,
    max: max
  };
}

// Statistiken für NDVI berechnen
var ndviStats = sentinel2NDVI_NDBI.map(function(image) {
  return calculateNDVIStats(image);
});

// Ergebnisse ausgeben
ndviStats.forEach(function(stats, index) {
  print('NDVI Statistiken für Zeitraum ' + (index + 1) + ':');
  print('Mittelwert:', stats.mean);
  //print('Minimum:', stats.min);
  //print('Maximum:', stats.max);
});

// Visualisierungsparameter für NDVI/NDBI
var ndviVis = { min: -0.2, max: 1, palette: ['blue', 'white', 'green'] };
var ndbiVis = { min: -1, max: 1, palette: ['green', 'white', 'blue'] };

// NDVI-Layer für alle drei Zeiträume auf der Karte anzeigen

for (var i = 0; i < sentinel2NDVI_NDBI_reprojected.length; i++) {
  var image = sentinel2NDVI_NDBI_reprojected[i];
  Map.addLayer(image.select('NDVI'), ndviVis, 'Sentinel-2 NDVI - Zeitraum ' + (i + 1), false);
}

// Nur NDBI für den zweiten Zeitraum anzeigen
//Map.addLayer(sentinel2NDVI_NDBI_reprojected[1].select('NDBI'), ndbiVis, 'Sentinel-2 NDBI - Zeitraum 2', false);

////////////////////////
//Random-Forest/////////
////////////////////////
// Sentinel-2 Bild skalieren

var scaledSentinel = scaleSentinel2(sentinel2Collections[0].first());
var clippedSentinel = scaledSentinel.clip(geometrymunich);

// Random-Forest auf Sentinel-2

// Trainingsdaten zusammenführen
var trainingData = forest.merge(water).merge(urban).merge(crop).merge(barren).merge(green).merge(asphalt);
print(trainingData);
// Sentinel-2 Features auswählen
var label = 'Class';
var bands = ['B2', 'B3', 'B4', 'B8', 'B11', 'B12'];
var trainingImage = clippedSentinel.select(bands);

// Trainingsdaten extrahieren
var training = trainingImage.sampleRegions({
  collection: trainingData,
  properties: [label],
  scale:10
});
//print(training);
// Trainings- und Validierungsdaten splitten
var withRandom = training.randomColumn('random');
var split = 0.7; // 70% Training, 30% Validierung
var trainingSet = withRandom.filter(ee.Filter.lt('random', split));
var validationSet = withRandom.filter(ee.Filter.gte('random', split));

// Random-Forest-Klassifikator auf Trainingsdaten trainieren
var classifier = ee.Classifier.smileRandomForest(200).train({
  features: trainingSet,
  classProperty: label,
  inputProperties: bands
});

// Klassifikation auf das Bild anwenden
var classified = trainingImage.classify(classifier);

// Konfusionsmatrix für Trainingsdaten (Resubstitution)
var trainConfMatrix = classifier.confusionMatrix();
print('Trainings-Konfusionsmatrix:', trainConfMatrix);
print('Trainings-Overall Accuracy:', trainConfMatrix.accuracy());
print('Trainings-Kappa:', trainConfMatrix.kappa());

// Validierungsdaten klassifizieren
var validated = validationSet.classify(classifier);

// Konfusionsmatrix für Validierungsdaten
var valConfMatrix = validated.errorMatrix(label, 'classification');
print('Validierungs-Konfusionsmatrix:', valConfMatrix);
print('Validierungs-Overall Accuracy:', valConfMatrix.accuracy());
print('Validierungs-Kappa:', valConfMatrix.kappa());
print('Producer\'s Accuracy:', valConfMatrix.producersAccuracy());
print('User\'s Accuracy:', valConfMatrix.consumersAccuracy());


// Visualisierung der Klassifikation
// Visualisierung der Klassifikation
var classVis = {
  min: 0, max: 6,
  palette: ['#0000ff', '#db4a18', '#008c00', '#e3e261', '#ae6dab', '#8fffa2', '#cccfc9']
};
Map.addLayer(classified, classVis, 'Land Cover Classification', false);


/////////////////////////
/// Downscaling mit RF //
/////////////////////////

// 1. Funktion, um ein Bild auf eine bestimmte Projektion und Auflösung umzurechnen
function reprojectLSTImage(image) {
  var crs = 'EPSG:32632'; // Zielprojektion
  var transform = [10, 0, 600000, 0, -10, 5400000]; // Konsistente Transformation
  return image.reproject({
    crs: crs,
    crsTransform: transform
  });
}

// 2. LST-Bilder auf die gemeinsame Projektion umprojizieren
var reprojectedLSTResults = lstResults.map(function(lst) {
  return reprojectLSTImage(lst);
});

// 3. Funktion zur Vorbereitung der Trainingsdaten für die Regression
function prepareRegressionData(lstImage, sentinelImage) {
  var predictors = sentinelImage.select(['NDVI', 'NDBI', 'NDWI', 'albedo']);
  var target = lstImage.select(['constant']); 
  var combined = predictors.addBands(target);
  var samples = combined.sample({
    region: sentinelImage.geometry(),
    scale: 30,
    numPixels: 1000,
    seed: 42
  });
  return samples;
}

// 4. Downscaling mit Random Forest
function downscaleLSTwithRandomForest(lstImage, sentinelImage) {
  var training = prepareRegressionData(lstImage, sentinelImage);

  // Definition der Input-Features (Prädiktoren)
  var featureNames = ['NDVI', 'NDBI', 'NDWI', 'albedo'];
  var label = 'constant'; // Zielvariable (LST)

  // Random Forest Regressor initialisieren mit 200 Bäumen
  var rfRegressor = ee.Classifier.smileRandomForest({
    numberOfTrees: 200
  }).setOutputMode('REGRESSION');

  // Modell auf Trainingsdaten trainieren
  var trainedRF = rfRegressor.train({
    features: training,
    classProperty: label,
    inputProperties: featureNames
  });

  // Anwendung auf hochaufgelöste Sentinel-2-Prädiktoren
  var predictorsHR = sentinelImage.select(featureNames);
  var downscaledLST = predictorsHR.classify(trainedRF).rename('DownscaledLST');

  return downscaledLST;
}

// 5. Herunterskalierung der LST-Daten für alle Zeiträume mit Random Forest
var downscaledLSTResults = reprojectedLSTResults.map(function(lst, index) {
  var sentinelImage = sentinel2NDVI_NDBI_reprojected[index];
  return downscaleLSTwithRandomForest(lst, sentinelImage);
});

// 6. Visualisierung der herunterskalierten LST-Daten (Random Forest)
var lstskalVis = {min: 10, max: 35, palette: ['blue', 'green', 'yellow', 'orange', 'red', 'darkred']};
for (var i = 0; i < downscaledLSTResults.length; i++) {
  Map.addLayer(downscaledLSTResults[i], lstskalVis, 'Downscaled LST (RF) Zeitraum ' + (i + 1), false);
}

// 7. Statistische Auswertung für ein Gebiet
var region = geometrymunich; 
var scale = 30; // Auflösung in Metern

// Mittlere LST-Werte für die herunterskalierten Layer
var downscaledLSTStats = downscaledLSTResults.map(function(image) {
  var stats = image.reduceRegion({
    reducer: ee.Reducer.mean(),
    geometry: region,
    scale: scale
  });
  return stats.get('DownscaledLST');
});

print('Mittlere LST-Werte für die herunterskalierten Layer:');
for (var i = 0; i < downscaledLSTStats.length; i++) {
  print('Zeitraum ' + (i + 1) + ':', downscaledLSTStats[i]);
}

// Mittlere LST-Werte für die originalen Layer
var originalLSTStats = lstResults.map(function(image) {
  var stats = image.reduceRegion({
    reducer: ee.Reducer.mean(),
    geometry: region,
    scale: scale
  });
  return stats.get('constant'); 
});

print('Mittlere LST-Werte für die originalen Layer:');
for (var i = 0; i < originalLSTStats.length; i++) {
  print('Zeitraum ' + (i + 1) + ':', originalLSTStats[i]);
}

///////////////////////////////////////////////
//Normierung der herunterskalierten LST Daten//
///////////////////////////////////////////////
// Funktion zur Normierung der LST-Daten
function normalizeskalLST(image) {
  var mean = image.reduceRegion({
    reducer: ee.Reducer.mean(),
    geometry: munich,
    scale: 30
  }).get('DownscaledLST');
  var stdDev = image.reduceRegion({
    reducer: ee.Reducer.stdDev(),
    geometry: munich,
    scale: 30
  }).get('DownscaledLST');
  
  // Mittelwert und Standardabweichung als ee.Image darstellen
  var meanImage = ee.Image.constant(mean).clip(geometrymunich);
  var stdDevImage = ee.Image.constant(stdDev).clip(geometrymunich);
  
  // Normierung durchführen
  // Normierte LST = LST Mittelwert / Standardabweichung
  var normalizedskal = image.subtract(meanImage).divide(stdDevImage);
  
  return normalizedskal;
}

// Normierte LST-Daten berechnen
var normalizedLSTskals = downscaledLSTResults.map(function(lstImage) {
  return normalizeskalLST(lstImage);
});

// Ergebnisse ausgeben
//print('Normierte LST-Daten:', normalizedLSTs);
// Normierte LST-Bilder auf der Karte anzeigen
Map.addLayer(normalizedLSTskals[0], normLSTVis, 'Normierteskal LST - Zeitraum 1', false);
Map.addLayer(normalizedLSTskals[1], normLSTVis, 'Normierteskal LST - Zeitraum 2', false);
Map.addLayer(normalizedLSTskals[2], normLSTVis, 'Normierteskal LST - Zeitraum 3', false);

// Differenzbilder erstellen
var diffskal12 = normalizedLSTskals[1].subtract(normalizedLSTskals[0]);
var diffskal23 = normalizedLSTskals[1].subtract(normalizedLSTskals[2]);

// Differenzbilder auf der Karte anzeigen
// Differenz Zeitraum 1 - Zeitraum 2 = wie hat sich die LST während des Oktoberfest im Vergleich zu vorher verhalten?
// rot = höhere Temp. während Oktoberfest; blau = niedrigere Temp. während Oktoberfest
Map.addLayer(diffskal12, diffVis, 'Differenz skal Zeitraum 2 - Zeitraum 1', false);
// Differenz Zeitraum 2 - Zeitraum 3 = wie hat sich die LST während des Oktoberfest im Vergleich zu nachher verhalten?
Map.addLayer(diffskal23, diffVis, 'Differenz skal Zeitraum 2 - Zeitraum 3', false);

////////////////////////
////////////////////////

// Im Folgenden werden Mittelwerte der LST und normierten LST für die festgelegten Polygone für alle 3 Zeiträume berechnet
// Definiere eine Liste von Geometrien
var geometries = [
  geometrytheresienwiese,
  geometryInnenstadt,
  geometryForst, 
  geometrySchlosspark,
  geometryIsar
];

// Definiere die Namen der Geometrien
var geometryNames = [
  'Theresienwiese',
  'Innenstadt',
  'Forst',
  'Schlosspark',
  'Isar'
];

// Funktion zur Berechnung des LST-Mittelwerts für eine Liste von Geometrien
function calculateLSTMean(image, geometry) {
  var mean = image.reduceRegion({
    reducer: ee.Reducer.mean(),
    geometry: geometry,
    scale: 30
  }).get('constant');
  
  return mean;
}

// Funktion zur Berechnung des Mittelwerts der normierten LST für eine Liste von Geometrien
function calculateNormalizedLSTMean(image, geometry) {
  var mean = image.reduceRegion({
    reducer: ee.Reducer.mean(),
    geometry: geometry,
    scale: 30
  }).get('constant');
  
  return mean;
}

// Funktion zur Berechung des Mittelwerts der skalierten LST für eine Liste von Geometrien
function calculateLSTskalMean(image, geometry) {
  var mean = image.reduceRegion({
    reducer: ee.Reducer.mean(),
    geometry: geometry,
    scale: 30
  }).get('DownscaledLST');
  
  return mean;
}

// Funktion zur Berechnung des Mittelwerts der skalierten normierten LST für eine Liste von Geometrien
function calculateNormalizedLSTskalMean(image, geometry) {
  var mean = image.reduceRegion({
    reducer: ee.Reducer.mean(),
    geometry: geometry,
    scale: 30
  }).get('DownscaledLST');
  
  return mean;
}

// LST-Mittelwerte für alle drei Zeiträume und alle Geometrien berechnen
var lstMeans = geometries.map(function(geometry, index) {
  var means = lstResults.map(function(image) {
    return calculateLSTMean(image, geometry);
  });
  return {name: geometryNames[index], means: means};
});

// Mittelwerte der normierten LST für alle drei Zeiträume und alle Geometrien berechnen
var normalizedLSTMeans = geometries.map(function(geometry, index) {
  var means = normalizedLSTs.map(function(image) {
    return calculateNormalizedLSTMean(image, geometry);
  });
  return {name: geometryNames[index], means: means};
});

// Mittelwerte der normierten LST für alle drei Zeiträume und alle Geometrien berechnen
var normalizedLSTskalMeans = geometries.map(function(geometry, index) {
  var means = normalizedLSTskals.map(function(image) {
    return calculateNormalizedLSTskalMean(image, geometry);
  });
  return {name: geometryNames[index], means: means};
});

// LST-Mittelwerte für alle drei Zeiträume und alle Geometrien berechnen
var lstskalMeans = geometries.map(function(geometry, index) {
  var means = downscaledLSTResults.map(function(image) {
    return calculateLSTskalMean(image, geometry);
  });
  return {name: geometryNames[index], means: means};
});
// Ergebnisse ausgeben

print('LST-Mittelwerte für alle Geometrien und Zeiträume:');
lstMeans.forEach(function(result) {
  print(result.name + ':');
  result.means.forEach(function(mean, timeIndex) {
    print('  Zeitraum ' + (timeIndex + 1) + ': ' + mean.getInfo()); // getInfo() verwenden, um den tatsächlichen Wert zu erhalten
  });
});

print('Mittelwerte der normierten LST für alle Geometrien und Zeiträume:');
normalizedLSTMeans.forEach(function(result) {
  print(result.name + ':');
  result.means.forEach(function(mean, timeIndex) {
    print('  Zeitraum ' + (timeIndex + 1) + ': ' + mean.getInfo()); // getInfo() verwenden, um den tatsächlichen Wert zu erhalten
  });
});


print('LSTskal-Mittelwerte für alle Geometrien und Zeiträume:');
lstskalMeans.forEach(function(result) {
  print(result.name + ':');
  result.means.forEach(function(mean, timeIndex) {
    print('  Zeitraum ' + (timeIndex + 1) + ': ' + mean.getInfo()); // getInfo() verwenden, um den tatsächlichen Wert zu erhalten
  });
});

print('normierte LSTskal-Mittelwerte für alle Geometrien und Zeiträume:');
normalizedLSTskalMeans.forEach(function(result) {
  print(result.name + ':');
  result.means.forEach(function(mean, timeIndex) {
    print('  Zeitraum ' + (timeIndex + 1) + ': ' + mean.getInfo()); // getInfo() verwenden, um den tatsächlichen Wert zu erhalten
  });
});


// Funktion zur Berechnung des Mittelwerts eines Differenzbilds für eine Zone
function calculateDiffMean(diffImage, geometry, bandName) {
  var mean = diffImage.reduceRegion({
    reducer: ee.Reducer.mean(),
    geometry: geometry,
    scale: 30
  }).get(bandName);
  return mean;
}

// Mittelwerte der Differenzbilder für alle Geometrien berechnen
var diffMeans = geometries.map(function(geometry, index) {
  // Normierte Differenzbilder
  var means = [
    calculateDiffMean(diff12, geometry, 'constant'),
    calculateDiffMean(diff23, geometry, 'constant')
  ];
  return {name: geometryNames[index], means: means};
});

// Mittelwerte der skalierten normierten Differenzbilder für alle Geometrien berechnen
var diffskalMeans = geometries.map(function(geometry, index) {
  var means = [
    calculateDiffMean(diffskal12, geometry, 'DownscaledLST'),
    calculateDiffMean(diffskal23, geometry, 'DownscaledLST')
  ];
  return {name: geometryNames[index], means: means};
});

// Ausgabe in der Konsole
print('Mittelwerte der normierten Differenzbilder für alle Geometrien:');
diffMeans.forEach(function(result) {
  print(result.name + ':');
  print('  Zeitraum 2 - Zeitraum 1: ' + result.means[0].getInfo());
  print('  Zeitraum 2 - Zeitraum 3: ' + result.means[1].getInfo());
});

print('Mittelwerte der skalierten normierten Differenzbilder für alle Geometrien:');
diffskalMeans.forEach(function(result) {
  print(result.name + ':');
  print('  Zeitraum 2 - Zeitraum 1: ' + result.means[0].getInfo());
  print('  Zeitraum 2 - Zeitraum 3: ' + result.means[1].getInfo());
});


///////////////////////////////////
//NDVI-Statistiken für alle Zonen//
///////////////////////////////////
// 1. Kombinierte Reducer-Funktion
function calculateNDVIStats(image, geometry) {
  var stats = image.select('NDVI').reduceRegion({
    reducer: ee.Reducer.mean().combine({
      reducer2: ee.Reducer.stdDev(),
      sharedInputs: true
    }).combine({
      reducer2: ee.Reducer.minMax(),
      sharedInputs: true
    }),
    geometry: geometry,
    scale: 10,
    maxPixels: 1e9
  });
  
  return {
    mean: stats.get('NDVI_mean')
  };
}

// 2. Statistikberechnung für alle Zonen
var ndviResults = geometries.map(function(geometry, index) {
  var statsPerPeriod = sentinel2NDVI_NDBI.map(function(image) {
    return calculateNDVIStats(image, geometry);
  });
  
  return {
    name: geometryNames[index],
    stats: statsPerPeriod
  };
});

// 3. Ausgabe der Ergebnisse
ndviResults.forEach(function(zoneResult) {
  print('NDVI-Statistiken für ' + zoneResult.name + ':');
  
  zoneResult.stats.forEach(function(stats, periodIndex) {
    print('  Zeitraum ' + (periodIndex + 1) + ':');
    print('    Mittelwert:', stats.mean);
  });
});

/////////////////////////
//Cloud Cover Landsat 9//
/////////////////////////
// Im Folgenden wird die Cloud Cover für die Landsat 9 Bilder berechnet, um eine Aussage über die Qualität zu geben
// Funktion zur Abrufung der Cloud Cover eines einzelnen Landsat-Bildes
function getCloudCover(period) {
  // Filtere die Landsat-9-Bildsammlung nach Zeitraum und Region
  var image = ee.ImageCollection('LANDSAT/LC09/C02/T1')
    .filterDate(period.start, period.end)
    .filterBounds(munich)
    .sort('CLOUD_COVER') // Sortiere nach Cloud Cover (niedrigste zuerst)
    .first(); // Wähle das erste Bild aus
  
  // Abrufen der Cloud Cover aus den Metadaten
  var cloudCover = image.get('CLOUD_COVER');
  
  return cloudCover;
}

// Cloud Cover für alle drei Zeiträume abrufen
var cloudCovers = periods.map(function(period) {
  return getCloudCover(period);
});

// Ergebnisse ausgeben
print('Cloud Cover für die drei Zeiträume:', cloudCovers);

/////////
//Layer//
/////////

// Theresienwiese Darstellung
var theresienwiese = ee.FeatureCollection([ee.Feature(geometrytheresienwiese)]);
var outline = theresienwiese.style({color: 'purple', width: 3, fillColor: '00000000'});
Map.addLayer(outline, {}, 'Theresienwiese');
// Forst Darstellung
var forst = ee.FeatureCollection([ee.Feature(geometryForst)]);
var outline = forst.style({color: 'black', width: 3, fillColor: '00000000'});
Map.addLayer(outline, {}, 'Forst');
// Innenstadt Darstellung
var innenstadt = ee.FeatureCollection([ee.Feature(geometryInnenstadt)]);
var outline = innenstadt.style({color: 'black', width: 3, fillColor: '00000000'});
Map.addLayer(outline, {}, 'Innenstadt');
// Schlosspark Darstellung
var schlosspark = ee.FeatureCollection([ee.Feature(geometrySchlosspark)]);
var outline = schlosspark.style({color: 'black', width: 3, fillColor: '00000000'});
Map.addLayer(outline, {}, 'Schlosspark');
// Isar Darstellung
var isar = ee.FeatureCollection([ee.Feature(geometryIsar)]);
var outline = isar.style({color: 'black', width: 3, fillColor: '00000000'});
Map.addLayer(outline, {}, 'Isar');

Map.addLayer(stadtgrenze, {color: 'black', width:2, fillColor: 'transparent'}, 'Stadtgrenze', false);

///////////////////////////////////////////////////////
//Hilfsfunktion um Werte auf Karte anzeigen zu lassen//
///////////////////////////////////////////////////////
function createGeoJSONPoint(point) {
  return ee.Geometry.Point([point.lon, point.lat]);
}

// Funktion, um die LST-Werte bei einem Klick anzuzeigen
Map.onClick(function(point) {
  var geoJSONPoint = createGeoJSONPoint(point);
  
  // Verwende die geoJSONPoint in deiner Anwendung
  var lstValues = downscaledLSTResults.map(function(image) {
    var value = image.reduceRegion({
      reducer: ee.Reducer.first(),
      geometry: geoJSONPoint,
      scale: 10
    }).get('DownscaledLST');
    return value;
  });
  
  print('Downscaled LST-Werte bei Klick:');
  for (var i = 0; i < lstValues.length; i++) {
    print('Zeitraum ' + (i + 1) + ':', lstValues[i]);
  }
});


// Funktion, um die LST-Werte bei einem Klick anzuzeigen
Map.onClick(function(point) {
  var geoJSONPoint = createGeoJSONPoint(point);
  
  // Verwende die geoJSONPoint in deiner Anwendung
  var lstOValues = lstResults.map(function(image) {
    var value = image.reduceRegion({
      reducer: ee.Reducer.first(),
      geometry: geoJSONPoint,
      scale: 10
    }).get('constant');
    return value;
  });
  
  print('LST-Werte bei Klick:');
  for (var i = 0; i < lstOValues.length; i++) {
    print('Zeitraum ' + (i + 1) + ':', lstOValues[i]);
  }
});

/*
// Funktion, um die Projektion eines Bildes anzuzeigen
function displayProjection(image) {
  var projection = image.projection();
  print('Projektion:', projection);
}

// Überprüfe die Projektion der LST-Bilder
reprojectedLSTResults.forEach(function(lst, index) {
  print('LST-Projektion für Zeitraum ' + (index + 1) + ':');
  displayProjection(lst);
});

// Überprüfe die Projektion der Sentinel-2-Bilder
sentinel2NDVI_NDBI_reprojected.forEach(function(sentinelImage, index) {
  print('Sentinel-2-Projektion für Zeitraum ' + (index + 1) + ':');
  displayProjection(sentinelImage);
});
// Sentinel-2-Bild für den ersten Zeitraum laden
var sentinelImage = sentinel2NDVI_NDBI_reprojected[0];

// Einzelnes Band auswählen (z.B. NDVI)
var ndviBand = sentinelImage.select('NDVI');

// Projektion des ausgewählten Bands überprüfen
var projection = ndviBand.projection();
print('Projektion des NDVI-Bands:', projection);

// Sentinel-2-Bild für den ersten Zeitraum laden
var sentinelImage = sentinel2NDVI_NDBI_reprojected[0];

// Einzelnes Band auswählen (z.B. NDBI)
var ndbiBand = sentinelImage.select('NDBI');

// Projektion des ausgewählten Bands überprüfen
var projection = ndbiBand.projection();
print('Projektion des NDBI-Bands:', projection);

// Sentinel-2-Bild für den ersten Zeitraum laden
var sentinelImage = sentinel2NDVI_NDBI_reprojected[0];

// Einzelnes Band auswählen (z.B. NDBI)
var ndwiBand = sentinelImage.select('NDWI');

// Projektion des ausgewählten Bands überprüfen
var projection = ndwiBand.projection();
print('Projektion des NDWI-Bands:', projection);
*/

////////////////////////////////////////////////////
//Validierung des Downscalings durch Scatter Plots//
////////////////////////////////////////////////////
// Funktion zum Sammeln von Pixelwerten aus beiden Bildern
function collectPixelValues(originalLST, downscaledLST, region) {
  // Kombinieren Sie beide Bilder
  var combined = originalLST.addBands(downscaledLST);
  
  // Sammeln Sie Stichproben
  var samples = combined.sample({
    region: region,
    scale: 30,
    numPixels: 1000,  // Anzahl der Stichprobenpunkte
    seed: 42
  });
  
  return samples;
}

// Für jeden Zeitraum einen Scatter Plot erstellen
for (var i = 0; i < lstResults.length; i++) {
  // Stellen Sie sicher, dass die Bänder korrekt benannt sind
  var originalLST = lstResults[i];
  var downscaledLST = downscaledLSTResults[i].rename('classification');
  
  // Sammeln Sie die Pixelwerte
  var samples = collectPixelValues(originalLST, downscaledLST, geometrymunich);
  
  // Erstellen Sie den Scatter Plot
  var chart = ui.Chart.feature.byFeature(samples, 'constant', ['classification'])
    .setChartType('ScatterChart')
    .setOptions({
      title: 'Original LST vs. Downscaled LST - Zeitraum ' + (i + 1),
      hAxis: {title: 'Original LST (°C)'},
      vAxis: {title: 'Downscaled LST (°C)'},
      pointSize: 3,
      trendlines: {0: {color: 'red'}},  // Fügt eine Trendlinie hinzu
      legend: {position: 'none'}
    });
  
  print(chart);
  
  // Berechnen Sie Statistiken zur Validierung
  var stats = samples.reduceColumns({
    reducer: ee.Reducer.pearsonsCorrelation(),
    selectors: ['constant', 'classification']
  });
  
  // Korrelationswert: nahe 1 sehr starke positive Korrelation, 0,7 - 0,9: Gute Korrelation, Wert unter 0,7: Schwächere Korrelation
    var correlation = ee.Number(stats.get('correlation'));
  print('Korrelation für Zeitraum ' + (i + 1) + ':', correlation);

  // R² berechnen (Korrelation zum Quadrat)
  var r2 = correlation.pow(2);
  print('R² für Zeitraum ' + (i + 1) + ':', r2);
  // RMSE berechnen
var observedList = samples.aggregate_array('constant');
var predictedList = samples.aggregate_array('classification');

var rmse = ee.Number(
  observedList.zip(predictedList)
    .map(function(pair) {
      pair = ee.List(pair);
      return ee.Number(pair.get(0)).subtract(ee.Number(pair.get(1))).pow(2);
    })
    .reduce(ee.Reducer.mean())
).sqrt();

print('RMSE für Zeitraum ' + (i + 1) + ':', rmse);



}

