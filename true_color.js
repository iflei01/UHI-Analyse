// Erstellung von True-Color Bildern, zur Auswahl der Daten der UHI-Analyse

// Definieren der Region München
var munich = geometry.buffer(10000);
var geometrymunich = ee.Geometry.Polygon([[
  [11.546,48.128],
  [11.568,48.128],
  [11.568,48.142],
  [11.546,48.142],
  [11.546,48.128]
  ]]);

// Landsat 9 Verarbeitung
var landsatDates = ['2023-08-14', '2023-10-01', '2024-03-09'];
var landsatCollection = 'LANDSAT/LC09/C02/T1_L2';

landsatDates.forEach(function(date) {
  var image = ee.ImageCollection(landsatCollection)
    .filterDate(date, ee.Date(date).advance(1, 'day'))
    .filterBounds(geometrymunich)
    .sort('CLOUD_COVER')
    .first();

  // Korrekte SR_Bandnamen mit Offset-Korrektur
  var scaled = image.select(['SR_B4', 'SR_B3', 'SR_B2'])
                   .multiply(0.0000275)
                   .add(-0.2);
  
  Map.addLayer(scaled, 
    {min: 0.0, max: 0.3}, 
    'Landsat 9 ' + date);
});

// Sentinel-2 Verarbeitung 
var sentinelDates = ['2023-07-07', '2023-09-25', '2024-04-27'];
var sentinelCollection = 'COPERNICUS/S2_SR_HARMONIZED';

sentinelDates.forEach(function(date) {
  var image = ee.ImageCollection(sentinelCollection)
    .filterDate(date, ee.Date(date).advance(1, 'day'))
    .filterBounds(geometrymunich)
    .sort('CLOUDY_PIXEL_PERCENTAGE')
    .first();
  
  var scaled = image.select(['B4', 'B3', 'B2']).multiply(0.0001);
  
  Map.addLayer(scaled, 
    {min: 0.0, max: 0.3}, 
    'Sentinel-2 ' + date);
});

Map.centerObject(munich, 13);

// Theresienwiese Darstellung
var theresienwiese = ee.FeatureCollection([ee.Feature(geometrytheresienwiese)]);
var outline = theresienwiese.style({color: 'yellow', width: 3, fillColor: '00000000'});
Map.addLayer(outline, {}, 'Theresienwiese');
// Forst Darstellung
var forst = ee.FeatureCollection([ee.Feature(geometryForst)]);
var outline = forst.style({color: 'purple', width: 3, fillColor: '00000000'});
Map.addLayer(outline, {}, 'Forst');
// Innenstadt Darstellung
var innenstadt = ee.FeatureCollection([ee.Feature(geometryInnenstadt)]);
var outline = innenstadt.style({color: 'purple', width: 3, fillColor: '00000000'});
Map.addLayer(outline, {}, 'Innenstadt');
// Schlosspark Darstellung
var schlosspark = ee.FeatureCollection([ee.Feature(geometrySchlosspark)]);
var outline = schlosspark.style({color: 'purple', width: 3, fillColor: '00000000'});
Map.addLayer(outline, {}, 'Schlosspark');
// Isar Darstellung
var isar = ee.FeatureCollection([ee.Feature(geometryIsar)]);
var outline = isar.style({color: 'purple', width: 3, fillColor: '00000000'});
Map.addLayer(outline, {}, 'Isar');
