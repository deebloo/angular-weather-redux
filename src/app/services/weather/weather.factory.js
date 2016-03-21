'use strict';

import store from 'common/store';

/**
 * @ngdoc factory
 *
 * @description
 * Factory for searching for weather.
 */
function weather($http) {
	const getAPi = cityState => {
		return `http://api.openweathermap.org/data/2.5/forecast/daily?appid=585e670f55ee9b114fa2f1f2731177d9&q=${cityState}&units=imperial&cnt=5`;
	};

	const success = res => {
		document.body.classList.remove('loading');

		store.dispatch({
			type: 'weather_success',
			data: res.data
		});

		return res;
	};

	const error = err => {
		document.body.classList.remove('loading');

		let errMsg = {
			type: 'weather_error',
			data: {
				message: err
			}
		};

		if (err.statusText) {
			errMsg.data.message = err.statusText;
		}

		store.dispatch(errMsg);

		return err;
	};

	return {
		/**
		 * searches for weather from a specific location
		 * @param {string} location - the location to search for
		 * @return {promise} http promise
		 * @memberof weather
		 */
		search: location => {
			document.body.classList.add('loading');

			return $http
				.get(getAPi(location))
				.then(success, error);
		}
	};
}

weather.$inject = ['$http'];

export default weather;