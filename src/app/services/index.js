'use strict';

// THIS FILE IS DYNAMICALLY GENERATED. MODIFY AT YOUR OWN RISK

// START-import-services
import weather from './weather/weather.factory.js';
// END-import-services

const moduleName = 'services';
const services = angular.module(moduleName, []);

// START-attach-services
services.factory('weather', weather);
// END-attach-services

export default moduleName;