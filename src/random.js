export const randomInt = (min, max) => Math.floor( min + Math.random() * (max + 1 - min) );

const randomHexademical = (min = 0, max = 255) => {
	const N = randomInt(min, max).toString(16);
	return N.length == 2 ? N : `0${N}`;
}

export const randomColor = () => {
	const R = randomHexademical(0, 255);
	const G = randomHexademical(0, 255);
	const B = randomHexademical(0, 255);
	return `#${R}${G}${B}`;
};