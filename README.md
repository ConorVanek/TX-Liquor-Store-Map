***************************************************************************************
***************************************************************************************
*  THIS MAP IS DISPLAYED IN A WEB BROWSER USING A LOCAL HTTP SERVER THROUGH PYTHON.   *
*  IF PYTHON IS NOT INSTALLED AND IN YOUR %PATH% DIRECTORY LIST FOR COMMAND PROMPT,   *
*                          THESE INSTRUCTIONS WON'T WORK.                             *
***************************************************************************************
***************************************************************************************


-I'm interested in any suggestions that might improve this tool!
Email me at cvanek@goodygoody.com

-Currently these instructions only work on Windows computers.

-HOW TO OPEN THE MAP (THE EASY WAY):
1) Unzip this folder and put it anywhere in your C:/ drive.
2) Double-Click GoodyMap.bat... That's it! (Must have Google Chrome installed)
(Note: Don't close out the command window that opens up. This window is running the http server used to
access the javascript libraries necessary to render the map!)

-TO MANUALLY START A WEB SERVER WITH PYTHON AND OPEN THE MAP (THE LESS EASY WAY):
1) Unzip this folder and put it anywhere in your C:/ drive.
2) Open Command Prompt.
3) Navigate to the root directory (that's the folder that this README file is in.)
4) Type "python -m http.server" and press ENTER (Must have python installed and listed in your %PATH% variables.)
5) Open a web browser and navigate to http://localhost:8000 (Chrome works best.)
6) The map should load. 


-MAP FEATURES:
-Each marker represents a place of business with a Packaging (liquor selling) licence.
-The circles are marker clusters. The number tells how many stores are in that radius.
-Click on a cluster to zoom in on that area.
-Click on a store marker for more info about it (Trade name, address, city, county, phone number)
-Use the search bar to filter the markers displayed (ex. "SPECS", "TOTAL WINE", "DENTON", "AUSTIN", "76131","TARRANT", etc.)
-Double-Click on a spot to place a pin. Click 'Ok' on the following prompt to open that spot in google.
-Population density is color-coded. from least to most populated: (light green -> green -> dark green -> light purple -> dark purple -> pink -> red)

Special thanks to: Leaflet API, US Census API, Texas A&M Geocoding Services, Jupyter Notebook, TABC Inquiry, and
all the countless online contributors and discussions in the open-source community which made this possible.
I hope you find it useful.
-Conor

========================================================================================================================================

Simple Leaflet map template for putting points on a map.

<img src="https://raw.github.com/perrygeo/leaflet-simple-csv/master/img/screenshot1.png" alt="Leaflet" />

### Features
* Data is in tabular delimited-text (csv, etc.) with two required columns: `lat` and `lng`
* Points are plotted on full-screen [Leaflet](https://github.com/Leaflet/Leaflet) map
* Point markers are clustered dynamically based on zoom level.
* Clicking on a point cluster will zoom into the extent of the underlying features.
* Hovering on the point will display the name. 
* Clicking will display a popup with columns/properties displayed as an html table.
* Full text filtering with typeahead
* Completely client-side javascript with all dependencies included or linked via CDN

###
### Usage
Download, copy the template and load index.html in a browser to confirm that everything works

```
git clone https://github.com/perrygeo/leaflet-simple-csv.git
cd leaflet-simple-csv
cp config.js.template config.js
open index.html
```

Then modify `config.js` and `data/data.csv` according to your needs.

Some browsers do not allow XMLHttpRequests with the `file://` protocol so you'll need to serve it with a web server. For local development, you can use python

```
$ python -m SimpleHTTPServer
Serving HTTP on 0.0.0.0 port 8000 ...
```
Then navigate to `http://localhost:8000` instead.

### Thanks to...

* [Leaflet](https://github.com/Leaflet/Leaflet)
* [Leaflet.geoCSV](https://github.com/joker-x/Leaflet.geoCSV)
* [Leaflet.markercluster](https://github.com/Leaflet/Leaflet.markercluster)
* [Twitter Boostrap](http://twitter.github.io/bootstrap/)
* [jQuery](http://jquery.com/)

