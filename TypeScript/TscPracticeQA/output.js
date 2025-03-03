var Geometry;
(function (Geometry) {
    function calculateArea(radius) {
        return Math.PI * radius * radius;
    }
    Geometry.calculateArea = calculateArea;
})(Geometry || (Geometry = {}));
/// <reference path="11Calculatearea.ts" />
var area = Geometry.calculateArea(5);
console.log("Area of the circle: ".concat(area.toFixed(2)));
// tsc --outFile output.js 11Calculatearea.ts 11.1GemoMain.ts
// node output.js
