import React from 'react';
import {shallow} from 'enzyme';
import Layout from '../Layout';

import configureMockStore from 'redux-mock-store'

describe('Categories', () => {

	const initialState = {
		cats: {
			category: 10,
			cats: []
		}
	};

	const mockStore = configureMockStore();
	const store = mockStore(initialState);

	it('Should add cats to the list with a button click', () => {

		// Why does it not work here?
		const component = shallow(<Layout store={store}/>);
		expect(component.prop('cats').length).toBe(0);
		component.dive().find('button').simulate('click');
		expect(component.prop('cats').length).toBe(10);
	});
});
