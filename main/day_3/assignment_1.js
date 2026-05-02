//Create a variable for each of the following: your favorite color, your height in centimeters, 
// and whether you like pizza. Use appropriate variable declarations (let, const, or var). 
// Try logging it using console.log

let fav_color = "black";
var height = 170
var likes_pizza = true

console.log(fav_color);
console.log(height);
console.log(likes_pizza);


//Data types
let number = 42;      //number
let string = "Hello World";   //string
let isActive = true;        //boolean
let numbers = [1, 2, 3];   //Arrays

console.log(number, string, isActive, numbers[2]);

//Operators

let sum = 10 + 5;      //Arithmetic Operator 
let isEqual = (10 == 10);   //comparison operator
let isTrue = (true && false);   //logical operator 
console.log(sum);
console.log(isEqual);
console.log(isTrue);

//Functions

function greet(name) {
    return "Hello " + name;
}

let message = greet("Rahul")
console.log(message)

//Assignment 1
//Write a function sum that finds the sum of two numbers. 
//Side quest - Try passing in a string instead of a number and see what happens?

function two_sum(a, b) {
    let sum = a + b;
    return sum;
}

let value = two_sum(59, 38);
console.log(value);

//side quest
let results = two_sum('78', '20');
console.log(results);

// result of the side quest the strings concatenate

//Assignment 2
//Write a function called canVote that returns true or false if the age of a user is > 18

function canVote(age) {
    let result = age > 18;
    return result;
}

let isEligible = canVote(10);
console.log(isEligible)


// if/else
let age = 21
if (age > 18) {
    console.log("You are an adult");
} else {
    console.log("You are a kid");
}


//Assignment
//Write an if/else statement that checks if a number is even or odd. If it's even, print "The number is even." 
// Otherwise, print "The number is odd."
let num = 28
if (num % 2 == 0) {
    console.log("The number is even");
} else {
    console.log("The number is odd");
}


//Loops
//For loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

//While loop
let j = 0;
while (j < 5) {
    console.log(j);
    j++;
}

//Assignment
//Write a function called t_sum that finds the sum from 1 to a number

function t_sum(num) {
    let sum_of = 0;
    for (let i = 1; i <= num; i++) {
        sum_of = sum_of + i
    }
    return sum_of

}


let res = t_sum(5)
console.log(res)


//Complex types

// Assignment #1
// Write a function that takes a user as an input and greets them with their name and age

function greet(user) {
    console.log("Hi " + user.name + " you'r age is " + user.age);
}
let User1 = {
    name: "raman",
    age: 30,
}

greet(User1);

// Assignment #2
// Write a function that takes a new object as input which has name , age  and gender and greets the user with 
// their gender (Hi Mr/Mrs/Others harkirat, your age is 21)

function greets(user) {
    if (user.gender == "male") {
        console.log("Hi " + "Mr " + user.name + " you'r age is " + user.age);

    } else {
        console.log("Hi " + "Mrs " + user.name + " you'r age is " + user.age);
    }
}
let user2 = {
    name: "Raman",
    age: 30,
    gender: "male",
}

greets(user2);

// Assignment #3
// Also tell the user if they are legal to vote or not

function canvote(user) {
    if (user.age > 18) {
        return " you are eligible to vote"
    } else {
        return " you are not eligible to vote"
    }
}

function greets(user) {
    if (user.gender == "male") {
        console.log("Hi " + "Mr " + user.name + " you'r age is " + user.age + canvote(user));

    } else {
        console.log("Hi " + "Mrs " + user.name + " you'r age is " + user.age + canvote(user));
    }
}
let user = {
    name: "Raman",
    age: 30,
    gender: "male",
}

greets(user);


//Arrays
const users_name = ["harkirat", "raman", "diljeet"];
const tatalUsers = users_name.length;
const firstUser = users_name[0];

// Assignment
// Write a function that takes an array of numbers as input, and returns a new array with only even values. 
// Read about filter in JS


function check_even(i) {
    return i % 2 == 0;
}

const num_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const Result = num_arr.filter(check_even);
console.log(Result)

// or the (dumb way)

function even_array(array) {
    let even_arr = [];
    for (i = 0; i <= array.length; i++) {

        if (i % 2 == 0) {
            even_arr = even_arr + i;
        }
    }
    console.log(even_arr);

}

const num_arr_2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
even_array(num_arr_2);

// Array of Objects
const users = [{
    name: "Harkirat",
    age: 21
}, {
    name: "raman",
    age: 22
}
]

const firstUserObj = users[0]
const firstUserAge = users[0].age
console.log(firstUserObj)
console.log(firstUserAge)

//Assignment
//Write a function that takes an array of users as inputs and returns only the users who are more than 18 years old
function only_18(users) {
    if (users.age > 18) {
        return Users
    }
}
const Users = [{
    name: "Ronni",
    age: 21,
}, {
    name: "Manu",
    age: 19,
}, {
    name: "chotu",
    age: 12,
}]

const more_than18 = Users.filter(only_18)
console.log(more_than18)


//Object of objects

const user1 = {
    name: "harkirat",
    age: 19,
    address: {
        city: "Delhi",
        country: "India",
        address: "1122 DLF"
    }
}

const city = user1.address.city;
console.log(city)

// Assignment
// Create a function that takes an array of objects as input,
// and returns the users whose age > 18 and are male
function male_18(arr) {
    return arr.filter(user => user.age > 18 && user.gender === "male");
}

function solve(arr) {
    let arr2 = [];
    for (i = 0; i < arr.length; i++) {
        if (arr[i].age > 18 && arr[i].gender == "male") {
            arr2.push(arr[i])
        }
    }
    return arr2

}

const Users_b1 = [{
    name: "Ronni",
    age: 21,
    gender: "male"
}, {
    name: "Monika",
    age: 19,
    gender: "female"
}, {
    name: "chotu",
    age: 12,
    gender: "male"
}];

const result = male_18(Users_b1);
console.log(result);

const Result_l = solve(Users_b1)
console.log(Result_l)