'use strict';

export default ($stateProvider) => {
	$stateProvider.state('home', {
		url: '/',
		template: '<weather-app></weather-app>',
	});
};