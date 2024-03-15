"use strict";
//  export {}; // reslove duplicate identifier issue
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.name = function () {
        var greet = "Hello Sabita";
        console.log("Class =", greet);
    };
    return App;
}());
exports.default = App;
var a1 = new App();
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
var user = {
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
var Name = /** @class */ (function () {
    function Name() {
        this.name = "sabu";
        console.log("construct called");
    }
    Name.prototype.namee = function () {
        return this.name;
    };
    return Name;
}());
var ag = new Name();
console.log(ag.namee());
//Inheritance in ts
var Parent = /** @class */ (function () {
    function Parent() {
    }
    Parent.prototype.setName = function (name) {
        this.name = name;
    };
    return Parent;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child.prototype.getName = function () {
        return this.name;
    };
    return Child;
}(Parent));
var c1 = new Child();
c1.setName("niru");
console.log(c1.getName());
//modules
var teacher_1 = require("./teacher");
var student_1 = require("./student");
var teacher = new teacher_1.default();
console.log(teacher.data);
var student = new student_1.default();
console.log(student.data);
//Generics in ts
//help make more generalized methods which more accurately represent the types used and returned
function users(data) {
    return data;
}
console.log(users({ name: "sabu", age: 19 }));
