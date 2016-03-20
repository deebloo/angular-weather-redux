'use strict';

import template from 'components/weather-card-list/weather-card-list.directive.html';

/**
 * @ngdoc directive
 *
 * @description
 * Displays a list of weather cards for each day passed into it.
 *
 * @property {object} weather - weather data for multiple days.
 *
 * @example <error-message weather="vm.weatherData"></error-message>
 */
function weatherCardList() {
	class Controller {
		constructor() {}
	}

	return {
		restrict: 'E',
		template: template,
		scope: {
			weather: '='
		},
		controller: Controller,
		controllerAs: 'vm',
		bindToController: true,
	};
}

weatherCardList.$inject = [];

export default weatherCardList;