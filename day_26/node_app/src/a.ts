
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

//how to give type of a fuction to another function
function runAfter1sec(fn: () => void) {
    setTimeout(fn, 1000);
}

runAfter1sec(function () {
    console.log("1 sec passed");
});

//we learnt
//1. how to give type to a variable
//2. how to give type to a function parameter
//3. how to give type to a function return type
//4. how to give type of a function to another function