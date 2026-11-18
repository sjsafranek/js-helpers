
Number.prototype.isInt = function() {
	return this % 1 === 0;
}

Number.prototype.isFloat = function() {
	return this % 1 !== 0;
}

Number.prototype.toRad = function() {
	return this * Math.PI / 180;
}

Number.prototype.toDeg = function() {
	return this * 180 / Math.PI;
}