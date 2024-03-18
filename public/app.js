"use strict";
//  export {}; // reslove duplicate identifier issue
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
class App {
    name() {
        const greet = "Hello Sabita";
        console.log("Class =", greet);
    }
}
exports.default = App;
let a1 = new App();
a1.name();
//globally install typescript ==> sudo i -g typescript
// learn about watch => tsc filename --watch
//learn how to reslove duplicate identifier issue => export {}
//learn how to run without browser
//learn why it converted let into var ==> bcoz let doesn't support in all browser but var do
//Types in ts
// int a = 10 ==> c
// let a:number = 10 ==>ts
// let a: number = "error"; will throw an error
var a = 100;
console.warn("types", a);
// Datatypes in ts
//if there is 1 numeric it will not throw an error
// const data: string = ["sabu", "peter", "mario", 100];
var data = ["sabu", "peter", "mario"];
data.push("hello");
//but if the type is declared as string it will throw an error
// data.push(100);
console.log("datatypes", data);
//Typed Object in ts
//if type any is used we can use everything string,number,boolean or it can be any type
let user = {
    name: "Sabu",
    age: 19,
    address: "Koteshor",
};
user.name = 10;
console.log("typed onject", user);
//Union types == more than one types of value can be assigned
// what if we want to assign only two types of value we can use union
var foo = "foo";
foo = true;
foo = 10;
console.log(foo);
var userName = {
    name: "sabu",
    age: 10,
    greet: function () {
        return "sabita khadka";
        // return 10; throw an error
    },
};
console.log(userName.greet());
//functions in ts
function hello(aa, bb) {
    //   return "hello"; // throw an error it should return number only
    //   return 11; // throw an error it should return string only
    return bb ? aa + bb : aa;
}
var x = hello(2);
console.log(x);
//classes in ts
class Name {
    constructor() {
        this.name = "sabu";
        console.log("construct called");
    }
    namee() {
        return this.name;
    }
}
var ag = new Name();
console.log(ag.namee());
//Inheritance in ts
class Parent {
    setName(name) {
        this.name = name;
    }
}
class Child extends Parent {
    getName() {
        return this.name;
    }
}
var c1 = new Child();
c1.setName("niru");
console.log(c1.getName());
//modules
const teacher_1 = __importDefault(require("./teacher"));
const student_1 = __importDefault(require("./student"));
let teacher = new teacher_1.default();
console.log(teacher.data);
let student = new student_1.default();
console.log(student.data);
//Generics in ts
//help make more generalized methods which more accurately represent the types used and returned
function users(data) {
    return data;
}
console.log(users({ name: "sabu", age: 19 }));
// enums in ts
// By default, enums will initialize the first value to 0 and add 1 to each additional value
var Days;
(function (Days) {
    Days[Days["sun"] = 0] = "sun";
    Days[Days["mon"] = 1] = "mon";
    Days[Days["tue"] = 2] = "tue";
    Days[Days["wed"] = 3] = "wed";
    Days[Days["thu"] = 4] = "thu";
    Days[Days["fri"] = 5] = "fri";
    Days[Days["sat"] = 6] = "sat";
})(Days || (Days = {}));
let whichDay;
whichDay = Days.fri;
console.log(whichDay);
//symbols in ts
// let s1 = Symbol();
// // console.log(s1);
// // const object = {
// //   [s1]: "Hello",
// // };
// // console.log(object[s1]);
// class Symbol1 {
//   [s1]() {
//     return "Some Data";
//   }
// }
// let d1 = new Symbol1();
// console.log(d1[s1]());
