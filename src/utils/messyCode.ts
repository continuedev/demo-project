/**
 * This file intentionally has many formatting and style issues
 * Used for demonstrating Workflow #2 - Code Cleanup
 */





// Console.logs that should be removed
console.log("Debug: Starting application");
console.log('Another console statement');

// Inconsistent spacing and formatting
function   calculateSum   (a:number,b:number):number{
return a+b;
}



// Inconsistent indentation
function processData(data: any) {
if (data) {
        // Wrong indentation
        const result = data.toString()
  // More wrong indentation
  return result.toUpperCase()
    } else {
            return null
}
}









// Functions with any type
function processAny(input: any): any {
    return input;
}









// More console.logs to clean up
console.warn("This is a warning");
console.error("This is an error");
console.debug("Debug info");

// Inconsistent exports
export default calculateSum;
export { processData, processAny };