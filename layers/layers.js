var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_kecamatan_genteng_ar_1 = new ol.format.GeoJSON();
var features_kecamatan_genteng_ar_1 = format_kecamatan_genteng_ar_1.readFeatures(json_kecamatan_genteng_ar_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kecamatan_genteng_ar_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kecamatan_genteng_ar_1.addFeatures(features_kecamatan_genteng_ar_1);
var lyr_kecamatan_genteng_ar_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kecamatan_genteng_ar_1, 
                style: style_kecamatan_genteng_ar_1,
                popuplayertitle: 'kecamatan_genteng_ar',
                interactive: true,
                title: '<img src="styles/legend/kecamatan_genteng_ar_1.png" /> kecamatan_genteng_ar'
            });
var format_jalan_clean_2 = new ol.format.GeoJSON();
var features_jalan_clean_2 = format_jalan_clean_2.readFeatures(json_jalan_clean_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalan_clean_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalan_clean_2.addFeatures(features_jalan_clean_2);
var lyr_jalan_clean_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalan_clean_2, 
                style: style_jalan_clean_2,
                popuplayertitle: 'jalan_clean',
                interactive: true,
                title: '<img src="styles/legend/jalan_clean_2.png" /> jalan_clean'
            });
var format_400mGenteng_3 = new ol.format.GeoJSON();
var features_400mGenteng_3 = format_400mGenteng_3.readFeatures(json_400mGenteng_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_400mGenteng_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_400mGenteng_3.addFeatures(features_400mGenteng_3);
var lyr_400mGenteng_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_400mGenteng_3, 
                style: style_400mGenteng_3,
                popuplayertitle: '400m Genteng',
                interactive: false,
                title: '<img src="styles/legend/400mGenteng_3.png" /> 400m Genteng'
            });
var format_Intersection_4 = new ol.format.GeoJSON();
var features_Intersection_4 = format_Intersection_4.readFeatures(json_Intersection_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Intersection_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Intersection_4.addFeatures(features_Intersection_4);
var lyr_Intersection_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Intersection_4, 
                style: style_Intersection_4,
                popuplayertitle: 'Intersection',
                interactive: false,
                title: '<img src="styles/legend/Intersection_4.png" /> Intersection'
            });
var format_Dissolved_5 = new ol.format.GeoJSON();
var features_Dissolved_5 = format_Dissolved_5.readFeatures(json_Dissolved_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dissolved_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dissolved_5.addFeatures(features_Dissolved_5);
var lyr_Dissolved_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dissolved_5, 
                style: style_Dissolved_5,
                popuplayertitle: 'Dissolved',
                interactive: false,
                title: '<img src="styles/legend/Dissolved_5.png" /> Dissolved'
            });
