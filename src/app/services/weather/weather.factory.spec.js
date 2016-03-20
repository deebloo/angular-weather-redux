'use strict';

describe('factory:weather', function () {
	// load the factory's module
	beforeEach(angular.mock.module('WeatherApp'));

	var searchWeather;

	// initialize a new instance of the factory before each test
	beforeEach(inject(function ($injector) {
		searchWeather = $injector.get('weather');
	}));

	it('condition of test', function () {

	});
});