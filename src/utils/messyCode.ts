/**
 * This file intentionally has many formatting and style issues
 * Used for demonstrating Workflow #2 - Code Cleanup
 */

// Inconsistent spacing and formatting
function calculateSum(a: number, b: number): number {
  return a + b;
}

// Inconsistent indentation
function processData(data: string | null): string | null {
  if (data) {
    // Wrong indentation
    const result = data.toString();
    // More wrong indentation
    return result.toUpperCase();
  } else {
    return null;
  }
}

// Functions with any type
function processAny(input: string): string {
  return input;
}

// Inconsistent exports
export default calculateSum;
export { processData, processAny };
