let x: number = 10;
x = 20
console.log(x);


function greet(fname: string) {
    console.log("Hello" + fname)
}

greet("Raj")

function sum(a: number, b: number): number {
    return a + b
}

sum(2, 3)


function runafter1(fn: () => void) {
    setTimeout(() => {
        hello();
    }, 1000);
}

function hello() {
    console.log("hello everyone");
}

runafter1(hello)

interface User {
    fname: string,
    lname: string,
    age: number,
    email?: string
}

function isLegal(user: User) {
    if (user.age > 18) {
        return true
    } else {
        return false
    }
}

function greet(user: User) {
    console.log("hello " + user.fname)
}

let k = {
    fname: "rajesh",
    lname: "khanna",
    age: 20
}
isLegal(k)
greet(k)