'use strict';

import store from 'common/store';
import testData from 'common/store/test-data';
import moment from 'moment';

describe('common:store', function () {
	let data = {};

	beforeEach(() => {
		store.subscribe(() => {
			data = store.getState();
		});
	});

	it('should have a day associate with each weather item', () => {
		let day = moment();

		store.dispatch({
			type: 'myAction',
			data: testData
		});

		data.list.forEach((item, idx) => {
			expect(typeof item.day).toBe('string');
			expect(item.day).toBe(day.add(idx, 'days').format('ddd'));
		});
	});
});