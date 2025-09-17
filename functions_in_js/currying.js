/* Currying is a technique in functional programming that is used to break down a function that takes multiples arguments into a 
family of nested functions that take a single argument each. This makes the program more reusable and broken down than a single
function. */
// Ordinary function that takes multiple arguments
function add(a, b, c) {
    return a + b + c;
}
console.log(add(3, 4, 5));

// Currying
function add_1(a) {
    return (b) => {
        return (c) => {
            return a + b + c;
        }
    }
}
// Using the curry function
// 1.  easiest
console.log("Easiest call():", add_1(4)(6)(8));

// 2. Step-by-step assignment (I think this is better for explaining the process)
const step_1 = add_1(4);        // Returns function that expects b
const step_2 = step_1(6);        // Returns function that expects c
const result_1 = step_2(8);      // Returns final result
console.log("Step by step:", result_1);

// 3. Partial application with variable names that describe them
const add_four_to = add_1(4);    // Partially applied function
const add_four_and_six_to = add_four_to(6);  // Further partially applied
console.log("Partial application:", add_four_and_six_to(8));

// 4. Storing intermediate functions for reuse
const add_twenty = add_1(20);      // Add 20 to whatever comes next
console.log("Add 20 + 2 + 3:", add_twenty(2)(3));
console.log("Add 20 + 5 + 7:", add_twenty(5)(7));

// 1. PARTIAL APPLICATION & REUSABILITY

// Curried function for calculating discounts
const calculate_price = (tax_rate) => (discount) => (originalPrice) => {
  const after_discount = originalPrice - (originalPrice * discount);
  return after_discount + (after_discount * tax_rate);
};

// Create reusable functions for different scenarios
const california_price = calculate_price(0.0875); // 8.75% tax rate
const senior_discount = california_price(0.15);   // 15% senior discount
const student_discount = california_price(0.10);  // 10% student discount

console.log("Partial Application & Reusability Example:");
console.log("Senior price for $100 item:", senior_discount(100));
console.log("Student price for $100 item:", student_discount(100));
console.log("Senior price for $50 item:", senior_discount(50));

// 2. FUNCTION COMPOSITION
// Curried utility functions
const multiply = (x) => (y) => x * y;
const add_util = (x) => (y) => x + y;
const subtract = (x) => (y) => y - x; // Note: y - x for proper composition

// Create specialized functions
const double = multiply(2);
const triple = multiply(3);
const add_ten = add_util(10);
const subtract_five = subtract(5);

console.log("\nFunction Composition Example:");
const numbers = [1, 2, 3, 4, 5];

// Easy composition with curried functions
const process_numbers = numbers
  .map(double)        // Double each number
  .map(add_ten)        // Add 10 to each
  .map(subtract_five); // Subtract 5 from each

console.log("Original:", numbers);
console.log("Processed:", process_numbers);

// 3. EVENT HANDLING & CALLBACKS
// Curried event handler creator
const create_event_handler = (event_type) => (element_id) => (callback) => {
  // In a real scenario, this would attach to DOM elements
  console.log(`Attached ${event_type} handler to ${element_id}`);
  return callback; // Return for demonstration
};

// Create specialized handlers
const on_click = create_event_handler('click');
const on_submit = create_event_handler('submit');

// Easy to create multiple handlers
const button_handler = on_click('submit-btn');
const form_handler = on_submit('user-form');

console.log("\nEvent Handling Example:");
console.log("Button handler created:", typeof button_handler);
console.log("Form handler created:", typeof form_handler);

// 4. CONFIGURATION & SETTINGS
// Curried logger function
const create_logger = (level) => (module) => (message) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] [${level}] [${module}] ${message}`);
};

// Create loggers for different levels and modules
const debug_logger = create_logger('DEBUG');
const error_logger = create_logger('ERROR');

const user_debug_log = debug_logger('User Module');
const auth_error_og = error_logger('Auth Module');

console.log("\nLogging Example:");
user_debug_log("User logged in successfully");
auth_error_og("Invalid credentials provided");

// 5. ARRAY PROCESSING & FILTERING
// Curried filter functions
const filter_by = (property) => (value) => (array) => {
  return array.filter(item => item[property] === value);
};

const filter_by_age = filter_by('age');
const filter_by_city = filter_by('city');

const users = [
  { name: 'Ade', age: 25, city: 'Akure' },
  { name: 'Junaid', age: 30, city: 'Abuja' },
  { name: 'Lateef', age: 25, city: 'Lagos' },
  { name: 'John', age: 30, city: 'Lagos' }
];

// Create specialized filters
const age_25_filter = filter_by_age(25);
const abj_filter = filter_by_city('Abuja');

console.log("\nFiltering Example:");
console.log("Users aged 25:", age_25_filter(users));
console.log("Users in Abuja:", abj_filter(users));


// 6. API REQUEST 
// Curried API request builder
const build_request = (base_url) => (endpoint) => (method) => (data) => {
  return {
    url: `${base_url}/${endpoint}`,
    method: method,
    body: data ? JSON.stringify(data) : null
  };
};

// Create API builders for different services
const api_V1 = build_request('https://api.example.com/v1');
const users_api = api_V1('users');

// Create specialized Methods request builders
const get_users = users_api('GET');
const post_user = users_api('POST');

console.log("\nAPI Requests Example:");
console.log("GET request:", get_users(null));
console.log("POST request:", post_user({ name: 'John', age: 28 }));

// 7. VALIDATION CHAINS
// Curried validation functions
const validate = (rule) => (error_message) => (value) => {
  if (rule(value)) {
    return { valid: true, value };
  } else {
    return { valid: false, error: error_message };
  }
};

// Create validation rules
const min_length = (min) => (str) => str.length >= min;
const max_length = (max) => (str) => str.length <= max;
const is_email_valid = (str) => str.includes('@');

// Create validators
const validate_min_length = validate(min_length(3))("Too short");
const validate_max_length = validate(max_length(50))("Too long");
const validate_email = validate(is_email_valid)("Invalid email");

console.log("\nValidation Example:");
console.log("Short string:", validate_min_length("hi"));
console.log("Valid string:", validate_min_length("hello"));
console.log("Email test:", validate_email("user@example.com"));


// COMPARISON: CURRIED VS NON-CURRIED
console.log("\nCurried vs Non-curried example:");
// Non-curried approach (less flexible)
function calculate_tax(price, tax_rate, discount) {
  const after_discount = price - (price * discount);
  return after_discount + (after_discount * tax_rate);
}

// You have to pass all parameters every time
console.log("Non-curried:", calculate_tax(100, 0.0875, 0.15));
console.log("Non-curried:", calculate_tax(50, 0.0875, 0.15));

// With currying, you create reusable functions once
console.log("Curried:", senior_discount(100));
console.log("Curried:", senior_discount(50));