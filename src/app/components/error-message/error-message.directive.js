'use strict';

import template from 'components/error-message/error-message.directive.html';
import store from 'common/store';

/**
 * @ngdoc directive
 *
 * @description
 * Error message container. Listens to the store and if an error ever occurs it displays that message
 *
 * @example <error-message></error-message>
 */
function errorMessage() {
	class Controller {
		constructor() {
			this.message = '';

			store.subscribe(() => {
				const model = store.getState();

				if (model.cod !== '200') {
					this.message = model.message;
				}
				else {
					this.cleanUp();
				}
			});
		}

		cleanUp() {
			this.message = '';
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

errorMessage.$inject = [];

export default errorMessage;