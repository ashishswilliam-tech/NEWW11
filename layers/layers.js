var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_WardBoundary_1 = new ol.format.GeoJSON();
var features_WardBoundary_1 = format_WardBoundary_1.readFeatures(json_WardBoundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WardBoundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WardBoundary_1.addFeatures(features_WardBoundary_1);
var lyr_WardBoundary_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WardBoundary_1, 
                style: style_WardBoundary_1,
                popuplayertitle: 'WardBoundary',
                interactive: true,
    title: 'WardBoundary<br />\
    <img src="styles/legend/WardBoundary_1_0.png" /> ARANMULA<br />\
    <img src="styles/legend/WardBoundary_1_1.png" /> ARANMULA WEST<br />\
    <img src="styles/legend/WardBoundary_1_2.png" /> ARATTUPUZHA<br />\
    <img src="styles/legend/WardBoundary_1_3.png" /> EDASSERIMALA<br />\
    <img src="styles/legend/WardBoundary_1_4.png" /> EDAYARANMULA NORTH<br />\
    <img src="styles/legend/WardBoundary_1_5.png" /> ERUMAKKADU<br />\
    <img src="styles/legend/WardBoundary_1_6.png" /> GURUKKANKUNNU<br />\
    <img src="styles/legend/WardBoundary_1_7.png" /> KALARIKKODU<br />\
    <img src="styles/legend/WardBoundary_1_8.png" /> KIDANGANNUR EAST<br />\
    <img src="styles/legend/WardBoundary_1_9.png" /> KIDANGANNUR WEST<br />\
    <img src="styles/legend/WardBoundary_1_10.png" /> KOTTA EAST<br />\
    <img src="styles/legend/WardBoundary_1_11.png" /> KOTTA WEST<br />\
    <img src="styles/legend/WardBoundary_1_12.png" /> KOTTAKAKAM<br />\
    <img src="styles/legend/WardBoundary_1_13.png" /> KURICHIMUTTAM NORTH<br />\
    <img src="styles/legend/WardBoundary_1_14.png" /> KURICHIMUTTAM SOUTH<br />\
    <img src="styles/legend/WardBoundary_1_15.png" /> MALAKKARA<br />\
    <img src="styles/legend/WardBoundary_1_16.png" /> NALKALIKKAL<br />\
    <img src="styles/legend/WardBoundary_1_17.png" /> NEERVILAKAM<br />\
    <img src="styles/legend/WardBoundary_1_18.png" /> VALLANA<br />\
    <img src="styles/legend/WardBoundary_1_19.png" /> <br />' });
var format_Anganawadi01_2 = new ol.format.GeoJSON();
var features_Anganawadi01_2 = format_Anganawadi01_2.readFeatures(json_Anganawadi01_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anganawadi01_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anganawadi01_2.addFeatures(features_Anganawadi01_2);
var lyr_Anganawadi01_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anganawadi01_2, 
                style: style_Anganawadi01_2,
                popuplayertitle: 'Anganawadi01',
                interactive: true,
                title: '<img src="styles/legend/Anganawadi01_2.png" /> Anganawadi01'
            });

lyr_OSMStandard_0.setVisible(true);lyr_WardBoundary_1.setVisible(true);lyr_Anganawadi01_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_WardBoundary_1,lyr_Anganawadi01_2];
lyr_WardBoundary_1.set('fieldAliases', {'gml_parent': 'gml_parent', 'gml_pare_1': 'gml_pare_1', 'gml_id': 'gml_id', 'geom': 'geom', 'District': 'District', 'LSGD': 'LSGD', 'Ward_Name': 'Ward_Name', 'Ward_No': 'Ward_No', 'Lsgd_Type': 'Lsgd_Type', 'Created_Da': 'Created_Da', 'Surveyor': 'Surveyor', 'Mob_No': 'Mob_No', 'Remarks': 'Remarks', '_distLsgd': '_distLsgd', 'OBJECTID': 'OBJECTID', '_result': '_result', '_ulid': '_ulid', '_distLsgd2': '_distLsgd2', });
lyr_Anganawadi01_2.set('fieldAliases', {'id': 'id', 'AssetName': 'AssetName', 'Location': 'Location', 'Date': 'Date', 'LULC': 'LULC', 'Remarks': 'Remarks', 'Photo': 'Photo', 'Surveyor': 'Surveyor', 'layer': 'layer', 'path': 'path', });
lyr_WardBoundary_1.set('fieldImages', {'gml_parent': 'TextEdit', 'gml_pare_1': 'TextEdit', 'gml_id': 'TextEdit', 'geom': 'TextEdit', 'District': 'TextEdit', 'LSGD': 'TextEdit', 'Ward_Name': 'TextEdit', 'Ward_No': 'TextEdit', 'Lsgd_Type': 'TextEdit', 'Created_Da': 'TextEdit', 'Surveyor': 'TextEdit', 'Mob_No': 'TextEdit', 'Remarks': 'TextEdit', '_distLsgd': 'TextEdit', 'OBJECTID': 'TextEdit', '_result': 'TextEdit', '_ulid': 'TextEdit', '_distLsgd2': 'TextEdit', });
lyr_Anganawadi01_2.set('fieldImages', {'id': 'TextEdit', 'AssetName': 'TextEdit', 'Location': 'TextEdit', 'Date': 'DateTime', 'LULC': 'TextEdit', 'Remarks': 'TextEdit', 'Photo': 'TextEdit', 'Surveyor': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_WardBoundary_1.set('fieldLabels', {'gml_parent': 'no label', 'gml_pare_1': 'no label', 'gml_id': 'no label', 'geom': 'no label', 'District': 'inline label - always visible', 'LSGD': 'inline label - visible with data', 'Ward_Name': 'no label', 'Ward_No': 'no label', 'Lsgd_Type': 'no label', 'Created_Da': 'no label', 'Surveyor': 'no label', 'Mob_No': 'no label', 'Remarks': 'no label', '_distLsgd': 'no label', 'OBJECTID': 'no label', '_result': 'no label', '_ulid': 'no label', '_distLsgd2': 'no label', });
lyr_Anganawadi01_2.set('fieldLabels', {'id': 'no label', 'AssetName': 'no label', 'Location': 'inline label - always visible', 'Date': 'no label', 'LULC': 'inline label - visible with data', 'Remarks': 'no label', 'Photo': 'no label', 'Surveyor': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Anganawadi01_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});