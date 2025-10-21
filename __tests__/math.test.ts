/**
 * Test suite for math utilities
 * This file has incomplete tests for Workflow #4
 * Many functions are not tested, and edge cases are missing
 */

import { add, subtract, divide, isPrime } from '../src/utils/math';

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

  // No tests for multiply function!
  describe.skip('multiply', () => {
    // TODO: Add tests for multiply function
  });

  // Incomplete tests for divide
  describe('divide', () => {
    it('should divide two numbers', () => {
      expect(divide(10, 2)).toBe(5);
    });

    // BUG: Missing test for division by zero!
    // This would catch the bug in the divide function
  });

  // No tests for factorial!
  describe.skip('factorial', () => {
    // TODO: Add tests for factorial
    // Should test: 0!, 1!, regular numbers, negative numbers
  });

  // Minimal tests for isPrime
  describe('isPrime', () => {
    it('should return true for 7', () => {
      expect(isPrime(7)).toBe(true);
    });

    // Missing: test for 1, 2, negative numbers, non-prime numbers
  });

  // No tests for average function!
  // This function has a bug with empty arrays that tests would catch

  // No tests for findMax function!
  // This function also has issues with empty arrays
});
