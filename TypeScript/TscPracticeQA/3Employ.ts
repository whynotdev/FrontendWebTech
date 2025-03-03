// Defining an interface Person
interface Person {
  name: string;
  age: number;
}

// Implementing the interface in a class Employee
class Employee implements Person {
  name: string;
  age: number;
  employeeId: number;

  constructor(name: string, age: number, employeeId: number) {
      this.name = name;
      this.age = age;
      this.employeeId = employeeId;
  }

  getEmployeeDetails(): string {
      return `Employee ID: ${this.employeeId}, Name: ${this.name}, Age: ${this.age}`;
  }
}

// Example how we use it
const emp = new Employee("Arif M", 30, 101);
console.log(emp.getEmployeeDetails());
