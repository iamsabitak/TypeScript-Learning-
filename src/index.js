// Tuples types in ts
var data = ["Hey", "Hello", 1, 2];
data.push(true);
console.log(data);
var a = 10;
var b = "asas";
var c = true;
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
var user;
(user = "mario"), (user = 12);
var item;
if (typeof user === "string") {
    item = user;
}
//never type in ts
// never effectively throws an error whenever it is defined.
function apiError(api, code) {
    throw { api: api, code: code };
}
console.log(apiError("server side error", 400));
//
