//Javascript is used to websites along with html,css and is used to add funcitonalities to the website
// 1. javascript is dynamically typed lang
// 2. javascript runs on single thread
// 3. javascript is intrepreted and runtime language
// 4. javascript has garbage collector which automatically reclaims the memory used by objects and variables

//Syntax of Javascript
//var, let ,const
var isStudent = true;
console.log(isStudent);
const w = 10
console.log(w)
//w = 9
console.log(w)


//Callbacks
// function taking another funtion as an argument 

function sum(a, b) {
    let res = 0;
    res = a + b;
    return res;
}

function display(a, b, funtocall) {
    let result = funtocall(a, b)
    console.log(result);
}

display(1, 2, sum)


//example 2

function calcarithemetic(a, b, arithmeticfunction) {
    const ans = arithmeticfunction(a, b);
    return ans;
}

function sum(a, b) {
    return a + b;
}


const value = calcarithemetic(20, 30, sum)
console.log(value)


//example
//setTimeout(fun,duration)
function greet() {
    console.log("Hello World!")
}

setTimeout(greet, 1 * 1000)

//example 
//setInterval(fun,duration)

function greetAlien() {
    console.log("Hello alien!")
}


setInterval(greetAlien, 3 * 1000)