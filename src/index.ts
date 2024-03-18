// Tuples types in ts
const data: [string, string, number, number, boolean?] = ["Hey", "Hello", 1, 2];
data.push(true);
console.log(data);

// TypeScript Type Aliases
type cosType = boolean | string | number;
const a: cosType = 10;
const b: cosType = "asas";
const c: cosType = true;
console.log(a, b, c);

//void in typescript
// Return Type
function multiply(a: number, b: number) {
  return a * b;
}

console.log(multiply(2, 2));

//Void Return Type
function printHello(): void {
  console.log("Hello!");
}
printHello();
