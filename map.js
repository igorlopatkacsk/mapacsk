var map = L.map('map', {center: [52.19891, 20.99793], zoom: 17})
// .setView([52.19891, 20.99793], 18);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap',
    maxNativeZoom:19,
    maxZoom:20
}).addTo(map);


var letterIcon = L.Icon.extend({
    options: {
        iconSize:[30, 30]
    }
});

function polygonWithIconAndPopup(coordinates, body, color, iconUrl, title) {
    let polygon =L.polygon(coordinates, {color: color}).addTo(map)
    var icon = new letterIcon({iconUrl: iconUrl})
    let marker = L.marker(polygon.getBounds().getCenter(), {icon: icon, title: title}).addTo(map).bindPopup(body)
    return marker
}

function polygonWithPopup(coordinates, body, color) {
    let polygon =L.polygon(coordinates, {color: color}).addTo(map)
    polygon.bindPopup(body)
    polygon.on('mouseover', function() {
        this.openPopup()
    })
    polygon.on('mouseout', function() {
        this.closePopup()
    })
}

function newPolygon(coordinates, color) {
    let polygon = L.polygon(coordinates, {color: color, fillOpacity: 0.05},).addTo(map)
}


//Dane (koordynaty + opisy)

let coordinatesSzpital = [
    [52.1994168,20.997354],
[52.1995189,20.997667],
[52.1996567,20.99806],
[52.1999637,20.9999614],
[52.199933,20.9999826],
[52.199915,20.9999924],
[52.1999054,20.9999976],
[52.1998961,21.0000027],
[52.1996655,21.000141],
[52.199599,21.0002749],
[52.1994928,21.0003046],
[52.1994863,21.0004221],
[52.1994462,21.000432],
[52.1994187,21.0004399],
[52.1993891,21.000447],
[52.1992484,21.000485],
[52.1992388,21.0004876],
[52.1992277,21.0004905],
[52.1988952,21.0005774],
[52.198871,21.0005838],
[52.1988603,21.0005866],
[52.1988196,21.000596],
[52.1987873,21.0005908],
[52.1986729,21.000619],
[52.1986452,21.0003261],
[52.1986224,21.0003393],
[52.1985971,21.0003549],
[52.1985582,21.0003788],
[52.198046,21.000513],
[52.1970995,21.0007949],
[52.1975258,20.9977193],
[52.1974805,20.9976358],
[52.1978539,20.9947353],
[52.198017,20.993656],
[52.1980853,20.9936955],
[52.1980977,20.9937027],
[52.1981239,20.9937163],
[52.198144,20.9937267],
[52.1986845,20.9940075],
[52.1987044,20.9940168],
[52.1987856,20.9940588],
[52.1987959,20.9940641],
[52.1986519,20.9948406],
[52.1986378,20.9948315],
[52.1986251,20.9949369],
[52.1986029,20.9951207],
[52.1987516,20.9960232],
[52.1987728,20.9960346],
[52.1991627,20.9962442],
[52.1991682,20.9962171],
[52.1992551,20.9957887],
[52.1992618,20.9957558],
[52.1992907,20.9956162],
[52.1993113,20.9955166],
[52.1993143,20.9955022],
[52.1994036,20.9955482],
[52.1993973,20.9955801],
[52.1995915,20.9956809],
[52.1996176,20.9956945],
[52.1997924,20.9957831],
[52.2000098,20.9947238],
[52.2005654,20.9950001],
[52.2007941,20.9962873],
[52.2008644,20.9966888],
[52.2000976,20.9970289],
[52.1999204,20.9971153],
[52.1998651,20.9967822],
[52.1998573,20.9967352],
[52.1995203,20.9968955],
[52.1993999,20.9969534],
[52.1993708,20.9969673],
[52.1994168,20.997354]]
let coordinatesA = [
    [52.1985314,20.9981275],
    [52.198543,20.9981943],
    [52.1984836,20.9982221],
    [52.1984685,20.9982275],
    [52.1985004,20.9984031],
    [52.1985161,20.998395],
    [52.1985608,20.998375],
    [52.1985751,20.99846],
    [52.1989535,20.998276],
    [52.1989433,20.9982189],
    [52.1989697,20.9982066],
    [52.1989316,20.9979922],
    [52.1989053,20.9980048],
    [52.1988915,20.9980115],
    [52.1988833,20.9979641],
    [52.1985314,20.9981275]]
let opisA = `
<p></p>
<summary style="box-sizing: border-box; margin: 0px; padding: 1.7rem 2rem 1.7rem 0px; font-style: inherit; font-variant: inherit; font-weight: bold; font-stretch: inherit; font-size: 1.25rem; line-height: 1.1; font-family: inherit; vertical-align: baseline; cursor: pointer; display: block; color: rgb(0, 82, 165); position: relative;">Budynek&nbsp;A</summary>
<p></p>
<table cellspacing="0" class="Table" style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; border-collapse: collapse; border-spacing: 0px;">
<tbody style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline;">
    <tr style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline;">
        <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: baseline; width: 123px;">
            <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><strong style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: bold; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Parter</span></span></strong></span></p>
            <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;">&nbsp;</span></p>
        </td>
        <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: baseline; width: 482px;">
            <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Szpitalny Oddział Ratunkowy z Zespołami Wyjazdowymi</span></span></span></p>
        </td>
    </tr>
    <tr style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline;">
        <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: baseline; width: 123px;">
            <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><strong style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: bold; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">I piętro</span></span></strong></span></p>
            <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;">&nbsp;</span></p>
        </td>
        <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: baseline; width: 482px;">
            <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12pt; line-height: inherit; font-family: inherit; vertical-align: baseline;">Dział Inżynierii Medycznej</span></span></p>
        </td>
    </tr>
    <tr style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline;">
        <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: baseline; width: 123px;">
            <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><strong style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: bold; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">II piętro</span></span></strong></span></p>
            <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;">&nbsp;</span></p>
        </td>
        <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: baseline; width: 482px;">
            <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12pt; line-height: inherit; font-family: inherit; vertical-align: baseline;">Patologia Ciąży</span></span></p>
        </td>
    </tr>
    <tr style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline;">
        <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: baseline; width: 123px;">
            <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><strong style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: bold; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">III piętro</span></span></strong></span></p>
        </td>
        <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: baseline; width: 482px;">
            <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Klinika Kardiologii Inwazyjnej</span></span></span></p>
        </td>
    </tr>
    <tr style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline;">
        <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: baseline; width: 123px;">
            <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><strong style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: bold; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">IV piętro</span></span></strong></span></p>
        </td>
        <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: baseline; width: 482px;">
            <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12pt; line-height: inherit; font-family: inherit; vertical-align: baseline;">Multispecjalistyczny Covidowy Oddział Zabiegowy</span></span></p>
        </td>
    </tr>
    <tr style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline;">
        <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: baseline; width: 123px;">
            <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><strong style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: bold; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">V piętro</span></span></strong></span></p>
        </td>
        <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: baseline; width: 482px;">
            <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; background-color: white;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Bloki operacyjne</span></span></span></span></p>
        </td>
    </tr>
</tbody>
</table>
`
let coordinatesB = [
    [52.198653,20.9992712],
    [52.1986499,20.9992534],
    [52.1986422,20.99921],
    [52.1986575,20.9992029],
    [52.1986174,20.9989753],
    [52.1985643,20.9986736],
    [52.1985161,20.998395],
    [52.1985004,20.9984031],
    [52.1984685,20.9982275],
    [52.1984836,20.9982221],
    [52.1984087,20.9978051],
    [52.198389,20.9978143],
    [52.1982687,20.9978708],
    [52.1982461,20.9978814],
    [52.1983313,20.9983588],
    [52.1984401,20.9989682],
    [52.1984959,20.9992811],
    [52.1985127,20.9992734],
    [52.1985226,20.9993305],
    [52.198653,20.9992712]]
