'use strict';

describe('directive:weather-card-list', function () {
	// load the directive's module and view
	beforeEach(angular.mock.module('WeatherApp'));

	var element, scope;

	// Initialize a mock scope
	beforeEach(inject(function ($injector) {
		scope = $injector.get('$rootScope').$new();
	}));

	// compile the element to be tested
	it('should be a thing', inject(function ($compile) {
		element = angular.element('<weather-card-list></weather-card-list>');
		element = $compile(element)(scope);

		scope.$apply();
	}));
});