/**
 * Math utility functions
 * This file needs unit tests for Workflow #4
 * Currently has minimal or no test coverage
 */

/**
 * Add two numbers together
 * @param a First number
 * @param b Second number
 * @returns Sum of a and b
 */
export function add(a: number, b: number): number {
  return a + b;
}

/**
 * Subtract b from a
 * @param a First number
 * @param b Second number
 * @returns Difference of a and b
 */
export function subtract(a: number, b: number): number {
  return a - b;
}

/**
 * Multiply two numbers
 * @param a First number
 * @param b Second number
 * @returns Product of a and b
 */
export function multiply(a: number, b: number): number {
  return a * b;
}

/**
 * Divide a by b
 * NOTE: This function has a potential bug - no division by zero check!
 * @param a Dividend
 * @param b Divisor
 * @returns Quotient of a and b
 */
export function divide(a: number, b: number): number {
  // BUG: No check for division by zero
  return a / b;
}

/**
 * Calculate the factorial of a number
 * @param n The number to calculate factorial for
 * @returns Factorial of n
 * @throws Error if n is negative
 */
export function factorial(n: number): number {
  if (n < 0) {
    throw new Error('Factorial is not defined for negative numbers');
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

/**
 * Check if a number is prime
 * @param n Number to check
 * @returns True if prime, false otherwise
 */
export function isPrime(n: number): boolean {
  // Edge case: numbers less than 2 are not prime
  if (n < 2) return false;
  
  // Check for divisibility up to square root of n
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  
  return true;
}

/**
 * Calculate the average of an array of numbers
 * @param numbers Array of numbers
 * @returns Average value
 */
export function average(numbers: number[]): number {
  // BUG: No check for empty array
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
}

/**
 * Find the maximum value in an array
 * @param numbers Array of numbers
 * @returns Maximum value
 */
export function findMax(numbers: number[]): number {
  // BUG: What happens with empty array?
  return Math.max(...numbers);
}