var Shape = require("./Shape.js");

function Triangle(side1, side2, side3) {
	this.type = "triangle";
	this.side1 = side1;
	this.side2 = side2;
	this.side3 = side3;
	this.constructor = Triangle;

}

Triangle.prototype = new Shape();
module.exports = Triangle;