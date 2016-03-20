// THIS FILE IS DYNAMICALLY GENERATED. MODIFY AT YOUR OWN RISK

// START-import-components
import errorMessage from './error-message/error-message.directive.js';
import headerBar from './header-bar/header-bar.directive.js';
import weatherApp from './weather-app/weather-app.directive.js';
import weatherCard from './weather-card/weather-card.directive.js';
import weatherCardList from './weather-card-list/weather-card-list.directive.js';
import weatherSearch from './weather-search/weather-search.directive.js';
// END-import-components

const moduleName = 'components';
const components = angular.module(moduleName, []);

// START-attach-components
components.directive('errorMessage', errorMessage);
components.directive('headerBar', headerBar);
components.directive('weatherApp', weatherApp);
components.directive('weatherCard', weatherCard);
components.directive('weatherCardList', weatherCardList);
components.directive('weatherSearch', weatherSearch);
// END-attach-components

export default moduleName;