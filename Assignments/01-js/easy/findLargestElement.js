/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/
const prompt = require('prompt-sync')();

function findLargestElement(numbers) {
    let largest = numbers[0]
    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }
    return largest
}

numbers = [10, 2, 3, 5, 6, 7, 8, 2, 2, 1, 9]
largest = findLargestElement(numbers)
console.log(largest)