let opisB = `
<p></p>
<summary style="box-sizing: border-box; margin: 0px; padding: 1.7rem 2rem 1.7rem 0px; font-style: inherit; font-variant: inherit; font-weight: bold; font-stretch: inherit; font-size: 1.25rem; line-height: 1.1; font-family: inherit; vertical-align: baseline; cursor: pointer; display: block; color: rgb(0, 82, 165); position: relative;">Budynek&nbsp;B</summary>
<p></p>
<table cellspacing="0" class="Table" style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; border-collapse: collapse; border-spacing: 0px;">
    <tbody style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline;">
        <tr style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline;">
            <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: baseline; width: 123px;">
                <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><strong style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: bold; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Parter</span></span></strong></span></p>
                <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;">&nbsp;</span></p>
            </td>
            <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: baseline; width: 482px;">
                <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;">Zakład Diagnostyki Radiologicznej</p>
                <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;">Pracownia RTG</p>
            </td>
        </tr>
        <tr style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline;">
            <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: baseline; width: 123px;">
                <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><strong style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: bold; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">I piętro</span></span></strong></span></p>
                <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;">&nbsp;</span></p>
            </td>
            <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: baseline; width: 482px;">
                <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;">Poradnia Ginekologiczna</p>
                <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;">Administracja SOR</p>
            </td>
        </tr>
        <tr style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline;">
            <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: baseline; width: 123px;">
                <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><strong style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: bold; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">II piętro</span></span></strong></span></p>
                <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;">&nbsp;</span></p>
            </td>
            <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: baseline; width: 482px;">
                <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Klinika Położnictwa, Chor&oacute;b Kobiecych i Ginekologii Onkologicznej</span></span></span></p>
            </td>
        </tr>
        <tr style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline;">
            <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: baseline; width: 123px;">
                <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><strong style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: bold; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">III piętro</span></span></strong></span></p>
            </td>
            <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: baseline; width: 482px;">
                <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Klinika Kardiologii Inwazyjnej</span></span></span></p>
            </td>
        </tr>
        <tr style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline;">
            <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: baseline; width: 123px;">
                <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><strong style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: bold; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">IV piętro</span></span></strong></span></p>
            </td>
            <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: baseline; width: 482px;">
                <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12pt; line-height: inherit; font-family: inherit; vertical-align: baseline;">Klinika Chirurgii Og&oacute;lnej i Naczyniowej</span></span></p>
                <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;">Klinika Kardiochirurgii</p>
            </td>
        </tr>
        <tr style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline;">
            <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: baseline; width: 123px;">
                <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><strong style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: bold; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">V piętro</span></span></strong></span></p>
            </td>
            <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: baseline; width: 482px;">
                <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; background-color: white;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Klinika Neurochirurgii</span></span></span></span></p>
                <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Klinika Anestezjologii i Intensywnej Terapii</span></span><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; background-color: white;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">&nbsp;OIT 2</span></span></span></span></p>
            </td>
        </tr>
        <tr style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline;">
            <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: baseline; width: 123px;">
                <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><strong style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: bold; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">VI piętro</span></span></strong></span></p>
            </td>
            <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: baseline; width: 482px;">
                <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; background-color: white;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Poradnia Neurochirurgiczna</span></span></span></span></p>
                <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12pt; line-height: inherit; font-family: inherit; vertical-align: baseline;">Blok Operacyjny Kliniki Chirurgii Og&oacute;lnej i Naczyniowej</span></span></p>
            </td>
        </tr>
    </tbody>
</table>
`
let coordinatesC = [
    [52.198653,20.9992712],
    [52.1985226,20.9993305],
    [52.1983977,20.9993881],
    [52.1984497,20.999687],
    [52.1986408,20.9995988],
    [52.1990578,20.9994063],
    [52.1990043,20.9991056],
    [52.198653,20.9992712]]
let opisC = `
    <p></p>
<summary style="box-sizing: border-box; margin: 0px; padding: 1.7rem 2rem 1.7rem 0px; font-style: inherit; font-variant: inherit; font-weight: bold; font-stretch: inherit; font-size: 1.25rem; line-height: 1.1; font-family: inherit; vertical-align: baseline; cursor: pointer; display: block; color: rgb(0, 82, 165); position: relative;">Budynek&nbsp;C</summary>
<p></p>
<table cellspacing="0" class="Table" style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; border-collapse: collapse; border-spacing: 0px;">
    <tbody style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline;">
        <tr style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline;">
            <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: baseline; width: 66px;">
                <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><strong style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: bold; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Parter</span></strong></span></p>
            </td>
            <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: baseline; width: 369px;">
                <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Poradnia Medycy Rodzinnej</span></span></span></p>
                <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Punkt Szczepień</span></span></span></p>
                <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Poradnia Ortopedyczna</span></span></span></p>
                <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Poradnia Okulistyczna</span></span></span></p>
                <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Poradnia Chirurgii naczyniowej</span></span></span></p>
            </td>
        </tr>
    </tbody>
</table>
`
let coordinatesC6 = [
    [52.19925, 20.99642],
[52.19928, 20.9967],
[52.19938, 20.99667],
[52.19942, 20.99664],
    [52.19939, 20.9964]]
let opisC6 = `
<p></p>
<summary style=" border-box;margin: 0px;padding: 1.7rem 2rem 1.7rem 0px;font-style: inherit;font-variant: inherit;font-weight: bold;font-stretch: inherit;font-size: 1.25rem;line-height: 1.1;font-family: inherit;vertical-align: baseline;cursor: pointer;display: block;color: rgb(0, 82, 165);position: relative;">Budynek&nbsp;C6</summary>
<p></p>
<table cellspacing="0" style=" border-box;margin: 0px;padding: 0px;font: inherit;vertical-align: baseline;border-collapse: collapse;border-spacing: 0px;border: none;">
    <tbody style=" border-box;margin: 0px;padding: 0px;font: inherit;vertical-align: baseline;">
        <tr>
            <td style=" border-box;margin: 0px;padding: 0.5rem;font: inherit;vertical-align: baseline;width: 123px;">
                <p style=" border-box;margin: 0px 0px 1em;padding: 0px;font: inherit;vertical-align: baseline;"><span style=" border-box;margin: 0px;padding: 0px;font-style: inherit;font-variant: inherit;font-weight: inherit;font-stretch: inherit;font-size:15px;line-height: inherit;font-family: inherit;vertical-align: baseline;"><strong style=" border-box;margin: 0px;padding: 0px;font-style: inherit;font-variant: inherit;font-weight: bold;font-stretch: inherit;font-size: inherit;line-height: inherit;font-family: inherit;vertical-align: baseline;">Parter</strong></span></p>
                <p style=" border-box;margin: 0px 0px 1em;padding: 0px;font: inherit;vertical-align: baseline;">&nbsp;</p>
            </td>
            <td style=" border-box;margin: 0px;padding: 0.5rem;font: inherit;vertical-align: baseline;width: 482px;">
                <p style=" border-box;margin: 0px 0px 1em;padding: 0px;font: inherit;vertical-align: baseline;"><span style=" border-box;margin: 0px;padding: 0px;font-style: inherit;font-variant: inherit;font-weight: inherit;font-stretch: inherit;font-size:15px;line-height: inherit;font-family: inherit;vertical-align: baseline;"><span style=" border-box;margin: 0px;padding: 0px;font-style: inherit;font-variant: inherit;font-weight: inherit;font-stretch: inherit;font-size:15px;line-height: inherit;font-family: inherit;vertical-align: baseline;"><span style=" border-box;margin: 0px;padding: 0px;font: inherit;vertical-align: baseline;color: rgb(27, 27, 27);">Pracownia cytodiagnostyczna</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td style=" border-box;margin: 0px;padding: 0.5rem;font: inherit;vertical-align: baseline;width: 123px;">
                <p style=" border-box;margin: 0px 0px 1em;padding: 0px;font: inherit;vertical-align: baseline;"><span style=" border-box;margin: 0px;padding: 0px;font-style: inherit;font-variant: inherit;font-weight: inherit;font-stretch: inherit;font-size:15px;line-height: inherit;font-family: inherit;vertical-align: baseline;"><strong style=" border-box;margin: 0px;padding: 0px;font-style: inherit;font-variant: inherit;font-weight: bold;font-stretch: inherit;font-size: inherit;line-height: inherit;font-family: inherit;vertical-align: baseline;">I piętro</strong></span></p>
                <p style=" border-box;margin: 0px 0px 1em;padding: 0px;font: inherit;vertical-align: baseline;">&nbsp;</p>
            </td>
            <td style=" border-box;margin: 0px;padding: 0.5rem;font: inherit;vertical-align: baseline;width: 482px;">
                <p style=" border-box;margin: 0px 0px 1em;padding: 0px;font: inherit;vertical-align: baseline;"><span style=" border-box;margin: 0px;padding: 0px;font-style: inherit;font-variant: inherit;font-weight: inherit;font-stretch: inherit;font-size:15px;line-height: inherit;font-family: inherit;vertical-align: baseline;"><span style=" border-box;margin: 0px;padding: 0px;font-style: inherit;font-variant: inherit;font-weight: inherit;font-stretch: inherit;font-size:15px;line-height: inherit;font-family: inherit;vertical-align: baseline;"><span style=" border-box;margin: 0px;padding: 0px;font: inherit;vertical-align: baseline;color: rgb(27, 27, 27);">Prosektorium</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td style=" border-box;margin: 0px;padding: 0.5rem;font: inherit;vertical-align: baseline;width: 123px;">
                <p style=" border-box;margin: 0px 0px 1em;padding: 0px;font: inherit;vertical-align: baseline;"><span style=" border-box;margin: 0px;padding: 0px;font-style: inherit;font-variant: inherit;font-weight: inherit;font-stretch: inherit;font-size:15px;line-height: inherit;font-family: inherit;vertical-align: baseline;"><strong style=" border-box;margin: 0px;padding: 0px;font-style: inherit;font-variant: inherit;font-weight: bold;font-stretch: inherit;font-size: inherit;line-height: inherit;font-family: inherit;vertical-align: baseline;">II piętro</strong></span></p>
                <p style=" border-box;margin: 0px 0px 1em;padding: 0px;font: inherit;vertical-align: baseline;">&nbsp;</p>
            </td>
            <td style=" border-box;margin: 0px;padding: 0.5rem;font: inherit;vertical-align: baseline;width: 482px;">
                <p style=" border-box;margin: 0px 0px 1em;padding: 0px;font: inherit;vertical-align: baseline;"><span style=" border-box;margin: 0px;padding: 0px;font-style: inherit;font-variant: inherit;font-weight: inherit;font-stretch: inherit;font-size:15px;line-height: inherit;font-family: inherit;vertical-align: baseline;"><span style=" border-box;margin: 0px;padding: 0px;font-style: inherit;font-variant: inherit;font-weight: inherit;font-stretch: inherit;font-size:15px;line-height: inherit;font-family: inherit;vertical-align: baseline;"><span style=" border-box;margin: 0px;padding: 0px;font: inherit;vertical-align: baseline;color: rgb(27, 27, 27);">Zakład Patomorfologii&nbsp;</span></span></span></p>
            </td>
        </tr>
    </tbody>
</table>
`
let coordinatesD = [
    
    [52.1979248,20.9973242],
    [52.1979091,20.9973173],
    [52.1978781,20.9975061],
    [52.1978768,20.9975147],
    [52.1979342,20.9975382],
    [52.1979319,20.997553],
    [52.198212,20.9976679],
    [52.1982413,20.9974547],
    [52.1981192,20.9974048],
    [52.1979992,20.9973557],
    [52.1979248,20.9973242]]
