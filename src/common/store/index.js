import moment from 'moment';
import {
	createStore
}
from 'redux';

/**
 * @ngdoc common
 *
 * @description
 * The redux store that maintains application state
 *
 * @param  {object} state - current application state
 * @param {object} action - the action being sent
 *
 * @return {object} the application state
 */
const store = createStore((state = {}, action) => {
	let day = moment();

	if (action.data) {
		action.data.list.forEach((item, idx) => {
			item.day = day.add(idx, 'day').format('ddd');
		});
	}

	return action.data;
});

export default store;