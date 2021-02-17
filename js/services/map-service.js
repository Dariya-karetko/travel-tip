export const locationService = {
    getLocs,
    getCoords
}
var locs = [{ lat: 11.22, lng: 22.11 }]

function getLocs() {
    return new Promise((resolve, reject) => {
            resolve(locs);
    });
}

function getCoords(input){
    return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${input}&key=AIzaSyCzmxFNdgIsDvJcfshDzu47wGLhuN20Pvg`)
    .then(res => {
        var coords = {lat: res.data.results[0].geometry.location.lat,lng: res.data.results[0].geometry.location.lng};
        return coords
    })
}

