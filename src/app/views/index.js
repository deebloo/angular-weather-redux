'use strict';

// THIS FILE IS DYNAMICALLY GENERATED. MODIFY AT YOUR OWN RISK

// START-import-routes
import home from './home/home.route.js';
// END-import-routes

const moduleName = 'views';
const views = angular.module(moduleName, ['ui.router']);

views.config(['$stateProvider', function ($stateProvider) {
	// START-attach-routes
	home(...arguments);
	// END-attach-routes
}]);

export default moduleName;