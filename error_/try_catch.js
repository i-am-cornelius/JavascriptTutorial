// Try and Catch allows us to return and catch the error without crashing the program

// 1. Basic try-catch for division by zero
function safeDivide(a, b) {
  try {
    if (b === 0) {
      throw new Error("Division by zero is not allowed");
    }
    return a / b;
  } catch (error) {
    console.error("Error:", error.message);
    return null;
  }
}

console.log(safeDivide(10, 2)); // 5
console.log(safeDivide(10, 0)); // Error: Division by zero is not allowed, returns null

// 2. JSON parsing with error handling
function parseJSON(jsonString) {
  try {
    const data = JSON.parse(jsonString);
    console.log("Parsed successfully:", data);
    return data;
  } catch (error) {
    console.error("Invalid JSON:", error.message);
    return {};
  }
}

parseJSON('{"name": "John", "age": 30}'); // Works fine
parseJSON('{"name": "John", "age":}');    // Invalid JSON error

// 3. Async/await with try-catch
async function fetchUserData(userId) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const userData = await response.json();
    console.log("User data:", userData);
    return userData;
  } catch (error) {
    console.error("Failed to fetch user data:", error.message);
    return null;
  }
}

// fetchUserData(1); // Uncomment to test

// 4. Try-catch-finally example
function processFile(filename) {
  let file = null;
  
  try {
    console.log(`Opening file: ${filename}`);
    
    if (!filename || filename.length === 0) {
      throw new Error("Invalid filename");
    }
    
    file = { name: filename, data: "file content" }; // Simulated file object
    console.log("Processing file:", file.data);
    
    return file.data;
  } catch (error) {
    console.error("File processing error:", error.message);
    return null;
  } finally {
    // This runs regardless of success or failure
    console.log("Cleaning up resources...");
    if (file) {
      console.log(`Closing file: ${file.name}`);
    }
  }
}

processFile("document.txt"); // Success case
processFile("");             // Error case

// 5. Multiple catch blocks (using instanceof)
function handleDifferentErrors(operation) {
  try {
    switch (operation) {
      case "type":
        throw new TypeError("This is a type error");
      case "range":
        throw new RangeError("This is a range error");
      case "reference":
        throw new ReferenceError("This is a reference error");
      default:
        throw new Error("This is a generic error");
    }
  } catch (error) {
    if (error instanceof TypeError) {
      console.error("Type Error handled:", error.message);
    } else if (error instanceof RangeError) {
      console.error("Range Error handled:", error.message);
    } else if (error instanceof ReferenceError) {
      console.error("Reference Error handled:", error.message);
    } else {
      console.error("Generic Error handled:", error.message);
    }
  }
}

handleDifferentErrors("type");
handleDifferentErrors("range");
handleDifferentErrors("other");

// 6. Nested try-catch
function complexOperation(data) {
  try {
    console.log("Starting complex operation...");
    
    // First operation
    try {
      if (!data) {
        throw new Error("No data provided");
      }
      console.log("Data validation passed");
    } catch (validationError) {
      console.error("Validation failed:", validationError.message);
      throw validationError; // Re-throw to outer catch
    }
    
    // Second operation
    try {
      const result = data.toString().toUpperCase();
      console.log("Processing result:", result);
      return result;
    } catch (processingError) {
      console.error("Processing failed:", processingError.message);
      return "DEFAULT_VALUE";
    }
    
  } catch (error) {
    console.error("Operation failed completely:", error.message);
    return null;
  }
}

complexOperation("hello world"); // Success
complexOperation(null);          // Validation error

// 7. Promise-based error handling
function promiseExample() {
  // Using .catch() method
  fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => console.log('Promise success:', data.title))
    .catch(error => console.error('Promise error:', error.message));
}

// promiseExample(); // Uncomment to test

// 8. Custom error classes
class ValidationError extends Error {
  constructor(field, value) {
    super(`Validation failed for field '${field}' with value '${value}'`);
    this.name = 'ValidationError';
    this.field = field;
    this.value = value;
  }
}

function validateUser(user) {
  try {
    if (!user.email || !user.email.includes('@')) {
      throw new ValidationError('email', user.email);
    }
    
    if (!user.age || user.age < 0 || user.age > 120) {
      throw new ValidationError('age', user.age);
    }
    
    console.log("User validation successful!");
    return true;
  } catch (error) {
    if (error instanceof ValidationError) {
      console.error(`Custom validation error - Field: ${error.field}, Value: ${error.value}`);
      console.error(`Message: ${error.message}`);
    } else {
      console.error("Unexpected error:", error.message);
    }
    return false;
  }
}

validateUser({ email: "john@example.com", age: 25 }); // Valid
validateUser({ email: "invalid-email", age: 25 });    // Invalid email
validateUser({ email: "john@example.com", age: -5 });  // Invalid age