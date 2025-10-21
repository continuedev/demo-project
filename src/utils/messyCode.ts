/**
 * This file intentionally has many formatting and style issues
 * Used for demonstrating Workflow #2 - Code Cleanup
 */

// Unused imports that should be removed

// Inconsistent quotes

// Inconsistent spacing and formatting
function calculateSum(a: number, b: number): number {
  return a + b;
}

// Missing semicolons

// Inconsistent indentation
function processData(data: unknown) {
  if (data) {
    // Wrong indentation
    const result = data.toString();
    // More wrong indentation
    return result.toUpperCase();
  } else {
    return null;
  }
}

// var instead of let/const

// Unused variables

// Inconsistent object spacing

// Inconsistent array spacing

// Functions with any type
function processAny(input: unknown): unknown {
  return input;
}

// Template literals not used where they should be

// Arrow function inconsistency

// Trailing commas inconsistency

// Mixed async patterns (could be improved)
function _fetchDataCallback(callback: (data: string) => void) {
  setTimeout(() => {
    callback('data');
  }, 1000);
}

// More console.logs to clean up

// Inconsistent exports
export default calculateSum;
export { processData, processAny };