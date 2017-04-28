function generateId() {
	return new Date().getTime();
}

function Circle(px, py, r, color, id) {
	this.px = px;
	this.py = py;
	this.r = r;
	this.color = color;
	this.id = id;
}

export function CirclesFactory() {
	return function (px, py, r, color) {
		return new Circle(px, py, r, color, generateId());
	}
}

function Square(px, py, side, color, id) {
	this.px = px;
	this.py = py;
	this.side = side;
	this.color = color;
	this.id = id;
}

export function SquaresFactory() {
	return function (px, py, side, color) {
		return new Square(px, py, side, color, generateId());
	}
}