let opisD = `
    <p></p>
<summary style="box-sizing: border-box; margin: 0px; padding: 1.7rem 2rem 1.7rem 0px; font-style: inherit; font-variant: inherit; font-weight: bold; font-stretch: inherit; font-size: 1.25rem; line-height: 1.1; font-family: inherit; vertical-align: baseline; cursor: pointer; display: block; color: rgb(0, 82, 165); position: relative;">Budynek&nbsp;D</summary>
<p></p>
<table align="center" cellspacing="0" class="Table" style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; border-collapse: collapse; border-spacing: 0px;">
    <tbody style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline;">
        <tr style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline;">
            <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: baseline; width: 123px;">
                <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><strong style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: bold; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Parter</span></span></strong></span></p>
                <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;">&nbsp;</span></p>
            </td>
            <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: baseline; width: 482px;">
                <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Zakład Usprawniania Leczniczego</span></span></span></p>
            </td>
        </tr>
        <tr style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline;">
            <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: baseline; width: 123px;">
                <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><strong style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: bold; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">I piętro</span></span></strong></span></p>
                <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;">&nbsp;</span></p>
            </td>
            <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: baseline; width: 482px;">
                <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12pt; line-height: inherit; font-family: inherit; vertical-align: baseline;">Oddział Rehabilitacji Neurologicznej</span></span></p>
            </td>
        </tr>
        <tr style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline;">
            <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: baseline; width: 123px;">
                <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><strong style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: bold; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">II piętro</span></span></strong></span></p>
                <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;">&nbsp;</span></p>
            </td>
            <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: baseline; width: 482px;">
                <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; background-color: white;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Klinika Neurologii</span></span></span></span></p>
                <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;">Klinika Alergologii Chor&oacute;b Płuc i Chor&oacute;b Wewnętrznych</p>
            </td>
        </tr>
        <tr style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline;">
            <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: baseline; width: 123px;">
                <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><strong style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: bold; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">III piętro</span></span></strong></span></p>
            </td>
            <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: baseline; width: 482px;">
                <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Pracownia Endoskopii</span></span></span></p>
            </td>
        </tr>
        <tr style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline;">
            <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: baseline; width: 123px;">
                <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><strong style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: bold; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">IV piętro</span></span></strong></span></p>
            </td>
            <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: baseline; width: 482px;">
                <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Klinika Anestezjologii i Intensywnej Terapii&nbsp;<span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; background-color: white;">OIT 1</span></span></span></span></p>
            </td>
        </tr>
        <tr style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline;">
            <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: baseline; width: 123px;">
                <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><strong style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: bold; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">V piętro</span></span></strong></span></p>
            </td>
            <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: baseline; width: 482px;">
                <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12pt; line-height: inherit; font-family: inherit; vertical-align: baseline;">Oddział Okulistyki</span></span></p>
            </td>
        </tr>
        <tr style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline;">
            <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: baseline; width: 123px;">
                <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><strong style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: bold; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">VI piętro</span></span></strong></span></p>
            </td>
            <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: baseline; width: 482px;">
                <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12pt; line-height: inherit; font-family: inherit; vertical-align: baseline;">Klinika Dermatologii</span></span></p>
            </td>
        </tr>
    </tbody>
</table>
`
let coordinatesE = [
    
    [52.1983625,20.9972853],
    [52.1982734,20.9973682],
    [52.1982902,20.9974153],
    [52.1983433,20.9975619],
    [52.1987973,20.9971156],
    [52.1987308,20.9969398],
    [52.1987266,20.9969278],
    [52.1986746,20.9969793],
    [52.1983625,20.9972853]] 
