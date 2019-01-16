const querystring = require('querystring');
const requestpromise = require('request-promise');




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


class CascadeNearbyAOT {
    static async getnearby(qstring) {

        let options = {
            uri: 'https://api.arrayofthings.org/api/nodes?location=' + qstring,
            method: 'GET',
            json: true
        };

        return requestpromise(options)
            .then((parsedbody) => {
                console.log(parsedbody);
                return(parsedbody);
        });
    }
}


const distance = 5000;
const qstring = querystring.escape("distance:"+distance.toString()+":"+JSON.stringify(geojson));

CascadeNearbyAOT.getnearby(qstring)
    .then((response) => {
        console.log(JSON.stringify(response,null,4));
    })
    .catch((err) => {
        console.log(err);
    });
