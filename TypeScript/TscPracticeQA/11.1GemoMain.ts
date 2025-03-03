/// <reference path="11Calculatearea.ts" />

const area = Geometry.calculateArea(5);
console.log(`Area of the circle: ${area.toFixed(2)}`);

// tsc --outFile output.js 11Calculatearea.ts 11.1GemoMain.ts
// node output.js

