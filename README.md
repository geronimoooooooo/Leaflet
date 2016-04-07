# Leaflet
Some leaflet stuff


http://leafletjs.com/<br/>
http://geojson.io/

Esri Leaflet: https://github.com/Esri/esri-leaflet

leatlef map: 
* http://leaflet-extras.github.io/leaflet-providers/preview/
* https://wjst.de/images/gps/index.php#6/46.050/14.952

Leaflet can't deal with projected coordinates; it requires unprojected lat/long (decimal degree): http://stackoverflow.com/questions/30510969/leaflet-geojson

Leaflet book: http://files2.syncfusion.com/Downloads/Ebooks/Leafletjs_Succinctly.pdf
jsfiddle: http://fiddle.jshell.net/nathansnider/sk0ae07u/

http://www.appswithmaps.net/leaflet/extentfinder/, http://www.appswithmaps.net/leaflet/mapdraw/


basemaps:
* https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw
* http://{s}.www.toolserver.org/tiles/bw-mapnik/{z}/{x}/{y}.png
* http://{s}.tile.thunderforest.com/transport/{z}/{x}/{y}.png (cycle, transport, landscape, outdoors, transport-dark)


Note: GeoJSON requires that points are specified in the order of [longitude, latitude] rather than the [latitude, longitude] that Leaflet.js expects.

#slider:
* http://rowanwinsemius.id.au/blog/mapping-species-movement-data-using-leaflet-js/
* http://robinlovelace.net/sketches/goAtyla/index.html
* https://github.com/dwilhelm89/LeafletSlider
* http://www.liedman.net/leaflet-realtime/
* https://github.com/hallahan/LeafletPlayback
* http://leafletplayback.theoutpost.io/
* https://github.com/perliedman/leaflet-realtime
* https://github.com/skeate/Leaflet.timeline


A geofence is basically a “virtual barrier.” When something enters a specified area, an alert is triggered.
