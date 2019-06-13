import * as actionTypes from '../actions/actionTypes';
import {updateObject} from "../../shared/utility";

const initialState = {
	category: null,
	cats: []
};

const setCategory = (state, action) => {
	return updateObject(state, {category: action.category})
};

const setCats = (state, action) => {
	return {
		...state,
		cats: state.cats.concat(action.cats)
	}
};

const setCatsToNull = (state) => {
	return {
		...state,
		cats: []
	}
};


const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SET_CATEGORY:
			return setCategory(state, action);
		case actionTypes.SET_CATS:
			return setCats(state, action);
		case actionTypes.SET_CATS_NULL:
			return setCatsToNull(state);
		default:
			return state;
	}
};

export default reducer;
