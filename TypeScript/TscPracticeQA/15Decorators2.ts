// Enable decorator support in tsconfig.json: { "experimentalDecorators": true }

function ValidateEmail(target: any, propertyKey: string) {
  let value: string;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  Object.defineProperty(target, propertyKey, {
      get: function () {
          return value;
      },
      set: function (newValue: string) {
          if (!emailRegex.test(newValue)) {
              throw new Error(`❌ Invalid email format for ${propertyKey}: ${newValue}`);
          }
          value = newValue;
      },
      enumerable: true,
      configurable: true
  });
}

class User {
  @ValidateEmail
  email: string;

  constructor(email: string) {
      this.email = email; // Triggers validation
  }
}

// ✅ Test Cases
try {
  const user1 = new User("valid.email@example.com");
  console.log("✅ User created successfully:", user1.email);
} catch (error) {
  console.error(error);
}

try {
  const user2 = new User("invalid-email"); // ❌ Should throw an error
  console.log("✅ User created successfully:", user2.email);
} catch (error) {
  console.error(error);
}
