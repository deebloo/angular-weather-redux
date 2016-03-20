'use strict';

import testData from 'common/store/test-data';

describe('directive:weather-card-list', function () {
	// load the directive's module and view
	beforeEach(angular.mock.module('WeatherApp'));

	var element, scope, $rootScope;

	// Initialize a mock scope
	beforeEach(inject(function ($injector) {
		$rootScope = $injector.get('$rootScope');
		scope = $rootScope.$new();

		scope.testData = testData.list;
	}));

	// compile the element to be tested
	it('should be a thing', inject(function ($compile) {
		element = angular.element('<weather-card-list weather="testData"></weather-card-list>');
		element = $compile(element)(scope);
		scope.$apply();

		const cards = element.find('weather-card');

		expect(cards.length).toBe(5);
		expect(cards[0].querySelector('h2').innerHTML).toBe('Mon');
		expect(cards[4].querySelector('h2').innerHTML).toBe('Fri');
	}));
});