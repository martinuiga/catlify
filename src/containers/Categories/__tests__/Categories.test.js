import React from 'react';
import {shallow} from 'enzyme';
import Categories from '../Categories';

import configureMockStore from 'redux-mock-store'

describe('Categories', () => {

	const initialState = {
		cats: {
			category: null
		}
	};

	const mockStore = configureMockStore();
	const store = mockStore(initialState);

	it('should render correctly in "debug" mode', () => {
		const component = shallow(<Categories store={store}/>);

		// Why does it not work here?
		expect(component.prop('category')).toBe(null);
		component.dive().instance().changeCategory(5);
		expect(component.prop('category')).toBe(5);
	});
});
