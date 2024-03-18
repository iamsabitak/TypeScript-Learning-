"use strict";
// Tuples types in ts
const data = ["Hey", "Hello", 1, 2];
data.push(true);
console.log(data);
const a = 10;
const b = "asas";
const c = true;
console.log(a, b, c);
//void in typescript
// Return Type
function multiply(a, b) {
    return a * b;
}
console.log(multiply(2, 2));
//Void Return Type
function printHello() {
    console.log("Hello!");
}
printHello();
//Unknown type in ts
let user;
(user = "mario"), (user = 12);
let item;
if (typeof user === "string") {
    item = user;
}
//never type in ts
// never effectively throws an error whenever it is defined.
// function apiError(api: string, code: number): never {
//   throw { api, code };
// }
// console.log(apiError("server side error", 400));
//type casting in ts
let userName = "Peter";
console.log(userName.length); //by using as
console.log(userName.length); //by using <>