let opisE = `
    <p></p>
<summary style=" border-box;margin: 0px;padding: 1.7rem 2rem 1.7rem 0px;font-style: inherit;font-variant: inherit;font-weight: bold;font-stretch: inherit;font-size: 1.25rem;line-height: 1.1;font-family: inherit;vertical-align: baseline;cursor: pointer;display: block;color: rgb(0, 82, 165);position: relative;">Budynek&nbsp;E</summary>
<p></p>
<table cellspacing="0" style=" border-box;margin: 0px;padding: 0px;font: inherit;vertical-align: baseline;border-collapse: collapse;border-spacing: 0px;border: none;">
    <tbody style=" border-box;margin: 0px;padding: 0px;font: inherit;vertical-align: baseline;">
        <tr>
            <td style=" border-box;margin: 0px;padding: 0.5rem;font: inherit;vertical-align: top;width: 113px;">
                <p style=" border-box;margin: 0px 0px 1em;padding: 0px;font: inherit;vertical-align: baseline;"><span style=" border-box;margin: 0px;padding: 0px;font-style: inherit;font-variant: inherit;font-weight: inherit;font-stretch: inherit;font-size:15px;line-height: inherit;font-family: inherit;vertical-align: baseline;"><strong style=" border-box;margin: 0px;padding: 0px;font-style: inherit;font-variant: inherit;font-weight: bold;font-stretch: inherit;font-size: inherit;line-height: inherit;font-family: inherit;vertical-align: baseline;">-1 piętro</strong></span></p>
            </td>
            <td style=" border-box;margin: 0px;padding: 0.5rem;font: inherit;vertical-align: top;width: 491px;">
                <p style=" border-box;margin: 0px 0px 1em;padding: 0px;font: inherit;vertical-align: baseline;"><span style=" border-box;margin: 0px;padding: 0px;font-style: inherit;font-variant: inherit;font-weight: inherit;font-stretch: inherit;font-size:15px;line-height: inherit;font-family: inherit;vertical-align: baseline;">Apteka Szpitalna</span></p>
            </td>
        </tr>
        <tr>
            <td style=" border-box;margin: 0px;padding: 0.5rem;font: inherit;vertical-align: top;width: 113px;">
                <p style=" border-box;margin: 0px 0px 1em;padding: 0px;font: inherit;vertical-align: baseline;"><span style=" border-box;margin: 0px;padding: 0px;font-style: inherit;font-variant: inherit;font-weight: inherit;font-stretch: inherit;font-size:15px;line-height: inherit;font-family: inherit;vertical-align: baseline;"><strong style=" border-box;margin: 0px;padding: 0px;font-style: inherit;font-variant: inherit;font-weight: bold;font-stretch: inherit;font-size: inherit;line-height: inherit;font-family: inherit;vertical-align: baseline;">Parter&nbsp;</strong></span></p>
            </td>
            <td style=" border-box;margin: 0px;padding: 0.5rem;font: inherit;vertical-align: top;width: 491px;">
                <p style=" border-box;margin: 0px 0px 1em;padding: 0px;font: inherit;vertical-align: baseline;"><span style=" border-box;margin: 0px;padding: 0px;font-style: inherit;font-variant: inherit;font-weight: inherit;font-stretch: inherit;font-size:15px;line-height: inherit;font-family: inherit;vertical-align: baseline;">Zakład Diagnostyki Laboratoryjnej</span></p>
            </td>
        </tr>
        <tr>
            <td style=" border-box;margin: 0px;padding: 0.5rem;font: inherit;vertical-align: top;width: 113px;">
                <p style=" border-box;margin: 0px 0px 1em;padding: 0px;font: inherit;vertical-align: baseline;"><span style=" border-box;margin: 0px;padding: 0px;font-style: inherit;font-variant: inherit;font-weight: inherit;font-stretch: inherit;font-size:15px;line-height: inherit;font-family: inherit;vertical-align: baseline;"><strong style=" border-box;margin: 0px;padding: 0px;font-style: inherit;font-variant: inherit;font-weight: bold;font-stretch: inherit;font-size: inherit;line-height: inherit;font-family: inherit;vertical-align: baseline;">I piętro&nbsp;</strong></span></p>
            </td>
            <td style=" border-box;margin: 0px;padding: 0.5rem;font: inherit;vertical-align: top;width: 491px;">
                <p style=" border-box;margin: 0px 0px 1em;padding: 0px;font: inherit;vertical-align: baseline;"><span style=" border-box;margin: 0px;padding: 0px;font-style: inherit;font-variant: inherit;font-weight: inherit;font-stretch: inherit;font-size:15px;line-height: inherit;font-family: inherit;vertical-align: baseline;">Poradnie specjalistyczne</span></p>
            </td>
        </tr>
        <tr>
            <td style=" border-box;margin: 0px;padding: 0.5rem;font: inherit;vertical-align: top;width: 113px;">
                <p style=" border-box;margin: 0px 0px 1em;padding: 0px;font: inherit;vertical-align: baseline;"><span style=" border-box;margin: 0px;padding: 0px;font-style: inherit;font-variant: inherit;font-weight: inherit;font-stretch: inherit;font-size:15px;line-height: inherit;font-family: inherit;vertical-align: baseline;"><strong style=" border-box;margin: 0px;padding: 0px;font-style: inherit;font-variant: inherit;font-weight: bold;font-stretch: inherit;font-size: inherit;line-height: inherit;font-family: inherit;vertical-align: baseline;">II piętro&nbsp;</strong></span></p>
            </td>
            <td style=" border-box;margin: 0px;padding: 0.5rem;font: inherit;vertical-align: top;width: 491px;">
                <p style=" border-box;margin: 0px 0px 1em;padding: 0px;font: inherit;vertical-align: baseline;">Klinika Neurologii</p>
            </td>
        </tr>
        <tr>
            <td style=" border-box;margin: 0px;padding: 0.5rem;font: inherit;vertical-align: top;width: 113px;">
                <p style=" border-box;margin: 0px 0px 1em;padding: 0px;font: inherit;vertical-align: baseline;"><span style=" border-box;margin: 0px;padding: 0px;font-style: inherit;font-variant: inherit;font-weight: inherit;font-stretch: inherit;font-size:15px;line-height: inherit;font-family: inherit;vertical-align: baseline;"><strong style=" border-box;margin: 0px;padding: 0px;font-style: inherit;font-variant: inherit;font-weight: bold;font-stretch: inherit;font-size: inherit;line-height: inherit;font-family: inherit;vertical-align: baseline;">III piętro</strong></span></p>
            </td>
            <td style=" border-box;margin: 0px;padding: 0.5rem;font: inherit;vertical-align: top;width: 491px;">
                <p style=" border-box;margin: 0px 0px 1em;padding: 0px;font: inherit;vertical-align: baseline;"><span style=" border-box;margin: 0px;padding: 0px;font-style: inherit;font-variant: inherit;font-weight: inherit;font-stretch: inherit;font-size:15px;line-height: inherit;font-family: inherit;vertical-align: baseline;">Klinika Chor&oacute;b Wewnętrznych i Gastroenterologii</span></p>
            </td>
        </tr>
        <tr>
            <td style=" border-box;margin: 0px;padding: 0.5rem;font: inherit;vertical-align: top;width: 113px;">
                <p style=" border-box;margin: 0px 0px 1em;padding: 0px;font: inherit;vertical-align: baseline;"><span style=" border-box;margin: 0px;padding: 0px;font-style: inherit;font-variant: inherit;font-weight: inherit;font-stretch: inherit;font-size:15px;line-height: inherit;font-family: inherit;vertical-align: baseline;"><strong style=" border-box;margin: 0px;padding: 0px;font-style: inherit;font-variant: inherit;font-weight: bold;font-stretch: inherit;font-size: inherit;line-height: inherit;font-family: inherit;vertical-align: baseline;">IV piętro</strong></span></p>
            </td>
            <td style=" border-box;margin: 0px;padding: 0.5rem;font: inherit;vertical-align: top;width: 491px;">
                <p style=" border-box;margin: 0px 0px 1em;padding: 0px;font: inherit;vertical-align: baseline;"><span style=" border-box;margin: 0px;padding: 0px;font-style: inherit;font-variant: inherit;font-weight: inherit;font-stretch: inherit;font-size:15px;line-height: inherit;font-family: inherit;vertical-align: baseline;">Klinika Ortopedii, Traumatologii i Medycyny Sportowej</span></p>
            </td>
        </tr>
        <tr>
            <td style=" border-box;margin: 0px;padding: 0.5rem;font: inherit;vertical-align: top;width: 113px;">
                <p style=" border-box;margin: 0px 0px 1em;padding: 0px;font: inherit;vertical-align: baseline;"><span style=" border-box;margin: 0px;padding: 0px;font-style: inherit;font-variant: inherit;font-weight: inherit;font-stretch: inherit;font-size:15px;line-height: inherit;font-family: inherit;vertical-align: baseline;"><strong style=" border-box;margin: 0px;padding: 0px;font-style: inherit;font-variant: inherit;font-weight: bold;font-stretch: inherit;font-size: inherit;line-height: inherit;font-family: inherit;vertical-align: baseline;">V piętro</strong></span></p>
            </td>
            <td style=" border-box;margin: 0px;padding: 0.5rem;font: inherit;vertical-align: top;width: 491px;">
                <p style=" border-box;margin: 0px 0px 1em;padding: 0px;font: inherit;vertical-align: baseline;"><span style=" border-box;margin: 0px;padding: 0px;font-style: inherit;font-variant: inherit;font-weight: inherit;font-stretch: inherit;font-size:15px;line-height: inherit;font-family: inherit;vertical-align: baseline;">Klinika Chor&oacute;b Wewnętrznych, Endokrynologii i Diabetologii</span></p>
            </td>
        </tr>
        <tr>
            <td style=" border-box;margin: 0px;padding: 0.5rem;font: inherit;vertical-align: top;width: 113px;">
                <p style=" border-box;margin: 0px 0px 1em;padding: 0px;font: inherit;vertical-align: baseline;"><span style=" border-box;margin: 0px;padding: 0px;font-style: inherit;font-variant: inherit;font-weight: inherit;font-stretch: inherit;font-size:15px;line-height: inherit;font-family: inherit;vertical-align: baseline;"><strong style=" border-box;margin: 0px;padding: 0px;font-style: inherit;font-variant: inherit;font-weight: bold;font-stretch: inherit;font-size: inherit;line-height: inherit;font-family: inherit;vertical-align: baseline;">VI piętro</strong></span></p>
            </td>
            <td style=" border-box;margin: 0px;padding: 0.5rem;font: inherit;vertical-align: top;width: 491px;">
                <p style=" border-box;margin: 0px 0px 1em;padding: 0px;font: inherit;vertical-align: baseline;"><span style=" border-box;margin: 0px;padding: 0px;font-style: inherit;font-variant: inherit;font-weight: inherit;font-stretch: inherit;font-size:15px;line-height: inherit;font-family: inherit;vertical-align: baseline;">Klinika Dermatologii</span></p>
            </td>
        </tr>
    </tbody>
</table>
`
let coordinatesF = [
    
    [52.1978781,20.9975061],
    [52.1978138,20.9974796],
    [52.1978809,20.9970355],
    [52.1978365,20.9970178],
    [52.1978636,20.9968381],
    [52.1980717,20.9969215],
    [52.1980783,20.9968785],
    [52.1981463,20.9969055],
    [52.1981398,20.996948],
    [52.1982234,20.9969814],
    [52.1982443,20.99696],
    [52.1983625,20.9972853],
    [52.1982734,20.9973682],
    [52.1982902,20.9974153],
    [52.1982413,20.9974547],
    [52.1981934,20.9973258],
    [52.1981498,20.9972082],
    [52.1979553,20.9971284],
    [52.1979248,20.9973242],
    [52.1979091,20.9973173],
    [52.1978781,20.9975061]] 
let opisF = `
    <p></p>
    <summary style="box-sizing: border-box; margin: 0px; padding: 1.7rem 2rem 1.7rem 0px; font-style: inherit; font-variant: inherit; font-weight: bold; font-stretch: inherit; font-size: 1.25rem; line-height: 1.1; font-family: inherit; vertical-align: baseline; cursor: pointer; display: block; color: rgb(0, 82, 165); position: relative;">Budynek&nbsp;F</summary>
    <p></p>
    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;">&nbsp;</p>
    <table cellspacing="0" class="Table" style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; border-collapse: collapse; border-spacing: 0px;">
        <tbody style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline;">
            <tr style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline;">
                <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: baseline; width: 123px;">
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><strong style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: bold; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Piętro -1</span></span></strong></span></p>
                </td>
                <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: baseline; width: 482px;">
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Centralna Sterylizacja</span></span></span></p>
                </td>
            </tr>
            <tr style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline;">
                <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: baseline; width: 123px;">
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><strong style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: bold; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Parter</span></span></strong></span></p>
                </td>
                <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: baseline; width: 482px;">
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Zakład Usprawniania Leczniczego</span></span></span></p>
                </td>
            </tr>
        </tbody>
    </table>
`
let coordinatesG = [
    
    [52.1987728,20.9969004],
    [52.1987308,20.9969398],
    [52.1987266,20.9969278],
    [52.1986746,20.9969793],
    [52.1986698,20.9969556],
    [52.1986427,20.9969704],
    [52.1986412,20.9969633],
    [52.1986446,20.9969614],
    [52.1985988,20.9967093],
    [52.1985958,20.9967106],
    [52.1985715,20.9965774],
    [52.1987026,20.9965143],
    [52.1987728,20.9969004]]
let opisG = `
    <p></p>
    <summary style="box-sizing: border-box; margin: 0px; padding: 1.7rem 2rem 1.7rem 0px; font-style: inherit; font-variant: inherit; font-weight: bold; font-stretch: inherit; font-size: 1.25rem; line-height: 1.1; font-family: inherit; vertical-align: baseline; cursor: pointer; display: block; color: rgb(0, 82, 165); position: relative;">Budynek&nbsp;G</summary>
    <p></p>
    <table cellspacing="0" class="Table" style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; border-collapse: collapse; border-spacing: 0px;">
        <tbody style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline;">
            <tr style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline;">
                <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: baseline; width: 123px;">
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><strong style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: bold; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Parter</span></span></strong></span></p>
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;">&nbsp;</span></p>
                </td>
                <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: baseline; width: 482px;">
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Centrum Krwiodawstwa i Krwiolecznictwa</span></span></span></p>
                </td>
            </tr>
        </tbody>
    </table>
`
let coordinatesI = [
    
    [52.1981105,20.9954637],
    [52.1980192,20.9961595],
    [52.1978895,20.9961142],
    [52.1979127,20.9959372],
    [52.1979809,20.9954184],
    [52.1981105,20.9954637]]
