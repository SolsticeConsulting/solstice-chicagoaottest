const requestpromise = require('request-promise');

if (process.argv.length != 3) {
    console.log('Provide a timestamp in the form of `2019-01-01T00:00:00.` Use `gt:`, `lt:`, etc. for greater than, less than...');
    console.log('For example `gt:2019-01-16T23:00:30`.');
    return;
}

const timestamp = process.argv[2];

const geojson = {
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [-87.63986936, 41.8821077],
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
            uri: 'https://api.arrayofthings.org/api/observations?' + qstring,
            method: 'GET',
            json: true
        };

        console.log(options.uri);

        return requestpromise(options)
            .then((parsedbody) => {
                console.log(parsedbody);
                return (parsedbody);
            });
    }
}

const from_node = "004";
const qstring = "from_node=" + from_node + "&" + "timestamp=" + timestamp;

CascadeNearbyAOT.getnearby(qstring)
    .then((response) => {
        console.log(JSON.stringify(response, null, 4));
    })
    .catch((err) => {
        console.log(err);
    });
