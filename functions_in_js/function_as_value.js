function add (x, y) {
    return x + y;
}

const multiply = (x, y) => {
    return x * y;
}

function compute(a, b, c, func_arg) {
    const result_1 = func_arg(a, b);
    const result_2 = func_arg(result_1, c);
    return result_2;
}

// Usage
console.log(compute(2, 3, 4, add));
console.log(compute(2, 3, 4, multiply));