let opisI = `
    <p></p>
    <summary style="box-sizing: border-box; margin: 0px; padding: 1.7rem 2rem 1.7rem 0px; font-style: inherit; font-variant: inherit; font-weight: bold; font-stretch: inherit; font-size: 1.25rem; line-height: 1.1; font-family: inherit; vertical-align: baseline; cursor: pointer; display: block; color: rgb(0, 82, 165); position: relative;">Budynek&nbsp;I</summary>
    <p></p>
    <table cellspacing="0" class="Table" style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; border-collapse: collapse; border-spacing: 0px;">
        <tbody style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline;">
            <tr style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline;">
                <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: bottom; width: 123px;">
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><strong style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: bold; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Parter</span></strong></span></p>
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;">&nbsp;</span></p>
                </td>
                <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: bottom; width: 482px;">
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Poradnia Medycyny Nuklearnej</span></span></p>
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Pracownia Medycyny Nuklearnej</span></span></p>
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Poradnia Schorzeń Tarczycy</span></span></p>
                </td>
            </tr>
            <tr style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline;">
                <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: bottom; width: 123px;">
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><strong style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: bold; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">I piętro</span></strong></span></p>
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;">&nbsp;</span></p>
                </td>
                <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: bottom; width: 482px;">
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Oddział Terapii Izotopowej</span></span></p>
                </td>
            </tr>
        </tbody>
    </table>
`
let coordinatesK = [
    
    [52.1986522,20.9942442],
    [52.1983157,20.9940721],
    [52.1981984,20.9940121],
    [52.1981194,20.9939717],
    [52.1980666,20.9942462],
    [52.1981333,20.9942803],
    [52.1981297,20.9942989],
    [52.1982025,20.9943361],
    [52.1982097,20.9942988],
    [52.198215,20.9942709],
    [52.1985233,20.9944286],
    [52.1986109,20.9944734],
    [52.1986166,20.9944436],
    [52.1986446,20.9944579],
    [52.1986691,20.9943303],
    [52.1986386,20.9943147],
    [52.1986522,20.9942442]]
let opisK = `
    <p></p>
    <summary style="box-sizing: border-box; margin: 0px; padding: 1.7rem 2rem 1.7rem 0px; font-style: inherit; font-variant: inherit; font-weight: bold; font-stretch: inherit; font-size: 1.25rem; line-height: 1.1; font-family: inherit; vertical-align: baseline; cursor: pointer; display: block; color: rgb(0, 82, 165); position: relative;">Budynek&nbsp;K</summary>
    <p></p>
    <table cellspacing="0" class="Table" style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; border-collapse: collapse; border-spacing: 0px;">
        <tbody style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline;">
            <tr style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline;">
                <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: bottom; width: 123px;">
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><strong style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: bold; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Parter</span></strong></span></p>
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;">&nbsp;</span></p>
                </td>
                <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: bottom; width: 482px;">
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Oddział Chirurgii Plastycznej , Rekonstrukcyjnej i Szczękowej</span></span></p>
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Poradnia Reumatologiczna, Przykliniczna Poradnia Urologiczna</span></span></p>
                </td>
            </tr>
            <tr style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline;">
                <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: bottom; width: 123px;">
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><strong style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: bold; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">I piętro</span></strong></span></p>
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;">&nbsp;</span></p>
                </td>
                <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: bottom; width: 482px;">
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Oddział Reumatologii, Chor&oacute;b Tkanki Łącznej i Chor&oacute;b Rzadkich</span></span></p>
                </td>
            </tr>
            <tr style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline;">
                <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: bottom; width: 123px;">
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><strong style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: bold; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">II piętro</span></strong></span></p>
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;">&nbsp;</span></p>
                </td>
                <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: bottom; width: 482px;">
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Klinika Urologii i Urologii Onkologicznej</span></span></p>
                </td>
            </tr>
        </tbody>
    </table>
`
let coordinatesL2 = [
    
    [52.1987308,20.9969398],
    [52.1987728,20.9969004],
    [52.1988185,20.9970249],
    [52.1988571,20.9969877],
    [52.198904,20.997108],
    [52.1988878,20.9971247],
    [52.1989918,20.997405],
    [52.1990299,20.9976176],
    [52.1989586,20.9976523],
    [52.1989256,20.9974567],
    [52.198892,20.997364],
    [52.1988774,20.997378],
    [52.1988426,20.9972819],
    [52.1988545,20.9972704],
    [52.1987973,20.9971156],
    [52.1987308,20.9969398]] 
let opisL2 = `
    <p></p>
    <summary style="box-sizing: border-box; margin: 0px; padding: 1.7rem 2rem 1.7rem 0px; font-style: inherit; font-variant: inherit; font-weight: bold; font-stretch: inherit; font-size: 1.25rem; line-height: 1.1; font-family: inherit; vertical-align: baseline; cursor: pointer; display: block; color: rgb(0, 82, 165); position: relative;">Budynek&nbsp;Ł2</summary>
    <p></p>
    <table cellspacing="0" class="Table" style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; border-collapse: collapse; border-spacing: 0px;">
        <tbody style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline;">
            <tr style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline;">
                <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: baseline; width: 123px;">
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><strong style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: bold; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Parter</span></span></strong></span></p>
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;">&nbsp;</span></p>
                </td>
                <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: baseline; width: 481px;">
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">kartoteka</span></span></span></p>
                </td>
            </tr>
            <tr style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline;">
                <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: baseline; width: 123px;">
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><strong style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: bold; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">I piętro</span></span></strong></span></p>
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;">&nbsp;</span></p>
                </td>
                <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: baseline; width: 481px;">
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Call Center</span></span></span></p>
                </td>
            </tr>
            <tr style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline;">
                <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: baseline; width: 123px;">
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><strong style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: bold; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">II piętro</span></span></strong></span></p>
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;">&nbsp;</span></p>
                </td>
                <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: baseline; width: 481px;">
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Poradnia bezdechu sennego</span></span></span></p>
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Poradnia kardiochirurgiczna</span></span></span></p>
                </td>
            </tr>
        </tbody>
    </table>
`
let coordinatesL = [
    
    [52.1982413,20.9974547],
    [52.198212,20.9976679],
    [52.1982199,20.9976711],
    [52.1982344,20.9976771],
    [52.1982687,20.9978708],
    [52.198389,20.9978143],
    [52.1983433,20.9975619],
    [52.1982902,20.9974153],
    [52.1982413,20.9974547]]
let opisL = `
    <p><span style='color: rgb(0, 82, 165); font-family: "Open Sans", sans-serif; font-size: 20px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 700; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;'>Budynek L</span></p>
`
let coordinatesO = [
    
    [52.1996109,20.9959491],
    [52.1997189,20.9958997],
    [52.199821,20.9964832],
    [52.1997118,20.996533],
    [52.1996893,20.9964028],
    [52.1996615,20.9964154],
    [52.1996523,20.9963636],
    [52.1996803,20.9963504],
    [52.1996109,20.9959491]]
let opisO = `
    <p></p>
    <summary style="box-sizing: border-box; margin: 0px; padding: 1.7rem 2rem 1.7rem 0px; font-style: inherit; font-variant: inherit; font-weight: bold; font-stretch: inherit; font-size: 1.25rem; line-height: 1.1; font-family: inherit; vertical-align: baseline; cursor: pointer; display: block; color: rgb(0, 82, 165); position: relative;">Budynek&nbsp;O</summary>
    <p></p>
    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;">Mazowieckie Centrum Terapii Hiperbarycznej i Leczenia Ran</p>
`
let coordinatesN = [
    
    [52.1982163,20.9949538],
    [52.1982802,20.9946254],
    [52.1983106,20.9944692],
    [52.1983675,20.9944986],
    [52.1984134,20.9945221],
    [52.1984717,20.9945521],
    [52.1985746,20.9946053],
    [52.1985563,20.9946986],
    [52.1985422,20.9947712],
    [52.1985268,20.9947632],
    [52.1984973,20.9949145],
    [52.1985128,20.9949224],
    [52.1985,20.9949878],
    [52.1984661,20.9951623],
    [52.1984536,20.9951559],
    [52.1983319,20.995093],
    [52.1983359,20.9950721],
    [52.1983357,20.995072],
    [52.1983362,20.9950692],
    [52.1983444,20.9950274],
    [52.1983176,20.9950136],
    [52.1983135,20.9950114],
    [52.1983149,20.9950046],
    [52.1982976,20.9949956],
    [52.1982722,20.9949825],
    [52.1982707,20.9949818],
    [52.1982163,20.9949538]]
