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