var format_halteKecamatanGenteng_6 = new ol.format.GeoJSON();
var features_halteKecamatanGenteng_6 = format_halteKecamatanGenteng_6.readFeatures(json_halteKecamatanGenteng_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_halteKecamatanGenteng_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_halteKecamatanGenteng_6.addFeatures(features_halteKecamatanGenteng_6);
var lyr_halteKecamatanGenteng_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_halteKecamatanGenteng_6, 
                style: style_halteKecamatanGenteng_6,
                popuplayertitle: 'halte Kecamatan Genteng',
                interactive: true,
    title: 'halte Kecamatan Genteng<br />\
    <img src="styles/legend/halteKecamatanGenteng_6_0.png" /> Halte Balai Kota<br />\
    <img src="styles/legend/halteKecamatanGenteng_6_1.png" /> Halte Bambu Runcing<br />\
    <img src="styles/legend/halteKecamatanGenteng_6_2.png" /> Halte Basra<br />\
    <img src="styles/legend/halteKecamatanGenteng_6_3.png" /> Halte Cak Durasim A<br />\
    <img src="styles/legend/halteKecamatanGenteng_6_4.png" /> Halte Cak Durasim B<br />\
    <img src="styles/legend/halteKecamatanGenteng_6_5.png" /> Halte Embong Kemiri<br />\
    <img src="styles/legend/halteKecamatanGenteng_6_6.png" /> Halte Embong Malang<br />\
    <img src="styles/legend/halteKecamatanGenteng_6_7.png" /> Halte Embong Malang 2<br />\
    <img src="styles/legend/halteKecamatanGenteng_6_8.png" /> Halte Embong Wungu<br />\
    <img src="styles/legend/halteKecamatanGenteng_6_9.png" /> Halte Genteng Kali A<br />\
    <img src="styles/legend/halteKecamatanGenteng_6_10.png" /> Halte Genteng Kali B<br />\
    <img src="styles/legend/halteKecamatanGenteng_6_11.png" /> Halte Gondosuli<br />\
    <img src="styles/legend/halteKecamatanGenteng_6_12.png" /> Halte Grand City<br />\
    <img src="styles/legend/halteKecamatanGenteng_6_13.png" /> Halte Gubernur Suryo<br />\
    <img src="styles/legend/halteKecamatanGenteng_6_14.png" /> Halte Jaksa Agung Suprapto<br />\
    <img src="styles/legend/halteKecamatanGenteng_6_15.png" /> Halte Jimerto<br />\
    <img src="styles/legend/halteKecamatanGenteng_6_16.png" /> Halte Kaliasin<br />\
    <img src="styles/legend/halteKecamatanGenteng_6_17.png" /> Halte Kantor Dinas Pendidikan<br />\
    <img src="styles/legend/halteKecamatanGenteng_6_18.png" /> Halte Kayoon 1A<br />\
    <img src="styles/legend/halteKecamatanGenteng_6_19.png" /> Halte Kayoon 1B<br />\
    <img src="styles/legend/halteKecamatanGenteng_6_20.png" /> Halte Kayoon 2A<br />\
    <img src="styles/legend/halteKecamatanGenteng_6_21.png" /> Halte Kayoon 2B<br />\
    <img src="styles/legend/halteKecamatanGenteng_6_22.png" /> Halte Ketabang Ngemplak<br />\
    <img src="styles/legend/halteKecamatanGenteng_6_23.png" /> Halte MMPA SIOLA A<br />\
    <img src="styles/legend/halteKecamatanGenteng_6_24.png" /> Halte Monkasel<br />\
    <img src="styles/legend/halteKecamatanGenteng_6_25.png" /> Halte Monumen Sudirman<br />\
    <img src="styles/legend/halteKecamatanGenteng_6_26.png" /> Halte MPP SIOLA B<br />\
    <img src="styles/legend/halteKecamatanGenteng_6_27.png" /> Halte Ngemplak<br />\
    <img src="styles/legend/halteKecamatanGenteng_6_28.png" /> Halte Pangsud<br />\
    <img src="styles/legend/halteKecamatanGenteng_6_29.png" /> Halte Pemuda<br />\
    <img src="styles/legend/halteKecamatanGenteng_6_30.png" /> Halte PMI<br />\
    <img src="styles/legend/halteKecamatanGenteng_6_31.png" /> Halte Simpang Dukuh<br />\
    <img src="styles/legend/halteKecamatanGenteng_6_32.png" /> Halte Sindoro<br />\
    <img src="styles/legend/halteKecamatanGenteng_6_33.png" /> Halte SIOLA<br />\
    <img src="styles/legend/halteKecamatanGenteng_6_34.png" /> Halte Slamet<br />\
    <img src="styles/legend/halteKecamatanGenteng_6_35.png" /> Halte SMPN 3<br />\
    <img src="styles/legend/halteKecamatanGenteng_6_36.png" /> Halte Sono Kembang<br />\
    <img src="styles/legend/halteKecamatanGenteng_6_37.png" /> Halte Sono Kembang 2<br />\
    <img src="styles/legend/halteKecamatanGenteng_6_38.png" /> Halte Taman Apsari<br />\
    <img src="styles/legend/halteKecamatanGenteng_6_39.png" /> Halte Taman Prestasi<br />\
    <img src="styles/legend/halteKecamatanGenteng_6_40.png" /> Halte Tunjungan<br />\
    <img src="styles/legend/halteKecamatanGenteng_6_41.png" /> Halte Urip Sumoharjo 1<br />\
    <img src="styles/legend/halteKecamatanGenteng_6_42.png" /> Halte Wuni<br />\
    <img src="styles/legend/halteKecamatanGenteng_6_43.png" /> Halte Yos Sudarso<br />\
    <img src="styles/legend/halteKecamatanGenteng_6_44.png" /> <br />' });
