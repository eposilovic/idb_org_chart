// MAP

var root = am5.Root.new("chartdiv"); 
  

// Set themes
root.setThemes([
  am5themes_Animated.new(root)
]);

var chart = root.container.children.push(
  am5map.MapChart.new(root, {
    panX: "none",
    panY: "none",
    wheelY : "none",
    projection: am5map.geoNaturalEarth1()
  })
  
);

// Create polygon series
var polygonSeries = chart.series.push(
  am5map.MapPolygonSeries.new(root, {
    geoJSON: am5geodata_worldLow,
    exclude: ["AQ"]
  })
);

polygonSeries.mapPolygons.template.setAll({
  tooltipText: "{name}",
  interactive: true, 
  fill: am5.color(0xaaaaaa),
  templateField: "columnSettings"
});

polygonSeries.mapPolygons.template.states.create("hover", {
  fill: am5.color(0x30c4ec)
});




var polygonSeries = chart.series.push(
  am5map.MapPolygonSeries.new(root, {
    geoJSON: am5geodata_worldLow,
    include: ["ZA", "DZ", "PL", "SA", "PK", "MY", "TH", "RO", "CM", "BD", "GH", "GR", "OM", "ID", "JO", "SN", "TZ", "AE"], 
    fill: am5.color(0x30c4ec)
  })
);
