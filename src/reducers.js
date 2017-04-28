import { combineReducers } from "redux";

import {
	CIRCLES_LOADED,
	SQUARES_LOADED,
	ADD_CIRCLE,
	ADD_SQUARE,
	DELETE_CIRCLE,
	DELETE_SQUARE
} from './actions';

function deleteElementById(elements, elementId) {
	const elementToDelete = elements.filter((el) => el.id === elementId)[0];
	const index = elements.indexOf(elementToDelete);
	const newElements = elements.slice();
	newElements.splice(index, 1);
	return newElements;
}

function circles(state = [], action) {
	switch (action.type) {
		case ADD_CIRCLE: {
			const { circle } = action.payload;
			const newState = state.concat(circle);
			return newState;
		}
		case DELETE_CIRCLE: {
			const { id } = action.payload;
			return deleteElementById(state, id);
		}
		case CIRCLES_LOADED: {
			const circles = JSON.parse(action.payload.jsonData);
			const newState = state.concat(circles);
			return newState;
		}
		default:
			return state;
	}
}

function squares(state = [], action) {
	switch (action.type) {
		case ADD_SQUARE: {
			const { square } = action.payload;
			const newState = state.concat(square);
			return newState;
		}
		case DELETE_SQUARE: {
			const { id } = action.payload;
			return deleteElementById(state, id);	
		}
        case SQUARES_LOADED: {
            const squares = JSON.parse(action.payload.jsonData);
            const newState = state.concat(squares);
            return newState;
        }
		default:
			return state;
	}
}

export default combineReducers({
	circles,
	squares
});