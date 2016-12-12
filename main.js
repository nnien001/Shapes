var Shape = require("./Shape.js");
var Triangle = require("./Triangle.js");
var Square = require("./Square.js");
var Pentagon = require("./Pentagon.js");

var myTriangle = new Triangle(1, 4, 9);
var mySquare = new Square(4, 4, 4, 4);
var myPentagon = new Pentagon(5, 5, 5, 5, 5);

console.log(myTriangle.get_type());
console.log(mySquare.get_type());
console.log(myPentagon.get_type());

console.log("is myTriangle a shape?", myTriangle instanceof Shape);
console.log("is mySquare a shape?", mySquare instanceof Shape);
console.log("is myPentagon a shape?", myPentagon instanceof Shape);

console.log("is Pentagon a Triangle?", myPentagon instanceof Triangle);