var format_HalteKecamatanGenteng_7 = new ol.format.GeoJSON();
var features_HalteKecamatanGenteng_7 = format_HalteKecamatanGenteng_7.readFeatures(json_HalteKecamatanGenteng_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HalteKecamatanGenteng_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HalteKecamatanGenteng_7.addFeatures(features_HalteKecamatanGenteng_7);
var lyr_HalteKecamatanGenteng_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HalteKecamatanGenteng_7, 
                style: style_HalteKecamatanGenteng_7,
                popuplayertitle: 'Halte Kecamatan Genteng',
                interactive: true,
    title: 'Halte Kecamatan Genteng<br />\
    <img src="styles/legend/HalteKecamatanGenteng_7_0.png" /> Halte Balai Kota<br />\
    <img src="styles/legend/HalteKecamatanGenteng_7_1.png" /> Halte Bambu Runcing<br />\
    <img src="styles/legend/HalteKecamatanGenteng_7_2.png" /> Halte Basra<br />\
    <img src="styles/legend/HalteKecamatanGenteng_7_3.png" /> Halte Cak Durasim A<br />\
    <img src="styles/legend/HalteKecamatanGenteng_7_4.png" /> Halte Cak Durasim B<br />\
    <img src="styles/legend/HalteKecamatanGenteng_7_5.png" /> Halte Embong Kemiri<br />\
    <img src="styles/legend/HalteKecamatanGenteng_7_6.png" /> Halte Embong Malang<br />\
    <img src="styles/legend/HalteKecamatanGenteng_7_7.png" /> Halte Embong Malang 2<br />\
    <img src="styles/legend/HalteKecamatanGenteng_7_8.png" /> Halte Embong Wungu<br />\
    <img src="styles/legend/HalteKecamatanGenteng_7_9.png" /> Halte Genteng Kali A<br />\
    <img src="styles/legend/HalteKecamatanGenteng_7_10.png" /> Halte Genteng Kali B<br />\
    <img src="styles/legend/HalteKecamatanGenteng_7_11.png" /> Halte Gondosuli<br />\
    <img src="styles/legend/HalteKecamatanGenteng_7_12.png" /> Halte Grand City<br />\
    <img src="styles/legend/HalteKecamatanGenteng_7_13.png" /> Halte Gubernur Suryo<br />\
    <img src="styles/legend/HalteKecamatanGenteng_7_14.png" /> Halte Jaksa Agung Suprapto<br />\
    <img src="styles/legend/HalteKecamatanGenteng_7_15.png" /> Halte Jimerto<br />\
    <img src="styles/legend/HalteKecamatanGenteng_7_16.png" /> Halte Kaliasin<br />\
    <img src="styles/legend/HalteKecamatanGenteng_7_17.png" /> Halte Kantor Dinas Pendidikan<br />\
    <img src="styles/legend/HalteKecamatanGenteng_7_18.png" /> Halte Kayoon 1A<br />\
    <img src="styles/legend/HalteKecamatanGenteng_7_19.png" /> Halte Kayoon 1B<br />\
    <img src="styles/legend/HalteKecamatanGenteng_7_20.png" /> Halte Kayoon 2A<br />\
    <img src="styles/legend/HalteKecamatanGenteng_7_21.png" /> Halte Kayoon 2B<br />\
    <img src="styles/legend/HalteKecamatanGenteng_7_22.png" /> Halte Ketabang Ngemplak<br />\
    <img src="styles/legend/HalteKecamatanGenteng_7_23.png" /> Halte MMPA SIOLA A<br />\
    <img src="styles/legend/HalteKecamatanGenteng_7_24.png" /> Halte Monkasel<br />\
    <img src="styles/legend/HalteKecamatanGenteng_7_25.png" /> Halte Monumen Sudirman<br />\
    <img src="styles/legend/HalteKecamatanGenteng_7_26.png" /> Halte MPP SIOLA B<br />\
    <img src="styles/legend/HalteKecamatanGenteng_7_27.png" /> Halte Ngemplak<br />\
    <img src="styles/legend/HalteKecamatanGenteng_7_28.png" /> Halte Pangsud<br />\
    <img src="styles/legend/HalteKecamatanGenteng_7_29.png" /> Halte Pemuda<br />\
    <img src="styles/legend/HalteKecamatanGenteng_7_30.png" /> Halte PMI<br />\
    <img src="styles/legend/HalteKecamatanGenteng_7_31.png" /> Halte Simpang Dukuh<br />\
    <img src="styles/legend/HalteKecamatanGenteng_7_32.png" /> Halte Sindoro<br />\
    <img src="styles/legend/HalteKecamatanGenteng_7_33.png" /> Halte SIOLA<br />\
    <img src="styles/legend/HalteKecamatanGenteng_7_34.png" /> Halte Slamet<br />\
    <img src="styles/legend/HalteKecamatanGenteng_7_35.png" /> Halte SMPN 3<br />\
    <img src="styles/legend/HalteKecamatanGenteng_7_36.png" /> Halte Sono Kembang<br />\
    <img src="styles/legend/HalteKecamatanGenteng_7_37.png" /> Halte Sono Kembang 2<br />\
    <img src="styles/legend/HalteKecamatanGenteng_7_38.png" /> Halte Taman Apsari<br />\
    <img src="styles/legend/HalteKecamatanGenteng_7_39.png" /> Halte Taman Prestasi<br />\
    <img src="styles/legend/HalteKecamatanGenteng_7_40.png" /> Halte Tunjungan<br />\
    <img src="styles/legend/HalteKecamatanGenteng_7_41.png" /> Halte Urip Sumoharjo 1<br />\
    <img src="styles/legend/HalteKecamatanGenteng_7_42.png" /> Halte Wuni<br />\
    <img src="styles/legend/HalteKecamatanGenteng_7_43.png" /> Halte Yos Sudarso<br />' });

