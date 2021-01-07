## TX Liquor Store Map

This is an interactive map of every liquor store in Texas alongside population density. Liquor store data comes from TABC website and population data comes from 2016 US Census API. The data is a bit dated and this is mostly for show.

To use, Simply place all the files in a root directory, run a http server from the directory, and navigate to the localhost in a browser (works best in Chrome).


-MAP FEATURES:
-Each marker represents a place of business with a Packaging (liquor selling) licence.
-The circles are marker clusters. The number tells how many stores are in that radius.
-Click on a cluster to zoom in on that area.
-Click on a store marker for more info about it (Trade name, address, city, county, phone number)
-Use the search bar to filter the markers displayed (ex. "SPECS", "TOTAL WINE", "DENTON", "AUSTIN", "76131","TARRANT", etc.)
-Double-Click on a spot to place a pin. Click 'Ok' on the following prompt to open that spot in google.
-Population density is color-coded. from least to most populated: (light green -> green -> dark green -> light purple -> dark purple -> pink -> red)

Special thanks to: Leaflet API, US Census API, Texas A&M Geocoding Services, Jupyter Notebook, TABC Inquiry

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

