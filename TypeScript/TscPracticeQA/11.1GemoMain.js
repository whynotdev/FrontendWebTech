/// <reference path="11Calculatearea.ts" />
var area = Geometry.calculateArea(5);
console.log("Area of the circle: ".concat(area.toFixed(2)));
// tsc --outFile output.js geometry.ts main.ts
// node output.js
