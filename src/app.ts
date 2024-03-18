//  export {}; // reslove duplicate identifier issue

export default class App {
  name() {
    const greet = "Hello Sabita";
    console.log("Class =", greet);
  }
}
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
var a: number = 100;
console.warn("types", a);

// Datatypes in ts
//if there is 1 numeric it will not throw an error
// const data: string = ["sabu", "peter", "mario", 100];
var data: string[] = ["sabu", "peter", "mario"];
data.push("hello");
//but if the type is declared as string it will throw an error
// data.push(100);
console.log("datatypes", data);

//Typed Object in ts

//if type any is used we can use everything string,number,boolean or it can be any type
let user: any = {
  name: "Sabu",
  age: 19,
  address: "Koteshor",
};
user.name = 10;
console.log("typed onject", user);

//Union types == more than one types of value can be assigned
// what if we want to assign only two types of value we can use union
var foo: string | boolean | number = "foo";
foo = true;
foo = 10;
console.log(foo);

//interface
// interface ==> allows us to define the structure or shape of an object and specify the properties and methods that an object has or should have.
interface userType {
  name: string;
  age: number;
  greet: () => string;
}

var userName: userType = {
  name: "sabu",
  age: 10,
  greet: function () {
    return "sabita khadka";
    // return 10; throw an error
  },
};

console.log(userName.greet());

//functions in ts
function hello(aa: number, bb?: number): number {
  //   return "hello"; // throw an error it should return number only
  //   return 11; // throw an error it should return string only
  return bb ? aa + bb : aa;
}
var x = hello(2);
console.log(x);

//classes in ts
class Name {
  name: string = "sabu";
  constructor() {
    console.log("construct called");
  }
  namee(): string {
    return this.name;
  }
}
var ag = new Name();
console.log(ag.namee());

//Inheritance in ts
class Parent {
  name: string;
  setName(name: string): void {
    this.name = name;
  }
}
class Child extends Parent {
  getName(): string {
    return this.name;
  }
}
var c1 = new Child();
c1.setName("niru");
console.log(c1.getName());

//modules
import Teacher from "./teacher";
import Student from "./student";

let teacher = new Teacher();
console.log(teacher.data);

let student = new Student();
console.log(student.data);

//Generics in ts
//help make more generalized methods which more accurately represent the types used and returned
function users<T>(data: T): T {
  return data;
}
console.log(users({ name: "sabu", age: 19 }));

// enums in ts
// By default, enums will initialize the first value to 0 and add 1 to each additional value
enum Days {
  sun,
  mon,
  tue,
  wed,
  thu,
  fri,
  sat,
}
let whichDay: Days;
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

