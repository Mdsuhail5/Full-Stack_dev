import set = require("mongoose");
import mongoose = require("mongoose");

let x: number = 1;
console.log(x);

function greet(firstname: string, lastname: string, age: number) {
    console.log("Hello " + firstname);
}
greet("John", "Doe", 30);

function sum(a: number, b: number) {
    return a + b;
}
const value = sum(1, 2);
console.log(value);

function isLegal(age: number): boolean {
    if (age > 18) {
        return true;
    } else {
        return false;
    }
}

//string ,number, boolean,
let y = isLegal(20);
console.log(y);


function runAfter1sec(fn: () => void) {
    setTimeout(fn, 1000);
}

runAfter1sec(function () {
    console.log("1 sec passed");
});