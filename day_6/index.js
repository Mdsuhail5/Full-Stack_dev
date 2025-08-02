//map, filter, arrow function


//map
let numbers = [1, 2, 3, 4, 5, 6]
function multiply(i) {
    return i * 2;
}
const double = numbers.map(multiply)
console.log(double)

//filter
function even(i) {
    if (i % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

const filtered = numbers.filter(even)
console.log(filtered)

//arrow function

const doubled = numbers.map((i) => {
    return i * 2;
})
console.log(doubled)

const oddfilter = numbers.filter((i) => i % 2 !== 0)
console.log(oddfilter)

//create a map function that takes an array and 
// transform function as input and returns transformed array as output

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const map = (a, fn) => {
    let transformeda = []
    for (let i = 0; i <= a.length; i++) {
        transformeda.push(i * 2)
    }
    return transformeda;
}
console.log(map)