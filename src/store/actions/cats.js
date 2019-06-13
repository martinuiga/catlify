import * as actionTypes from './actionTypes';

export const setCategory = (category) => {
	return {
		type: actionTypes.SET_CATEGORY,
		category: category
	}
};

export const setCats = (cats) => {
	return {
		type: actionTypes.SET_CATS,
		cats: cats
	}
};

export const setCatsToNull = () => {
	return {
		type: actionTypes.SET_CATS_NULL,
		cats: []
	}
};
