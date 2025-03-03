// Implementing the interface in a class Car
var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.startEngine = function () {
        return "".concat(this.make, " ").concat(this.model, " (").concat(this.year, ") engine started.");
    };
    return Car;
}());
// Example usage
var myCar = new Car("Toyota", "Corolla", 2022);
console.log(myCar.startEngine());
