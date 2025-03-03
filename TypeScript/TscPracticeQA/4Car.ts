interface Vehicle {
  startEngine(): string;
}

// Implementing the interface in a class Car
class Car implements Vehicle {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
  }

  startEngine(): string {
      return `${this.make} ${this.model} (${this.year}) engine started.`;
  }
}


const myCar = new Car("Toyota", "Corolla", 2022);
console.log(myCar.startEngine());
