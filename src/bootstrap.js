'use strict';

/** jshint ignore:start **/
import angular from 'angular';
import ngAnimate from 'angular-animate';
import ngSanitize from 'angular-sanitize';
import uiRouter from 'angular-ui-router';
/** jshint ignore:end **/

import APP_NAME from 'src/app/';

angular.element(document).ready(() => angular.bootstrap(document, [APP_NAME]));