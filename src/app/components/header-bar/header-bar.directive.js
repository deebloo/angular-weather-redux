'use strict';

import template from 'components/header-bar/header-bar.directive.html';

/**
 * @ngdoc directive
 *
 * @description
 * displays the header bar for the application
 *
 * @example <header-bar></header-bar>
 */
function headerBar() {
	class Controller {}

	return {
		restrict: 'E',
		template: template,
		scope: {
			city: '='
		},
		controller: Controller,
		controllerAs: 'vm',
		bindToController: true
	};
}

headerBar.$inject = [];

export default headerBar;