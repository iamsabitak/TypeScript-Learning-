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
var UserUtils;
(function (UserUtils) {
    var Parents = /** @class */ (function () {
        function Parents() {
        }
        Parents.prototype.setAge = function (age) {
            this.age = age;
        };
        return Parents;
    }());
    UserUtils.Parents = Parents;
})(UserUtils || (UserUtils = {}));
// //  export {}; // reslove duplicate identifier issue
// class App {
//   name() {
//     const greet = "Hello Sabita";
//     console.log("Class =", greet);
//   }
// }
// let a1 = new App();
// a1.name();
// //globally install typescript ==> sudo i -g typescript
// // learn about watch => tsc filename --watch
// //learn how to reslove duplicate identifier issue => export {}
// //learn how to run without browser
// //learn why it converted let into var ==> bcoz let doesn't support in all browser but var do
// //Types in ts
// // int a = 10 ==> c
// // let a:number = 10 ==>ts
// // let a: number = "error"; will throw an error
// var a: number = 100;
// console.warn("types", a);
// // Datatypes in ts
// //if there is 1 numeric it will not throw an error
// // const data: string = ["sabu", "peter", "mario", 100];
// var data: string[] = ["sabu", "peter", "mario"];
// data.push("hello");
// //but if the type is declared as string it will throw an error
// // data.push(100);
// console.log("datatypes", data);
// //Typed Object in ts
// //if type any is used we can use everything string,number,boolean or it can be any type
// let user: any = {
//   name: "Sabu",
//   age: 19,
//   address: "Koteshor",
// };
// user.name = 10;
// console.log("typed onject", user);
// //Union types == more than one types of value can be assigned
// // what if we want to assign only two types of value we can use union
// var foo: string | boolean | number = "foo";
// foo = true;
// foo = 10;
// console.log(foo);
// //interface
// // interface ==> allows us to define the structure or shape of an object and specify the properties and methods that an object has or should have.
// interface userType {
//   name: string;
//   age: number;
//   greet: () => string;
// }
// var userName: userType = {
//   name: "sabu",
//   age: 10,
//   greet: function () {
//     return "sabita khadka";
//     // return 10; throw an error
//   },
// };
// console.log(userName.greet());
// //functions in ts
// function hello(aa: number, bb?: number): number {
//   //   return "hello"; // throw an error it should return number only
//   //   return 11; // throw an error it should return string only
//   return bb ? aa + bb : aa;
// }
// var x = hello(2);
// console.log(x);
// //classes in ts
// class Name {
//   name: string = "sabu";
//   constructor() {
//     console.log("construct called");
//   }
//   namee(): string {
//     return this.name;
//   }
// }
// var ag = new Name();
// console.log(ag.namee());
// //Inheritance in ts
// class Parent {
//   name: string;
//   setName(name): void {
//     this.name = name;
//   }
// }
// class Child extends Parent {
//   getName(): string {
//     return this.name;
//   }
// }
// var c1 = new Child();
// c1.setName("niru");
// console.log(c1.getName());
// //namespace
/// <reference path="./Utils.ts"/>
var UserUtils;
(function (UserUtils) {
    var Users = /** @class */ (function (_super) {
        __extends(Users, _super);
        function Users() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Users.prototype.getAge = function () {
            return this.age;
        };
        return Users;
    }(UserUtils.Parents));
    UserUtils.Users = Users;
})(UserUtils || (UserUtils = {}));
var x1 = new UserUtils.Users();
x1.setAge(12);
console.log(x1.getAge());
