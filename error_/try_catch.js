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
    this.name = "ValidationError";
    this.field = field;
    this.value = value;
  }
}

class ApiError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.name = "ApiError";
    this.statusCode = statusCode;
  }
}

// Validate Function
function validate_user(user) {
  try {
    if (!user.email || !user.email.includes("@")) {
      throw new ValidationError("email", user.email);
    }

    if (!user.age || user.age < 0 || user.age > 120) {
      throw new ValidationError("age", user.age);
    }

    if (!user.password || user.password.length < 6) {
      throw new ValidationError("password", user.password);
    }

    console.log("✅ User validation successful!");
    return true;

  } catch (error) {
    if (error instanceof ValidationError) {
      console.error(`❌ Validation error - Field: ${error.field}, Value: ${error.value}`);
      console.error(`Message: ${error.message}`);
    } else {
      console.error("❌ Unexpected error:", error.message);
    }
    return false;
  }
}

// Simulate an API Request 
function api_request(endpoint, data, shouldSucceed = true) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldSucceed) {
        resolve({ status: 200, data: { message: "Request successful", payload: data } });
      } else {
        reject(new ApiError("Server failed to process request", 500));
      }
    }, 1000);
  });
}

// Register User Flow
async function register_user(user, retryCount = 0, maxRetries = 3) {
  if (!validate_user(user)) return; // stop if validation fails

  try {
    const response = await api_request("/register", user, false); // simulate failure
    console.log("✅ API Response:", response.data);

  } catch (err) {
    if (err instanceof ApiError && retryCount < maxRetries) {
      console.error(`❌ API Error (status ${err.statusCode}):`, err.message);
      console.log(`⚠️ Retrying in 2 seconds... attempt ${retryCount + 1}/${maxRetries}`);
      setTimeout(() => register_user(user, retryCount + 1, maxRetries), 2000);
    } else if (err instanceof ApiError) {
      console.error("❌ Max retries reached. Request failed permanently.");
    } else {
      console.error("❌ Unknown error:", err.message);
    }
  }
}


validate_user({ email: "john@example.com", age: 25, password: "strongPass" }); // ✅ Valid
validate_user({ email: "invalid-email", age: 25, password: "abcdef" });       // ❌ Invalid email
validate_user({ email: "john@example.com", age: -5, password: "abcdef" });    // ❌ Invalid age
validate_user({ email: "john@example.com", age: 25, password: "123" });       // ❌ Invalid password

// Trigger API call (valid user)
register_user({ email: "john@example.com", age: 25, password: "securePass" });
