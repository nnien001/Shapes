var Shape = require("./Shape.js");

function Pentagon(side1, side2, side3, side4, side5) { //technically not a square.
	this.type = "pentagon";
	this.side1 = side1;
	this.side2 = side2;
	this.side3 = side3;
	this.side4 = side4;
	this.side5 = side5;
	this.constructor = Pentagon;
}

Pentagon.prototype = new Shape();
module.exports = Pentagon;