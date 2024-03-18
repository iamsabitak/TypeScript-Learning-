"use strict";
/// <reference path="./Utils.ts"/>
var UserUtils;
(function (UserUtils) {
    class Users extends UserUtils.Parents {
        getAge() {
            return this.age;
        }
    }
    UserUtils.Users = Users;
})(UserUtils || (UserUtils = {}));
var x1 = new UserUtils.Users();
x1.setAge(12);
console.log(x1.getAge());
