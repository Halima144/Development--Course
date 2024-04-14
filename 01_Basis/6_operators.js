// Nullish Coalescing Operator (??):  (for null and undefined)
const defaultValue = 'Default Value';

let someValue = null;
let result = someValue ?? defaultValue;
console.log(result); // Output: Default Value

someValue = 'Some Actual Value';
result = someValue ?? defaultValue;
console.log(result); // Output: Some Actual Value
// Ternary Operator (? :): 
const age = 20;
const allowed = age >= 18 ? 'Allowed' : 'Not Allowed';
console.log(allowed); // Output: Allowed
