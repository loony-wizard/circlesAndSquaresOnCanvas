import { combineReducers } from "redux";

import {
	ADD_CIRCLE,
	ADD_SQUARE,
	DELETE_CIRCLE,
	DELETE_SQUARE
} from './actions';

import {
	CirclesFactory,
	SquaresFactory
} from './figures';

import {
	randomInt,
	randomColor
} from './random';

const CIRCLE_MIN_RADIUS = 15;
const CIRCLE_MAX_RADIUS = 100;

const SQUARE_MIN_SIDE = 20;
const SQUARE_MAX_SIDE = 150;

const createCircle = CirclesFactory();
const createSquare = SquaresFactory();

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
			const { px, py } = action.payload;
			const r = randomInt(CIRCLE_MIN_RADIUS, CIRCLE_MAX_RADIUS);
			const color = randomColor();
			const newState = state.concat(createCircle(px, py, r, color));
			return newState;
		}
		case DELETE_CIRCLE: {
			const { id } = action.payload;
			return deleteElementById(state, id);
		}
		default:
			return state;
	}
}

function squares(state = [], action) {
	switch (action.type) {
		case ADD_SQUARE: {
			const { px, py } = action.payload;
			const side = randomInt(SQUARE_MIN_SIDE, SQUARE_MAX_SIDE);
			const color = randomColor();
			const newState = state.concat(createSquare(px, py, side, color));
			return newState;
		}
		case DELETE_SQUARE: {
			const { id } = action.payload;
			return deleteElementById(state, id);	
		}
		default:
			return state;
	}
}

export default combineReducers({
	circles,
	squares
});