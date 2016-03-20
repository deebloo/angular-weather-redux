'use strict';

describe('directive:weather-search', function () {
	// load the directive's module and view
	beforeEach(angular.mock.module('WeatherApp'));

	var element, scope;

	// Initialize a mock scope
	beforeEach(inject(function ($injector) {
		scope = $injector.get('$rootScope').$new();
	}));

	// compile the element to be tested
	it('should be a thing', inject(function ($compile) {
		element = angular.element('<weather-search></weather-search>');
		element = $compile(element)(scope);

		scope.$apply();
	}));
});