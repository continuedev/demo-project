/**
 * Test suite for math utilities
 * This file has incomplete tests for Workflow #4
 * Many functions are not tested, and edge cases are missing
 */

import { add, subtract, multiply, divide, factorial, isPrime, average, findMax } from '../src/utils/math';

describe('Math Utilities', () => {
  // Basic tests for add function
  describe('add', () => {
    it('should add two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    // Missing: negative numbers, zero, decimals
  });

  // Only one test for subtract
  describe('subtract', () => {
    it('should subtract two numbers', () => {
      expect(subtract(5, 3)).toBe(2);
    });
    
    // Missing: negative results, zero cases
  });

  // Tests for multiply function
  describe('multiply', () => {
    it('should multiply two positive numbers', () => {
      expect(multiply(3, 4)).toBe(12);
    });

    it('should multiply negative numbers', () => {
      expect(multiply(-3, 4)).toBe(-12);
      expect(multiply(-3, -4)).toBe(12);
    });

    it('should handle multiplication by zero', () => {
      expect(multiply(5, 0)).toBe(0);
      expect(multiply(0, 5)).toBe(0);
    });

    it('should handle multiplication by one', () => {
      expect(multiply(5, 1)).toBe(5);
      expect(multiply(1, 5)).toBe(5);
    });

    it('should handle decimal numbers', () => {
      expect(multiply(2.5, 4)).toBe(10);
      expect(multiply(1.5, 1.5)).toBe(2.25);
    });
  });

  // Incomplete tests for divide
  describe('divide', () => {
    it('should divide two numbers', () => {
      expect(divide(10, 2)).toBe(5);
    });
    
    // BUG: Missing test for division by zero!
    // This would catch the bug in the divide function
  });

  // Tests for factorial
  describe('factorial', () => {
    it('should return 1 for factorial of 0', () => {
      expect(factorial(0)).toBe(1);
    });

    it('should return 1 for factorial of 1', () => {
      expect(factorial(1)).toBe(1);
    });

    it('should calculate factorial for small numbers', () => {
      expect(factorial(5)).toBe(120);
      expect(factorial(6)).toBe(720);
    });

    it('should calculate factorial for larger numbers', () => {
      expect(factorial(10)).toBe(3628800);
    });

    it('should handle negative numbers gracefully', () => {
      // The current implementation will cause stack overflow for negative numbers
      // This test documents the current behavior - ideally it should throw an error
      expect(() => factorial(-1)).toThrow();
    });
  });

  // Minimal tests for isPrime
  describe('isPrime', () => {
    it('should return true for 7', () => {
      expect(isPrime(7)).toBe(true);
    });
    
    // Missing: test for 1, 2, negative numbers, non-prime numbers
  });

  // Tests for average function
  describe('average', () => {
    it('should calculate average of positive numbers', () => {
      expect(average([1, 2, 3, 4, 5])).toBe(3);
    });

    it('should calculate average of negative numbers', () => {
      expect(average([-1, -2, -3])).toBe(-2);
    });

    it('should calculate average of mixed positive and negative numbers', () => {
      expect(average([10, -5, 5, -10])).toBe(0);
    });

    it('should handle single element array', () => {
      expect(average([42])).toBe(42);
    });

    it('should handle decimal numbers', () => {
      expect(average([1.5, 2.5, 3])).toBeCloseTo(2.333, 2);
    });

    it('should handle empty array', () => {
      // This will return NaN with current implementation (bug)
      expect(average([])).toBeNaN();
    });
  });

  // Tests for findMax function
  describe('findMax', () => {
    it('should find maximum in array of positive numbers', () => {
      expect(findMax([1, 5, 3, 9, 2])).toBe(9);
    });

    it('should find maximum in array of negative numbers', () => {
      expect(findMax([-1, -5, -3, -2])).toBe(-1);
    });

    it('should find maximum in array with mixed positive and negative numbers', () => {
      expect(findMax([-10, 5, -3, 8, 0])).toBe(8);
    });

    it('should handle single element array', () => {
      expect(findMax([42])).toBe(42);
    });

    it('should handle array with duplicate maximum values', () => {
      expect(findMax([5, 10, 3, 10, 2])).toBe(10);
    });

    it('should handle decimal numbers', () => {
      expect(findMax([1.5, 2.8, 2.2, 1.1])).toBe(2.8);
    });

    it('should handle empty array', () => {
      // This will return -Infinity with current implementation (bug)
      expect(findMax([])).toBe(-Infinity);
    });
  });
});