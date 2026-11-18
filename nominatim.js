
const Nominatim = {

	geocode: function(placename, callback) {
		$.ajax({
			method: 'GET',
			url: 'https://nominatim.openstreetmap.org/search',
			data: {
				q: placename,
				format: 'json'
			},
			success: function(data) {
				callback(null, data[0]);
			}
		});
	},

	reverseGeocode: function(coords, callback) {
		$.ajax({
			method: 'GET',
			url: 'https://nominatim.openstreetmap.org/reverse',
			data: {
				lat: coords.latitude,
				lon: coords.longitude,
				format: 'json'
			},
			success: function(data) {
				callback(null, data);
			}
		});
	}

}