lyr_GoogleRoad_0.setVisible(true);lyr_kecamatan_genteng_ar_1.setVisible(true);lyr_jalan_clean_2.setVisible(true);lyr_400mGenteng_3.setVisible(true);lyr_Intersection_4.setVisible(true);lyr_Dissolved_5.setVisible(true);lyr_halteKecamatanGenteng_6.setVisible(true);lyr_HalteKecamatanGenteng_7.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_kecamatan_genteng_ar_1,lyr_jalan_clean_2,lyr_400mGenteng_3,lyr_Intersection_4,lyr_Dissolved_5,lyr_halteKecamatanGenteng_6,lyr_HalteKecamatanGenteng_7];
lyr_kecamatan_genteng_ar_1.set('fieldAliases', {'full_id': 'full_id', 'Kecamatan': 'Kecamatan', 'Kelurahan': 'Kelurahan', 'Luas': 'Luas', });
lyr_jalan_clean_2.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'bridge': 'bridge', 'tunnel': 'tunnel', 'width': 'width', 'highway': 'highway', 'surface': 'surface', 'railway': 'railway', 'layer': 'layer', 'oneway': 'oneway', 'name': 'name', 'smoothness': 'smoothness', });
lyr_400mGenteng_3.set('fieldAliases', {'fid': 'fid', 'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'type': 'type', 'start': 'start', });
lyr_Intersection_4.set('fieldAliases', {'Nama_Halte': 'Nama_Halte', 'start': 'start', 'Kecamatan': 'Kecamatan', 'Kelurahan': 'Kelurahan', });
lyr_Dissolved_5.set('fieldAliases', {'Nama_Halte': 'Nama_Halte', 'start': 'start', 'Kecamatan': 'Kecamatan', 'Kelurahan': 'Kelurahan', 'Luas': 'Luas', 'Informasi Halte__Nama_Halte': 'Informasi Halte__Nama_Halte', 'Informasi Halte__RUTE': 'Informasi Halte__RUTE', 'Informasi Halte__Destinasi': 'Informasi Halte__Destinasi', });
lyr_halteKecamatanGenteng_6.set('fieldAliases', {'Nama_Halte': 'Nama_Halte', 'Foto': 'Foto', 'Informasi Halte__RUTE': 'Informasi Halte__RUTE', 'Informasi Halte__Destinasi': 'Informasi Halte__Destinasi', });
lyr_HalteKecamatanGenteng_7.set('fieldAliases', {'Halte ': 'Halte ', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'Informasi': 'Informasi', 'Destinasi': 'Destinasi', 'Foto': 'Foto', });
lyr_kecamatan_genteng_ar_1.set('fieldImages', {'full_id': '', 'Kecamatan': '', 'Kelurahan': '', 'Luas': '', });
lyr_jalan_clean_2.set('fieldImages', {'fid': '', 'osm_id': '', 'bridge': '', 'tunnel': '', 'width': '', 'highway': '', 'surface': '', 'railway': '', 'layer': '', 'oneway': '', 'name': '', 'smoothness': '', });
lyr_400mGenteng_3.set('fieldImages', {'fid': 'TextEdit', 'Nama_Halte': 'TextEdit', 'Keterangan': 'TextEdit', 'Sumber': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', });
lyr_Intersection_4.set('fieldImages', {'Nama_Halte': '', 'start': '', 'Kecamatan': '', 'Kelurahan': '', });
lyr_Dissolved_5.set('fieldImages', {'Nama_Halte': 'TextEdit', 'start': 'TextEdit', 'Kecamatan': 'TextEdit', 'Kelurahan': 'TextEdit', 'Luas': 'TextEdit', 'Informasi Halte__Nama_Halte': 'TextEdit', 'Informasi Halte__RUTE': 'TextEdit', 'Informasi Halte__Destinasi': 'TextEdit', });
lyr_halteKecamatanGenteng_6.set('fieldImages', {'Nama_Halte': 'TextEdit', 'Foto': 'ExternalResource', 'Informasi Halte__RUTE': 'TextEdit', 'Informasi Halte__Destinasi': 'TextEdit', });
lyr_HalteKecamatanGenteng_7.set('fieldImages', {'Halte ': 'TextEdit', 'Keterangan': 'TextEdit', 'Sumber': 'TextEdit', 'Informasi': 'TextEdit', 'Destinasi': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_kecamatan_genteng_ar_1.set('fieldLabels', {'full_id': 'hidden field', 'Kecamatan': 'no label', 'Kelurahan': 'inline label - always visible', 'Luas': 'hidden field', });
lyr_jalan_clean_2.set('fieldLabels', {'fid': 'hidden field', 'osm_id': 'hidden field', 'bridge': 'hidden field', 'tunnel': 'hidden field', 'width': 'hidden field', 'highway': 'hidden field', 'surface': 'hidden field', 'railway': 'hidden field', 'layer': 'hidden field', 'oneway': 'hidden field', 'name': 'inline label - always visible', 'smoothness': 'hidden field', });
lyr_400mGenteng_3.set('fieldLabels', {'fid': 'header label - visible with data', 'Nama_Halte': 'no label', 'Keterangan': 'no label', 'Sumber': 'no label', 'type': 'no label', 'start': 'no label', });
lyr_Intersection_4.set('fieldLabels', {'Nama_Halte': 'no label', 'start': 'no label', 'Kecamatan': 'no label', 'Kelurahan': 'no label', });
lyr_Dissolved_5.set('fieldLabels', {'Nama_Halte': 'no label', 'start': 'no label', 'Kecamatan': 'no label', 'Kelurahan': 'no label', 'Luas': 'no label', 'Informasi Halte__Nama_Halte': 'no label', 'Informasi Halte__RUTE': 'no label', 'Informasi Halte__Destinasi': 'no label', });
lyr_halteKecamatanGenteng_6.set('fieldLabels', {'Nama_Halte': 'inline label - always visible', 'Foto': 'no label', 'Informasi Halte__RUTE': 'hidden field', 'Informasi Halte__Destinasi': 'inline label - always visible', });
lyr_HalteKecamatanGenteng_7.set('fieldLabels', {'Halte ': 'inline label - always visible', 'Keterangan': 'hidden field', 'Sumber': 'hidden field', 'Informasi': 'hidden field', 'Destinasi': 'inline label - always visible', 'Foto': 'inline label - always visible', });
lyr_HalteKecamatanGenteng_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});