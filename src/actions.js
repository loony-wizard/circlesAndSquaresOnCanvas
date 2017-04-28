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

export const LOAD_CIRCLES = 'LOAD_CIRCLES';
export function loadCircles() {
	return {
		type: LOAD_CIRCLES
	}
}

export const CIRCLES_LOADED = 'CIRCLES_LOADED';
export function circlesLoaded(jsonData) {
	return {
		type: CIRCLES_LOADED,
		payload: {
			jsonData
		}
	}
}

export const ADD_CIRCLE = 'ADD_CIRCLE';
export function addCircle(px, py) {
    const r = randomInt(CIRCLE_MIN_RADIUS, CIRCLE_MAX_RADIUS);
    const color = randomColor();
    const circle = createCircle(px, py, r, color);
	return {
		type: ADD_CIRCLE,
		payload: {
			circle
		}
	};
}

export const DELETE_CIRCLE = 'DELETE_CIRCLE';
export function deleteCircle(id) {
	return {
		type: DELETE_CIRCLE,
		payload: {
			id
		}
	};
}

export const LOAD_SQUARES = 'LOAD_SQUARES';
export function loadSquares() {
    return {
        type: LOAD_SQUARES
    }
}

export const SQUARES_LOADED = 'SQUARES_LOADED';
export function squaresLoaded(jsonData) {
    return {
        type: SQUARES_LOADED,
        payload: {
            jsonData
        }
    }
}

export const ADD_SQUARE = 'ADD_SQUARE';
export function addSquare(px, py) {
    const side = randomInt(SQUARE_MIN_SIDE, SQUARE_MAX_SIDE);
    const color = randomColor();
    const square = createSquare(px, py, side, color);
	return {
		type: ADD_SQUARE,
		payload: {
			square
		}
	};
}

export const DELETE_SQUARE = 'DELETE_SQUARE';
export function deleteSquare(id) {
	return {
		type: DELETE_SQUARE,
		payload: {
			id
		}
	};
}