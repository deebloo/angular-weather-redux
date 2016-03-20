'use strict';

import template from 'components/weather-card/weather-card.directive.html';

/**
 * @ngdoc directive
 *
 * @description
 * A single weather "card".
 * Represents the weather for a single day
 *
 * @property {object} data - the weather data for a single day
 *
 * @example <weather-card data="vm.weatherData[0]"></weather-card>
 */
function weatherCard() {
	class Controller {
		constructor() {
			if (this.data) {
				this.weather = this.data.weather[0];
				this.icon = `http://openweathermap.org/img/w/${this.weather.icon}.png`;
			}
		}
	}

	return {
		restrict: 'E',
		template: template,
		scope: {
			data: '='
		},
		controller: Controller,
		controllerAs: 'vm',
		bindToController: true,
	};
}

weatherCard.$inject = [];

export default weatherCard;