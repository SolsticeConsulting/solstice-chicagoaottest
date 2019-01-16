const request = require('request');
const querystring = require('querystring');

const geojson = {
    "type": "Feature",
        "geometry": {
        "type": "Point",
            "coordinates": [-87.63986936,41.8821077],
            "crs": {
            "type": "name",
                "properties": {
                "name": "EPSG:4326"
            }
        }
    }
};

const distance = 5000;
const qstring = querystring.escape("distance:"+distance.toString()+":"+JSON.stringify(geojson));

request('https://api.arrayofthings.org/api/nodes?location='+qstring, function (error, response, body) {
    bodyObj = JSON.parse(body);
    console.log(bodyObj);
});