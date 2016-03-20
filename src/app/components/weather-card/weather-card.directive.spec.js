'use strict';

import testData from 'common/store/test-data';

describe('directive:weather-card', function () {
	// load the directive's module and view
	beforeEach(angular.mock.module('WeatherApp'));

	var element, scope;

	// Initialize a mock scope
	beforeEach(inject(function ($injector) {
		scope = $injector.get('$rootScope').$new();
		scope.weatherData = testData.list[0];
	}));

	// compile the element to be tested
	it('should contain the correct data in the correct container', inject(function ($compile) {
		element = angular.element('<weather-card data="weatherData"></weather-card>');
		element = $compile(element)(scope);
		element = element[0];
		scope.$apply();

		const header = element.querySelector('h2');
		const icon = element.querySelector('img');
		const main = element.querySelector('h3');
		const description = element.querySelector('.description');

		expect(header.innerHTML).toBe('Mon');
		expect(icon.src).toBe('http://openweathermap.org/img/w/10n.png');
		expect(main.innerHTML).toBe('Rain');
		expect(description.innerHTML).toBe('light rain');
	}));
});