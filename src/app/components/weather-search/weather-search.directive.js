'use strict';

import template from 'components/weather-search/weather-search.directive.html';

/**
 * @ngdoc directive
 *
 * @description
 * Form for searching for weather.
 *
 * @example <weather-search></weather-search>
 */
function weatherSearch(weather) {
	class Controller {
		constructor() {
			this.city = '';
		}

		search() {
			weather.search(this.city);
		}
	}

	return {
		restrict: 'E',
		template: template,
		scope: {},
		controller: Controller,
		controllerAs: 'vm',
		bindToController: true,
	};
}

weatherSearch.$inject = ['weather'];

export default weatherSearch;