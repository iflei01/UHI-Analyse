# UHI-Analyse Oktoberfest München
Dieses Repository enthält den Code zur Analyse des Urban Heat Island (UHI) Effekts auf der Theresienwiese in München während des Oktoberfestes, erstellt im Rahmen meiner Bachelorarbeit unter Verwendung von Landsat 9 und Sentinel-2 Satellitendaten sowie Google Earth Engine

## Inhalt
- **uhi_theresienwiese.js**  
  Hauptskript zur Berechnung und Visualisierung der UHI-Analyse auf der Theresienwiese. Es umfasst:
  - Nutzung von Landsat 9 und Sentinel-2 Daten
  - Zonenauswahl mithilfe von NDVI und Random-Forest Landnutzungsklassifikation
  - Extraktion und Vergleich von Landoberflächentemperaturen (LST) für verschiedene Zeiträume (vor, während und nach dem Oktoberfest) mit Landsat 9
  - Berechnung von NDVI, NDBI, NDWI und Albedo mit Sentinel-2 für Downscaling der Landsat 9 LST mittels Random-Forest  
  - Normierung der LST-Daten sowie Erstellung von Differenzbildern

- **true_color.js**  
  Hilfsskript zur Überprüfung und Auswahl wolkenfreier Satellitenbilder. Es dient der Visualisierung von True-Color-Kompositen, um die Bildqualität vor der Analyse sicherzustellen.

- **imports.js**  
  In dieser Datei sind alle für die Analyse benötigten Geometrien (z.B. Theresienwiese, Innenstadt, Forst, Schlosspark, Isar) aufgelistet.  
  Die Datei ist aufgrund der Vielzahl und Länge der Geometrie-Definitionen ausgelagert, um die Übersichtlichkeit des Hauptcodes zu gewährleisten.  
  In Google Earth Engine (GEE) sind diese Geometrien direkt als "import" eingebunden.  
  **Wichtig:** Ohne die Datei `imports.js` funktioniert das Hauptskript nicht, da alle räumlichen Bezüge und Auswertungsgebiete dort definiert sind.

## Nutzung

1. **Google Earth Engine Zugang**  
   Um die Skripte auszuführen, wird ein Google-Konto sowie Zugang zur Google Earth Engine benötigt. Die Registrierung ist kostenlos, aber eine Freischaltung durch Google ist erforderlich.

   - [Google Earth Engine Code Editor](https://code.earthengine.google.com/)
   - 👉 [UHI-Analyse in Earth Engine öffnen](https://code.earthengine.google.com/21dd8c0476c15c8dea45d8bbd1c600ce)
   - 👉 [True Color in Earth Engine öffnen](https://code.earthengine.google.com/affe4e1b2085bdc0eb85caf08121b183)

2. **Skripte verwenden**  
   - Die Datei `uhi_theresienwiese.js` kann direkt im Google Earth Engine Code Editor ausgeführt (Run) werden.  
   - Die Datei `true_color.js` dient zur Vorabprüfung der Bildqualität und wurde vor der Hauptanalyse verwendet.  
   - Die Datei `imports.js` Ist in GEE bereits enthalten.

3. **Ablauf in Google Earth Engine**
   - **Google-Konto** und **freigeschalteter Zugang** zu Google Earth Engine als Voraussetzung.
   Mit einem Klick auf **Run** werden alle notwendigen Analysen automatisch durchgeführt.  
   Über die **Layer-Ansicht** können die einzelnen relevanten Layer (z.B. LST, NDVI, Klassifikationsergebnisse) angezeigt und verglichen werden.
  In der **Konsole** werden die Ergebnisse der Berechnungen, Validierungen und Scatter Plots ausgegeben.



