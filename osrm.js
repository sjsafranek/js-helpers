
const OSRM = {
    
    getRoute: function(points, options) {
        options = options || {};
        let coordinates = points.map(d => `${d.longitude},${d.latitude}`).join(';');
        let profile = options.profile || 'foot';
        $.ajax({
            method: 'GET',
            url: `http://router.project-osrm.org/route/v1/${profile}/${coordinates}`,
            data: {
                overview: 'simplified',
                geometries: 'geojson'
            },
            success: function(data) {
                callback(null, data);
            }
        });
    }

}
