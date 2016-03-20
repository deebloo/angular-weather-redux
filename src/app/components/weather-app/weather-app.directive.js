'use strict';

import template from 'components/weather-app/weather-app.directive.html';
import store from 'common/store';

/**
 * @ngdoc directive
 *
 * @description
 * The main application container. Listens for changes to the application state and sets the weather data.
 *
 * @example <weather-app></weather-app>
 */
function weatherApp() {
	class Controller {
		constructor() {
			store.subscribe(() => {
				this.weatherData = store.getState();
			});
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

weatherApp.$inject = [];

export default weatherApp;