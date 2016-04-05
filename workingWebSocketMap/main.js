var gj, ws;

function main() {
    var div = document.getElementById('map');
    var map = L.map(div).setView([0, 0], 2);
    L.tileLayer('http://a.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    gj = L.geoJson().addTo(map);

    //ws = new WebSocket('ws://localhost:8080/geo-websocket/geofence');//'ws://localhost:3021'
    ws = new WebSocket('ws://ispacevm20.researchstudio.at/geo-websocket/geofence');

    ws.onopen = function() {
        console.log("Opened");
    };
    ws.onclose = function() {
        console.log("Closed");
    };
    ws.onmessage = function(event) {     
    	var str = event.data;
    	str = str.split('&quot;').join('"');
    	console.log("event.data: "+event.data);
    	console.log("str: "+str);
    	
    	feature = JSON.parse(str);     
        console.log(feature);
        gj.addData(feature);
        if (feature.type == "Feature") {
            //gj.addData(feature);
        	L.geoJson(feature).addTo(map).bindPopup(feature.type+": I am "+"\n "+feature.properties.SamplingFOIName);
        } else {
            console.error("Got something other than a geojson feature");
        };
    };
}
