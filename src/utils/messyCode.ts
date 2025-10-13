/**
 * This file intentionally has many formatting and style issues
 * Used for demonstrating Workflow #2 - Code Cleanup
 */

// Unused imports that should be removed
import * as path from 'path';
import { readFile } from 'fs';
import * as crypto from 'crypto';

// Inconsistent quotes
const message1 = "This uses double quotes";
const message2 = 'This uses single quotes';

// Console.logs that should be removed
console.log("Debug: Starting application");
console.log('Another console statement');

// Inconsistent spacing and formatting
function   calculateSum   (a:number,b:number):number{
return a+b;
}

// Missing semicolons
const value1 = 42
const value2 = "test"
let value3 = true

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

// var instead of let/const
var oldStyleVariable = "should use const";
var anotherVar = 123;

// Unused variables
const unusedVariable = "I'm never used";
const anotherUnused = { key: "value" };

// Inconsistent object spacing
const obj1 = {key1:"value1",key2:"value2"};
const obj2 = { key1: "value1" , key2 : "value2" };

// Inconsistent array spacing
const arr1 = [1,2,3,4,5];
const arr2 = [ 1 , 2 , 3 , 4 , 5 ];

// Functions with any type
function processAny(input: any): any {
    return input;
}

// Template literals not used where they should be
const name = "User";
const greeting = "Hello, " + name + "!";

// Arrow function inconsistency
const arrow1 = (x) => x * 2;
const arrow2 = x=> { return x * 2 };

// Trailing commas inconsistency
const config = {
    option1: true,
    option2: false,
    option3: "maybe",  // Has trailing comma
}

const config2 = {
    option1: true,
    option2: false,
    option3: "maybe"  // No trailing comma
}

// Mixed async patterns (could be improved)
function fetchDataCallback(callback: Function) {
    setTimeout(() => {
        callback("data");
    }, 1000);
}

// More console.logs to clean up
console.warn("This is a warning");
console.error("This is an error");
console.debug("Debug info");

// Inconsistent exports
export default calculateSum;
export { processData, processAny };