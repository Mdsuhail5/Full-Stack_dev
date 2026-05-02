/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/


class Calculator {
  constructor() {
    // Initialize result to 0 (no parameters needed)
    this.result = 0;
  }

  add(a) {
    // Add 'a' to the current result
    this.result += a;
    return this; // Return this for method chaining (optional)
  }

  subtract(a) {
    // Subtract 'a' from the current result
    this.result -= a;
    return this;
  }

  multiply(a) {
    // Multiply current result by 'a'
    this.result *= a;
    return this;
  }

  divide(a) {
    // Divide current result by 'a'
    if (a === 0) {
      throw new Error("Division by zero is not allowed");
    }
    this.result /= a;
    return this;
  }

  clear() {
    // Reset result to 0
    this.result = 0;
    return this;
  }

  getResult() {
    // Return the current result
    return this.result;
  }

  calculate(expression) {
    // This is the complex part - will implement step by step
    try {
      // Remove spaces and validate the expression
      const cleanExpression = expression.replace(/\s+/g, '');

      // For now, let's use eval (not recommended for production)
      // But we'll validate first to make it safer
      if (!/^[0-9+\-*/().]+$/.test(cleanExpression)) {
        throw new Error("Invalid characters in expression");
      }

      this.result = eval(cleanExpression);
      return this.result;
    } catch (error) {
      throw new Error("Invalid expression: " + error.message);
    }
  }
}
//module.exports = Calculator;

const calc = new Calculator();
console.log(calc.add(3))

console.log(calc.multiply(3))
console.log(calc.subtract(3))
console.log(calc.divide(3))
console.log(calc.getResult())
console.log(calc.clear())