let opisN = `
    <p></p>
    <summary style=" border-box;margin: 0px;padding: 1.7rem 2rem 1.7rem 0px;font-style: inherit;font-variant: inherit;font-weight: bold;font-stretch: inherit;font-size: 1.25rem;line-height: 1.1;font-family: inherit;vertical-align: baseline;cursor: pointer;display: block;color: rgb(0, 82, 165);position: relative;">Budynek&nbsp;N</summary>
    <p></p>
    <table cellspacing="0" style=" border-box;margin: 0px;padding: 0px;font: inherit;vertical-align: baseline;border-collapse: collapse;border-spacing: 0px;border: none;">
        <tbody style=" border-box;margin: 0px;padding: 0px;font: inherit;vertical-align: baseline;">
            <tr>
                <td style=" border-box;margin: 0px;padding: 0.5rem;font: inherit;vertical-align: baseline;width: 123px;">
                    <p style=" border-box;margin: 0px 0px 1em;padding: 0px;font: inherit;vertical-align: baseline;"><span style=" border-box;margin: 0px;padding: 0px;font-style: inherit;font-variant: inherit;font-weight: inherit;font-stretch: inherit;font-size:15px;line-height: inherit;font-family: inherit;vertical-align: baseline;"><strong style=" border-box;margin: 0px;padding: 0px;font-style: inherit;font-variant: inherit;font-weight: bold;font-stretch: inherit;font-size: inherit;line-height: inherit;font-family: inherit;vertical-align: baseline;">Parter</strong></span></p>
                    <p style=" border-box;margin: 0px 0px 1em;padding: 0px;font: inherit;vertical-align: baseline;">&nbsp;</p>
                </td>
                <td style=" border-box;margin: 0px;padding: 0.5rem;font: inherit;vertical-align: baseline;width: 482px;">
                    <p style=" border-box;margin: 0px 0px 1em;padding: 0px;font: inherit;vertical-align: baseline;"><span style=" border-box;margin: 0px;padding: 0px;font-style: inherit;font-variant: inherit;font-weight: inherit;font-stretch: inherit;font-size:15px;line-height: inherit;font-family: inherit;vertical-align: baseline;">Centrum Radioterapii</span></p>
                </td>
            </tr>
            <tr>
                <td style=" border-box;margin: 0px;padding: 0.5rem;font: inherit;vertical-align: baseline;width: 123px;">
                    <p style=" border-box;margin: 0px 0px 1em;padding: 0px;font: inherit;vertical-align: baseline;"><span style=" border-box;margin: 0px;padding: 0px;font-style: inherit;font-variant: inherit;font-weight: inherit;font-stretch: inherit;font-size:15px;line-height: inherit;font-family: inherit;vertical-align: baseline;"><strong style=" border-box;margin: 0px;padding: 0px;font-style: inherit;font-variant: inherit;font-weight: bold;font-stretch: inherit;font-size: inherit;line-height: inherit;font-family: inherit;vertical-align: baseline;">I piętro</strong></span></p>
                    <p style=" border-box;margin: 0px 0px 1em;padding: 0px;font: inherit;vertical-align: baseline;">&nbsp;</p>
                </td>
                <td style=" border-box;margin: 0px;padding: 0.5rem;font: inherit;vertical-align: baseline;width: 482px;">
                    <p style=" border-box;margin: 0px 0px 1em;padding: 0px;font: inherit;vertical-align: baseline;"><span style=" border-box;margin: 0px;padding: 0px;font-style: inherit;font-variant: inherit;font-weight: inherit;font-stretch: inherit;font-size:15px;line-height: inherit;font-family: inherit;vertical-align: baseline;">Klinika Onkologii i Hematologii</span></p>
                </td>
            </tr>
            <tr>
                <td style=" border-box;margin: 0px;padding: 0.5rem;font: inherit;vertical-align: baseline;width: 123px;">
                    <p style=" border-box;margin: 0px 0px 1em;padding: 0px;font: inherit;vertical-align: baseline;"><span style=" border-box;margin: 0px;padding: 0px;font-style: inherit;font-variant: inherit;font-weight: inherit;font-stretch: inherit;font-size:15px;line-height: inherit;font-family: inherit;vertical-align: baseline;"><strong style=" border-box;margin: 0px;padding: 0px;font-style: inherit;font-variant: inherit;font-weight: bold;font-stretch: inherit;font-size: inherit;line-height: inherit;font-family: inherit;vertical-align: baseline;">II piętro</strong></span></p>
                    <p style=" border-box;margin: 0px 0px 1em;padding: 0px;font: inherit;vertical-align: baseline;">&nbsp;</p>
                </td>
                <td style=" border-box;margin: 0px;padding: 0.5rem;font: inherit;vertical-align: baseline;width: 482px;">
                    <p style=" border-box;margin: 0px 0px 1em;padding: 0px;font: inherit;vertical-align: baseline;"><span style=" border-box;margin: 0px;padding: 0px;font-style: inherit;font-variant: inherit;font-weight: inherit;font-stretch: inherit;font-size:15px;line-height: inherit;font-family: inherit;vertical-align: baseline;">Oddział Radioterapii i Onkologii</span></p>
                </td>
            </tr>
        </tbody>
    </table>
`
let coordinatesPG = [
    
    [52.199135,20.9980663],
    [52.1991811,20.9983219],
    [52.1991823,20.9983288],
    [52.1992102,20.9984852],
    [52.1991856,20.9984964],
    [52.1991898,20.9985211],
    [52.1991595,20.9985357],
    [52.1991552,20.9985112],
    [52.1991383,20.9985192],
    [52.1991342,20.998496],
    [52.1990942,20.9985149],
    [52.1991083,20.9985921],
    [52.1990747,20.998608],
    [52.1990672,20.9985665],
    [52.1990104,20.9985935],
    [52.1990031,20.9985524],
    [52.1990106,20.9985489],
    [52.1990059,20.998522],
    [52.1989982,20.9985259],
    [52.1989895,20.998478],
    [52.1989803,20.9984824],
    [52.1989759,20.9984578],
    [52.198971,20.9984302],
    [52.1989803,20.9984256],
    [52.1989715,20.9983766],
    [52.1989535,20.998276],
    [52.1989433,20.9982189],
    [52.1989697,20.9982066],
    [52.1989316,20.9979922],
    [52.1989053,20.9980048],
    [52.1988861,20.9978972],
    [52.1988513,20.9977027],
    [52.1988634,20.9976969],
    [52.1988612,20.9976851],
    [52.1989169,20.9976588],
    [52.1989193,20.9976713],
    [52.1989586,20.9976523],
    [52.1990299,20.9976176],
    [52.1990531,20.9976064],
    [52.1990732,20.9977191],
    [52.1990816,20.9977657],
    [52.199089,20.9978072],
    [52.1991172,20.9979643],
    [52.1991263,20.9980133],
    [52.199135,20.9980663]]
let opisPG = `
    <summary style="box-sizing: border-box; margin: 0px; padding: 1.7rem 2rem 1.7rem 0px; font-style: inherit; font-variant: inherit; font-weight: bold; font-stretch: inherit; font-size: 1.25rem; line-height: 1.1; font-family: inherit; vertical-align: baseline; cursor: pointer; display: block; color: rgb(0, 82, 165); position: relative;">Budynek&nbsp;PG&nbsp;(Pawilon&nbsp;Gł&oacute;wny)</summary>
    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;">&nbsp;</p>
    <table cellspacing="0" class="Table" style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; border-collapse: collapse; border-spacing: 0px;">
        <tbody style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline;">
            <tr style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline;">
                <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: baseline; width: 123px;">
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><strong style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: bold; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Parter</span></strong></span></p>
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;">&nbsp;</span></p>
                </td>
                <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: baseline; width: 482px;">
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Stacja dializ</span></span></p>
                </td>
            </tr>
            <tr style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline;">
                <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: baseline; width: 123px;">
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><strong style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: bold; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">I piętro</span></strong></span></p>
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;">&nbsp;</span></p>
                </td>
                <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: baseline; width: 482px;">
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Centrum Kardiologii Klinicznej</span></span></p>
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Poradnie specjalistyczne<br style="box-sizing: border-box;">Pracownie diagnostyczne- USG, testy wysiłkowe, ENG</span></span></p>
                </td>
            </tr>
            <tr style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline;">
                <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: baseline; width: 123px;">
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><strong style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: bold; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">III piętro</span></strong></span></p>
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;">&nbsp;</span></p>
                </td>
                <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: baseline; width: 482px;">
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Blok operacyjny</span></span></p>
                </td>
            </tr>
            <tr style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline;">
                <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: baseline; width: 123px;">
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><strong style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: bold; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">IV piętro</span></strong></span></p>
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;">&nbsp;</span></p>
                </td>
                <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: baseline; width: 482px;">
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Klinika Chirurgii Gastroenterologicznej i Transplantologii</span></span></p>
                </td>
            </tr>
            <tr style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline;">
                <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: baseline; width: 123px;">
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><strong style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: bold; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">V piętro</span></strong></span></p>
                </td>
                <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: baseline; width: 482px;">
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Klinika Anestezjologii i Intensywnej Terapii OIT 3</span></span></p>
                </td>
            </tr>
            <tr style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline;">
                <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: baseline; width: 123px;">
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><strong style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: bold; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">VI piętro</span></strong></span></p>
                </td>
                <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: baseline; width: 482px;">
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Klinika Kardiologii i Nadciśnienia Tętniczego</span></span></p>
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Klinika Chor&oacute;b Wewnętrznych, Nefrologii i Transplantologii</span></span></p>
                </td>
            </tr>
            <tr style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline;">
                <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: baseline; width: 123px;">
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><strong style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: bold; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">VII piętro</span></strong></span></p>
                </td>
                <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: baseline; width: 482px;">
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Oddział Chor&oacute;b Wewnętrznych i Hepatologii</span></span></p>
                </td>
            </tr>
            <tr style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline;">
                <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: baseline; width: 123px;">
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><strong style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: bold; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">VIII piętro</span></strong></span></p>
                </td>
                <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: baseline; width: 482px;">
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Klinika Otolaryngologii</span></span></p>
                </td>
            </tr>
            <tr style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline;">
                <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: baseline; width: 123px;">
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><strong style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: bold; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">IX piętro</span></strong></span></p>
                </td>
                <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: baseline; width: 482px;">
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Pracownia Elektrofizjologii Klinicznej</span></span></p>
                </td>
            </tr>
        </tbody>
    </table>
`
let coordinatesR = [
    
    [52.1990994,20.996413],
    [52.1990512,20.9964356],
    [52.1989757,20.9964709],
    [52.199026,20.9967563],
    [52.1991276,20.9967087],
    [52.1991496,20.9966984],
    [52.1990994,20.996413]]
