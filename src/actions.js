export const ADD_CIRCLE = 'ADD_CIRCLE';
export function addCircle(px, py) {
	return {
		type: ADD_CIRCLE,
		payload: {
			px,
			py
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

export const ADD_SQUARE = 'ADD_SQUARE';
export function addSquare(px, py) {
	return {
		type: ADD_SQUARE,
		payload: {
			px,
			py
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