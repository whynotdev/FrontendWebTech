// Class Decorator to log instantiation
function LogInstantiation<T extends new (...args: any[]) => any>(constructor: T) {
  return class extends constructor {
      constructor(...args: any[]) {
          super(...args);
          console.log(`An instance of ${constructor.name} was created with arguments:`, args);
      }
  };
}

// Applying the decorator to the User class
@LogInstantiation
class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
  }
}

// creted instances
const user1 = new User("Alice", 25);
const user2 = new User("Bob", 30);

// npx ts-node 14Decorators.ts