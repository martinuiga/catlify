import React from 'react';
import {shallow} from 'enzyme';
import Categories from '../Categories';
import * as actions from '../../../store/actions/index';


import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

describe('Categories', () => {

	const initialState = {
		cats: {
			category: null
		}
	};

	const middlewares = [thunk];
	const mockStore = configureMockStore(middlewares);
	const store = mockStore(initialState);

	it('Should change the category to number 5', () => {
		const component = shallow(<Categories store={store}/>);

		// Why does it not work here?
		expect(component.prop('category')).toBe(null);
		store.dispatch(actions.setCategory(5));
		component.dive().instance().changeCategory(5);
		expect(component.prop('category')).toBe(5);
	});
});