let opisR = `
    <p></p>
    <summary style="box-sizing: border-box; margin: 0px; padding: 1.7rem 2rem 1.7rem 0px; font-style: inherit; font-variant: inherit; font-weight: bold; font-stretch: inherit; font-size: 1.25rem; line-height: 1.1; font-family: inherit; vertical-align: baseline; cursor: pointer; display: block; color: rgb(0, 82, 165); position: relative;">Budynek&nbsp;R</summary>
    <p></p>
    <table cellspacing="0" class="Table" style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; border-collapse: collapse; border-spacing: 0px;">
        <tbody style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline;">
            <tr style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline;">
                <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: bottom; width: 123px;">
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><strong style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: bold; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Parter</span></strong></span></p>
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;">&nbsp;</span></p>
                </td>
                <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: bottom; width: 482px;">
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Dział Eksploatacji</span></span></p>
                </td>
            </tr>
            <tr style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline;">
                <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: bottom; width: 123px;">
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><strong style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: bold; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">I piętro</span></strong></span></p>
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;">&nbsp;</span></p>
                </td>
                <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: bottom; width: 482px;">
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Dział Inwestycji</span></span></p>
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Dział Telekomunikacji</span></span></p>
                </td>
            </tr>
        </tbody>
    </table>
`
let coordinatesS = [
    
    [52.2006964,20.9963948],
    [52.2007311,20.9965875],
    [52.2006854,20.9966093],
    [52.2006892,20.9966306],
    [52.2006577,20.9966456],
    [52.2006538,20.9966242],
    [52.2001953,20.9968368],
    [52.200199,20.9968572],
    [52.2001675,20.9968719],
    [52.2001639,20.9968512],
    [52.2001184,20.9968723],
    [52.2000842,20.9966777],
    [52.2002528,20.9965996],
    [52.2002437,20.9965481],
    [52.2002268,20.9965558],
    [52.2002071,20.9964436],
    [52.2002486,20.9964243],
    [52.2002449,20.9964035],
    [52.2002581,20.9963974],
    [52.2002618,20.9964182],
    [52.2002672,20.9964158],
    [52.2002961,20.9965796],
    [52.2006964,20.9963948]]
let opisS = `
    <p></p>
    <summary style="box-sizing: border-box; margin: 0px; padding: 1.7rem 2rem 1.7rem 0px; font-style: inherit; font-variant: inherit; font-weight: bold; font-stretch: inherit; font-size: 1.25rem; line-height: 1.1; font-family: inherit; vertical-align: baseline; cursor: pointer; display: block; color: rgb(0, 82, 165); position: relative;">Budynek&nbsp;S</summary>
    <p></p>
    <table cellspacing="0" class="Table" style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; border-collapse: collapse; border-spacing: 0px;">
        <tbody style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline;">
            <tr style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline;">
                <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: bottom; width: 123px;">
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><strong style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: bold; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Parter</span></strong></span></p>
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;">&nbsp;</span></p>
                </td>
                <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: bottom; width: 482px;">
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Przychodnia Specjalistyczno-Konsultacyjna</span></span></p>
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Sekcja Digitalizacji Dokument&oacute;w</span></span></p>
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Magazyny Archiwum</span></span></p>
                </td>
            </tr>
            <tr style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline;">
                <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: bottom; width: 123px;">
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><strong style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: bold; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">II piętro</span></strong></span></p>
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;">&nbsp;</span></p>
                </td>
                <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: bottom; width: 482px;">
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Poradnia Endokrynologiczna</span></span></p>
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Poradnia &nbsp;Metaboliczna</span></span></p>
                </td>
            </tr>
            <tr style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline;">
                <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: bottom; width: 123px;">
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><strong style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: bold; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">III piętro</span></strong></span></p>
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;">&nbsp;</span></p>
                </td>
                <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: bottom; width: 482px;">
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Archiwum</span></span></p>
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Pracownia Bakteriologii i Wirusologii</span></span></p>
                </td>
            </tr>
            <tr style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline;">
                <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: bottom; width: 123px;">
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><strong style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: bold; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">IV piętro</span></strong></span></p>
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;">&nbsp;</span></p>
                </td>
                <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: bottom; width: 482px;">
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Poradnie Służby Medycyny Pracy</span></span></p>
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Przychodnia Zdrowia Psychicznego</span></span></p>
                </td>
            </tr>
        </tbody>
    </table>
`
let coordinatesU = [
    
    [52.1991748,20.9978893],
    [52.1992341,20.9978627],
    [52.1992243,20.997804],
    [52.1992161,20.9977556],
    [52.1991928,20.9977662],
    [52.1991916,20.9977591],
    [52.199223,20.9977448],
    [52.1992643,20.9977262],
    [52.1992747,20.9977214],
    [52.1993161,20.9977029],
    [52.1993266,20.9976981],
    [52.1993539,20.9976859],
    [52.1993682,20.9976793],
    [52.1993788,20.9976745],
    [52.19942,20.9976557],
    [52.1994309,20.9976508],
    [52.1994319,20.9976582],
    [52.1994269,20.9976607],
    [52.1994504,20.9977957],
    [52.1994776,20.9977836],
    [52.199487,20.9978414],
    [52.1994762,20.9978455],
    [52.1994938,20.997954],
    [52.1995063,20.9979486],
    [52.1995077,20.9979573],
    [52.1992131,20.9980881],
    [52.1992048,20.9980356],
    [52.1991961,20.9979826],
    [52.1991808,20.9978953],
    [52.1991763,20.9978976],
    [52.1991748,20.9978893]]
let opisU = `
    <p></p>
    <summary style="box-sizing: border-box; margin: 0px; padding: 1.7rem 2rem 1.7rem 0px; font-style: inherit; font-variant: inherit; font-weight: bold; font-stretch: inherit; font-size: 1.25rem; line-height: 1.1; font-family: inherit; vertical-align: baseline; cursor: pointer; display: block; color: rgb(0, 82, 165); position: relative;">Budynek&nbsp;U</summary>
    <p></p>
    <table cellspacing="0" class="Table" style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; border-collapse: collapse; border-spacing: 0px;">
        <tbody style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline;">
            <tr style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline;">
                <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: bottom; width: 123px;">
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><strong style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: bold; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Parter</span></strong></span></p>
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;">&nbsp;</span></p>
                </td>
                <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: bottom; width: 482px;">
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Izba przyjęć Kliniki Chor&oacute;b Dziecięcych i Noworodkowych</span></span></p>
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; background-color: white;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: black;">Przychodnia dla Dzieci i Młodzieży</span></span></span></p>
                </td>
            </tr>
            <tr style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline;">
                <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: bottom; width: 123px;">
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><strong style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: bold; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">I piętro</span></strong></span></p>
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;">&nbsp;</span></p>
                </td>
                <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: bottom; width: 482px;">
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Klinika Chor&oacute;b Dziecięcych i Noworodkowych</span></span></p>
                </td>
            </tr>
        </tbody>
    </table>
`
let coordinatesH = [
    
    [52.2006036,20.9959783],
    [52.200637,20.9961607],
    [52.2006346,20.9961617],
    [52.2006341,20.9961589],
    [52.2004809,20.9962336],
    [52.2004478,20.9960541],
    [52.2006017,20.995979],
    [52.2006007,20.9959737],
    [52.2006025,20.9959728],
    [52.2006036,20.9959783]]
