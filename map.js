var map = L.map('map').setView([52.19891, 20.99793], 18);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap'
}).addTo(map);

var polygonS = L.polygon([
    [52.2007, 20.99639],
    [52.20073, 20.99659],
    [52.20012, 20.99686],
    [52.20009, 20.99668],
    [52.20025, 20.9966],
    [52.20025, 20.99655],
    [52.20023, 20.99655],
    [52.20021, 20.99644],
    [52.20027, 20.99641],
    [52.20029, 20.99658]
]).addTo(map);

var polygonH = L.polygon([
    [52.20063, 20.99616],
    [52.20048, 20.99622],
    [52.20045, 20.99606],
    [52.2006, 20.99599]
], {color: 'red'}
).addTo(map);


polygon.bindPopup("Budynek S")