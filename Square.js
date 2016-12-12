var Shape = require("./Shape.js");

function Square(side1, side2, side3, side4) { //technically not a square.
	this.type = "square";
	this.side1 = side1;
	this.side2 = side2;
	this.side3 = side3;
	this.side4 = side4;
	this.constructor = Square;

}

Square.prototype = new Shape();
module.exports = Square;