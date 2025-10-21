/**
 * Test suite for math utilities
 * Complete test coverage with edge cases
 */

import { add, subtract, multiply, divide, factorial, isPrime, average, findMax } from '../src/utils/math';

describe('Math Utilities', () => {
  describe('add', () => {
    it('should add two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    it('should add negative numbers', () => {
      expect(add(-5, -3)).toBe(-8);
    });

    it('should add positive and negative numbers', () => {
      expect(add(10, -5)).toBe(5);
    });

    it('should handle zero', () => {
      expect(add(0, 5)).toBe(5);
      expect(add(5, 0)).toBe(5);
      expect(add(0, 0)).toBe(0);
    });

    it('should handle decimal numbers', () => {
      expect(add(2.5, 3.5)).toBe(6);
      expect(add(0.1, 0.2)).toBeCloseTo(0.3);
    });
  });

  describe('subtract', () => {
    it('should subtract two numbers', () => {
      expect(subtract(5, 3)).toBe(2);
    });

    it('should handle negative results', () => {
      expect(subtract(3, 5)).toBe(-2);
    });

    it('should subtract negative numbers', () => {
      expect(subtract(-5, -3)).toBe(-2);
      expect(subtract(5, -3)).toBe(8);
    });

    it('should handle zero', () => {
      expect(subtract(5, 0)).toBe(5);
      expect(subtract(0, 5)).toBe(-5);
      expect(subtract(0, 0)).toBe(0);
    });

    it('should handle decimal numbers', () => {
      expect(subtract(5.5, 2.5)).toBe(3);
    });
  });

  describe('multiply', () => {
    it('should multiply two positive numbers', () => {
      expect(multiply(3, 4)).toBe(12);
    });

    it('should multiply negative numbers', () => {
      expect(multiply(-3, -4)).toBe(12);
      expect(multiply(-3, 4)).toBe(-12);
      expect(multiply(3, -4)).toBe(-12);
    });

    it('should handle zero', () => {
      expect(multiply(5, 0)).toBe(0);
      expect(multiply(0, 5)).toBe(0);
      expect(multiply(0, 0)).toBe(0);
    });

    it('should handle decimal numbers', () => {
      expect(multiply(2.5, 4)).toBe(10);
      expect(multiply(0.5, 0.5)).toBe(0.25);
    });

    it('should handle multiplication by one', () => {
      expect(multiply(5, 1)).toBe(5);
      expect(multiply(1, 5)).toBe(5);
    });
  });

  describe('divide', () => {
    it('should divide two numbers', () => {
      expect(divide(10, 2)).toBe(5);
    });

    it('should handle division by zero', () => {
      expect(divide(10, 0)).toBe(Infinity);
      expect(divide(-10, 0)).toBe(-Infinity);
      expect(divide(0, 0)).toBe(NaN);
    });

    it('should handle negative numbers', () => {
      expect(divide(-10, 2)).toBe(-5);
      expect(divide(10, -2)).toBe(-5);
      expect(divide(-10, -2)).toBe(5);
    });

    it('should handle decimal results', () => {
      expect(divide(5, 2)).toBe(2.5);
      expect(divide(1, 3)).toBeCloseTo(0.333, 3);
    });

    it('should handle division by one', () => {
      expect(divide(5, 1)).toBe(5);
    });

    it('should handle zero dividend', () => {
      expect(divide(0, 5)).toBe(0);
    });
  });

  describe('factorial', () => {
    it('should calculate factorial of 0', () => {
      expect(factorial(0)).toBe(1);
    });

    it('should calculate factorial of 1', () => {
      expect(factorial(1)).toBe(1);
    });

    it('should calculate factorial of positive numbers', () => {
      expect(factorial(5)).toBe(120);
      expect(factorial(3)).toBe(6);
      expect(factorial(4)).toBe(24);
      expect(factorial(10)).toBe(3628800);
    });

    it('should handle negative numbers', () => {
      // Factorial is undefined for negative numbers
      // The current implementation will cause stack overflow
      // This test documents the expected behavior
      expect(() => factorial(-1)).toThrow();
    });
  });

  describe('isPrime', () => {
    it('should return true for prime numbers', () => {
      expect(isPrime(2)).toBe(true);
      expect(isPrime(3)).toBe(true);
      expect(isPrime(5)).toBe(true);
      expect(isPrime(7)).toBe(true);
      expect(isPrime(11)).toBe(true);
      expect(isPrime(13)).toBe(true);
      expect(isPrime(97)).toBe(true);
    });

    it('should return false for non-prime numbers', () => {
      expect(isPrime(4)).toBe(false);
      expect(isPrime(6)).toBe(false);
      expect(isPrime(8)).toBe(false);
      expect(isPrime(9)).toBe(false);
      expect(isPrime(10)).toBe(false);
      expect(isPrime(100)).toBe(false);
    });

    it('should return false for numbers less than 2', () => {
      expect(isPrime(1)).toBe(false);
      expect(isPrime(0)).toBe(false);
      expect(isPrime(-1)).toBe(false);
      expect(isPrime(-5)).toBe(false);
    });

    it('should handle edge case of 2', () => {
      expect(isPrime(2)).toBe(true);
    });
  });

  describe('average', () => {
    it('should calculate average of positive numbers', () => {
      expect(average([1, 2, 3, 4, 5])).toBe(3);
      expect(average([10, 20, 30])).toBe(20);
    });

    it('should handle negative numbers', () => {
      expect(average([-1, -2, -3])).toBe(-2);
      expect(average([-5, 5])).toBe(0);
    });

    it('should handle single element array', () => {
      expect(average([5])).toBe(5);
    });

    it('should handle decimal numbers', () => {
      expect(average([1.5, 2.5, 3.5])).toBeCloseTo(2.5);
    });

    it('should handle empty array', () => {
      // Empty array causes division by zero, resulting in NaN
      expect(average([])).toBe(NaN);
    });

    it('should handle array with zeros', () => {
      expect(average([0, 0, 0])).toBe(0);
      expect(average([0, 5, 10])).toBe(5);
    });
  });

  describe('findMax', () => {
    it('should find maximum in positive numbers', () => {
      expect(findMax([1, 2, 3, 4, 5])).toBe(5);
      expect(findMax([10, 5, 20, 15])).toBe(20);
    });

    it('should find maximum in negative numbers', () => {
      expect(findMax([-5, -2, -10, -1])).toBe(-1);
    });

    it('should find maximum in mixed numbers', () => {
      expect(findMax([-5, 0, 5, -10, 10])).toBe(10);
    });

    it('should handle single element array', () => {
      expect(findMax([5])).toBe(5);
      expect(findMax([-5])).toBe(-5);
    });

    it('should handle decimal numbers', () => {
      expect(findMax([1.5, 2.7, 1.9])).toBe(2.7);
    });

    it('should handle empty array', () => {
      // Math.max with empty array returns -Infinity
      expect(findMax([])).toBe(-Infinity);
    });

    it('should handle array with duplicates', () => {
      expect(findMax([5, 5, 5])).toBe(5);
      expect(findMax([1, 10, 10, 5])).toBe(10);
    });

    it('should handle zero', () => {
      expect(findMax([0, -5, -10])).toBe(0);
      expect(findMax([0, 0, 0])).toBe(0);
    });
  });
});