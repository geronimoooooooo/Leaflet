var geojson = [{
  "type": "Polygon",
  "coordinates": [
    [
      [-102.774299999583, 27.280200001318],
      [-88.0033999995794, 28.9369000000879],
      [-87.7235000003129, 15.2657999992371],
      [-95.6770999999717, 14.6623000004329],
      [-103.630699999514, 14.0588000016287],
      [-102.774299999583, 27.280200001318]
    ]
  ]
}, {
  "type": "Polygon",
  "coordinates": [
    [
      [-102.774299999583, 27.280200001318],
      [-88.0033999995794, 28.9369000000879],
      [-87.7235000003129, 15.2657999992371],
      [-95.6770999999717, 14.6623000004329],
      [-103.630699999514, 14.0588000016287],
      [-102.774299999583, 27.280200001318]
    ]
  ]
}];

var jsonLayer = L.geoJson().addTo(map);
jsonLayer.addData(geojson);
map.fitBounds(jsonLayer.getBounds());
---------------------------------------------------------------------------------------------

var geoJSONLayer = L.geoJson(geoJSON).addTo(map);

---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------

