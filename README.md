# Leaflet
Some leaflet stuff


http://leafletjs.com/<br/>
http://geojson.io/

leatlef map: https://wjst.de/images/gps/index.php#6/46.050/14.952

Leaflet can't deal with projected coordinates; it requires unprojected lat/long (decimal degree): http://stackoverflow.com/questions/30510969/leaflet-geojson

Leaflet book: http://files2.syncfusion.com/Downloads/Ebooks/Leafletjs_Succinctly.pdf

http://www.appswithmaps.net/leaflet/extentfinder/, http://www.appswithmaps.net/leaflet/mapdraw/


basemaps:
* https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw
* http://{s}.www.toolserver.org/tiles/bw-mapnik/{z}/{x}/{y}.png
* http://{s}.tile.thunderforest.com/transport/{z}/{x}/{y}.png (cycle, transport, landscape, outdoors, transport-dark)


Note: GeoJSON requires that points are specified in the order of [longitude, latitude] rather than the [latitude, longitude] that Leaflet.js expects.
