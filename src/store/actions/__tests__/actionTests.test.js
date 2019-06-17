import * as actions from '../../actions/index'
import * as types from '../../actions/actionTypes'

describe('actions', () => {
	it('Set cats to NULL action', () => {
		const expectedAction = {
			type: types.SET_CATS_NULL,
			cats: []
		};
		expect(actions.setCatsToNull()).toEqual(expectedAction)
	});

	it('Set category to two', () => {
		const expectedAction = {
			type: types.SET_CATEGORY,
			category: 2
		};
		expect(actions.setCategory(2)).toEqual(expectedAction)
	});

	it('Dispatch cat objects', () => {
		const oneCat = [{
			"breeds": [],
			"id": "27v",
			"url": "https://cdn2.thecatapi.com/images/27v.jpg",
			"width": 1024,
			"height": 768
		}];

		const secondCat = [{
			"breeds": [],
			"id": "394",
			"url": "https://cdn2.thecatapi.com/images/394.jpg",
			"width": 413,
			"height": 336
		}];

		const expectedActionOfOneCat = {
			type: types.SET_CATS,
			cats: oneCat
		};
		const expectedActionOfCatsTogether = {
			type: types.SET_CATS,
			cats: secondCat
		};

		expect(actions.setCats(oneCat)).toEqual(expectedActionOfOneCat);
		expect(actions.setCats(secondCat)).toEqual(expectedActionOfCatsTogether);
	});
});