let opisH = `
    <p></p>
    <summary style=" border-box;margin: 0px;padding: 1.7rem 2rem 1.7rem 0px;font-style: inherit;font-variant: inherit;font-weight: bold;font-stretch: inherit;font-size: 1.25rem;line-height: 1.1;font-family: inherit;vertical-align: baseline;cursor: pointer;display: block;color: rgb(0, 82, 165);position: relative;">Budynek&nbsp;H</summary>
    <p></p>
    <table cellspacing="0" style=" border-box;margin: 0px;padding: 0px;font: inherit;vertical-align: baseline;border-collapse: collapse;border-spacing: 0px;border: none;">
        <tbody style=" border-box;margin: 0px;padding: 0px;font: inherit;vertical-align: baseline;">
            <tr>
                <td style=" border-box;margin: 0px;padding: 0.5rem;font: inherit;vertical-align: top;width: 85px;">
                    <p style=" border-box;margin: 0px 0px 1em;padding: 0px;font: inherit;vertical-align: baseline;"><span style=" border-box;margin: 0px;padding: 0px;font-style: inherit;font-variant: inherit;font-weight: inherit;font-stretch: inherit;font-size:15px;line-height: inherit;font-family: inherit;vertical-align: baseline;"><strong style=" border-box;margin: 0px;padding: 0px;font-style: inherit;font-variant: inherit;font-weight: bold;font-stretch: inherit;font-size: inherit;line-height: inherit;font-family: inherit;vertical-align: baseline;">parter</strong></span></p>
                </td>
                <td style=" border-box;margin: 0px;padding: 0.5rem;font: inherit;vertical-align: top;width: 519px;">
                    <p style=" border-box;margin: 0px 0px 1em;padding: 0px;font: inherit;vertical-align: baseline;"><span style=" border-box;margin: 0px;padding: 0px;font-style: inherit;font-variant: inherit;font-weight: inherit;font-stretch: inherit;font-size:15px;line-height: inherit;font-family: inherit;vertical-align: baseline;">warsztat</span></p>
                    <p style=" border-box;margin: 0px 0px 1em;padding: 0px;font: inherit;vertical-align: baseline;"><span style=" border-box;margin: 0px;padding: 0px;font-style: inherit;font-variant: inherit;font-weight: inherit;font-stretch: inherit;font-size:15px;line-height: inherit;font-family: inherit;vertical-align: baseline;">magazyn</span></p>
                </td>
            </tr>
        </tbody>
    </table>
`
let coordinatesPI = [
    [52.1987154,21.0002502],
    [52.1987653,21.0005535],
    [52.1987048,21.0005732],
    [52.1987073,21.0005928],
    [52.1986821,21.0006009],
    [52.1986808,21.0005934],
    [52.1986822,21.0005928],
    [52.1986563,21.0003885],
    [52.1986793,21.0003815],
    [52.1986635,21.0002687],
    [52.1987154,21.0002502]]
let opisPI = `
`
let coordinatesAG = [
    [52.1991083,20.9985921],
    [52.1991771,20.9985578],
    [52.1992103,20.9987429],
    [52.1994429,20.9986324],
    [52.1994697,20.9987819],
    [52.1994526,20.998792],
    [52.1994894,20.998886],
    [52.1994703,20.9989056],
    [52.1996255,20.9993028],
    [52.1993774,20.9995602],
    [52.1993729,20.9995487],
    [52.1993575,20.9995648],
    [52.1993932,20.9997651],
    [52.1992354,20.9998398],
    [52.1991271,20.9992349],
    [52.1991176,20.9992392],
    [52.1990977,20.9991276],
    [52.1991071,20.9991229],
    [52.1990104,20.9985935],
    [52.1990672,20.9985665],
    [52.1990747,20.998608],
    [52.1991083,20.9985921]]
let opisAG = `
    <p></p>
    <summary style="box-sizing: border-box; margin: 0px; padding: 1.7rem 2rem 1.7rem 0px; font-style: inherit; font-variant: inherit; font-weight: bold; font-stretch: inherit; font-size: 1.25rem; line-height: 1.1; font-family: inherit; vertical-align: baseline; cursor: pointer; display: block; color: rgb(0, 82, 165); position: relative;">Budynek &nbsp;AG Administracyjno-Garażowy</summary>
    <p></p>
    <table cellspacing="0" class="Table" style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; border-collapse: collapse; border-spacing: 0px; width: 500px;">
        <tbody style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline;">
            <tr style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline;">
                <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: baseline; width: 75px;">
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><strong style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: bold; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">IV Piętro&nbsp;</span></span></strong></span></p>
                </td>
                <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: baseline; width: 425px;">
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12pt; line-height: inherit; font-family: inherit; vertical-align: baseline;">Dyrektor</span></p>
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12pt; line-height: inherit; font-family: inherit; vertical-align: baseline;">Z-ca Dyrektora ds. Medycznych</span></p>
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12pt; line-height: inherit; font-family: inherit; vertical-align: baseline;">Z-ca Dyrektora ds. Klinicznych i Naukowych</span></p>
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Centrum Projekt&oacute;w e-Zdrowie</span></span></span></p>
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Centrum Teleinformatyki</span></span></span></p>
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Dział Gospodarczy</span></span></span></p>
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Dział Telekomunikacji</span></span></span></p>
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Dział Zam&oacute;wień Publicznych</span></span></span></p>
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Dział Obsługi Pacjenta</span></span></span></p>
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Dział Statystyki Medycznej</span></span></span></p>
                </td>
            </tr>
            <tr style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline;">
                <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: baseline; width: 75px;">
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 11pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><strong style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: bold; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">III Piętro&nbsp;</span></span></strong></span></p>
                </td>
                <td style="box-sizing: border-box; margin: 0px; padding: 0.5rem; font: inherit; vertical-align: baseline; width: 425px;">
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12pt; line-height: inherit; font-family: inherit; vertical-align: baseline;">Z-ca Dyrektora ds. Teleinformatycznych i Inżynierii Medycznej</span></p>
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Gł&oacute;wny Księgowy</span></span></p>
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Dział Zasob&oacute;w Ludzkich</span></span></p>
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Dział Rozliczeń</span></span></p>
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Dział Ekonomiczno-Finansowy</span></span></p>
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Dział Epidemiologii</span></span></p>
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Inspektor Danych Osobowych</span></span></p>
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Dział Zarzadzania Jakością</span></span></p>
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Dział Audytu Wewnętrznego</span></span></p>
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Dział Badań Klinicznych i Wsp&oacute;łpracy Międzynarodowej</span></span></p>
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Dział Analiz</span></span></p>
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 12pt; line-height: inherit; font-family: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);">Dział Obsługi Pacjenta</span></span></p>
                    <p style="box-sizing: border-box; margin: 0px 0px 1em; padding: 0px; font: inherit; vertical-align: baseline;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font: inherit; vertical-align: baseline; color: rgb(27, 27, 27);"><span style="box-sizing: border-box; margin: 0px; padding: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 16px; line-height: inherit; font-family: inherit; vertical-align: baseline;">Pełnomocnik ds. Praw Pacjenta</span></span></p>
                </td>
            </tr>
        </tbody>
    </table>
    `


    // Objekty na mapie
    let szpital = newPolygon(coordinatesSzpital, "#2a6c9f")
    let A = polygonWithIconAndPopup(coordinatesA, opisA, "#054494", "ikony/A.png", "Budynek A")
    let B = polygonWithIconAndPopup(coordinatesB, opisB, "#006a95", "ikony/B.png", "Budynek B")
    let C = polygonWithIconAndPopup(coordinatesC, opisC, "#196133", "ikony/C.png", "Budynek C")
    let C6 = polygonWithIconAndPopup(coordinatesC6, opisC6, "#ead114", "ikony/C6.png", "Budynek C6")
    let D = polygonWithIconAndPopup(coordinatesD, opisD, "#d55b19", "ikony/D.png", "Budynek D")
    let E = polygonWithIconAndPopup(coordinatesE, opisE, "#ee7e01", "ikony/E.png", "Budynek E")
    let F = polygonWithIconAndPopup(coordinatesF, opisF, "#c9cd6b", "ikony/F.png", "Budynek F")
    let G = polygonWithIconAndPopup(coordinatesG, opisG, "#007fa7", "ikony/G.png", "Budynek G")
    let I = polygonWithIconAndPopup(coordinatesI, opisI, "#d172a2", "ikony/I.png", "Budynek I")
    let K = polygonWithIconAndPopup(coordinatesK, opisK, "#009036", "ikony/K.png", "Budynek K")
    let drugaelka = polygonWithIconAndPopup(coordinatesL2, opisL2, "#f1a543", "ikony/Ł2.png", "Budynek Ł2") 
    let elka = polygonWithIconAndPopup(coordinatesL, opisL, "#009de0", "ikony/Ł.png", "Budynek Ł")
    let O = polygonWithIconAndPopup(coordinatesO, opisO, "#016a93", "ikony/O.png", "Budynek O")
    let N = polygonWithIconAndPopup(coordinatesN, opisN, "#e69153", "ikony/Nż.png", "Budynek N")
    let PG = polygonWithIconAndPopup(coordinatesPG, opisPG, "#e42c2a", "ikony/PG.png", "Pawilon Główny")
    let R = polygonWithIconAndPopup(coordinatesR, opisR, "#935a3e", "ikony/R.png", "Budynek R")
    let S = polygonWithIconAndPopup(coordinatesS, opisS, "#e17717", "ikony/S.png", "Budynek S")
    let U = polygonWithIconAndPopup(coordinatesU, opisU, "#f37d02", "ikony/U.png", "Budynek U")
    let H = polygonWithIconAndPopup(coordinatesH, opisH, "#b12826", "ikony/H.png", "Budynek H")
    let PI = polygonWithIconAndPopup(coordinatesPI, opisPI, "#0091ca", "ikony/PIK.png", "Punkt Informacyjny")
    let AG = polygonWithIconAndPopup(coordinatesAG, opisAG, "#f5b3b4", "ikony/AG.png", "Budynek Administracyjno-Garażowy")
    var parkingIcon = new letterIcon({iconUrl: "ikony/parking.png"})
    L.marker([52.19898, 21.00008], {icon: parkingIcon}).addTo(map);



    // Wyszukiwarka 
    var searchLayer = L.layerGroup([A, B, C, C6, D , E, F, G, I, K, drugaelka, elka, O, N, PG, R, S, U, H, PI, AG]).addTo(map);
    map.addControl( new L.Control.Search({layer: searchLayer}) );