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

//Unknown type in ts
let user: unknown;
(user = "mario"), (user = 12);
let item: string;
if (typeof user === "string") {
  item = user;
}

//never type in ts
// never effectively throws an error whenever it is defined.
function apiError(api, code): never {
  throw { api, code };
}
console.log(apiError("server side error", 400));

//
