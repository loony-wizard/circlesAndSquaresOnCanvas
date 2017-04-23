function Circle(px, py, r, color, id) {
	this.px = px;
	this.py = py;
	this.r = r;
	this.color = color;
	this.id = id;
}

export function CirclesFactory() {
	let count = 0;
	return function (px, py, r, color) {
		return new Circle(px, py, r, color, count++);
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
	let count = 0;
	return function (px, py, side, color) {
		return new Square(px, py, side, color, count++);
	}
}