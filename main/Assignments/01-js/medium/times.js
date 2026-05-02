/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/
function calculateTime(n) {
    var count = 0

    // Create Date object BEFORE the loop
    var before_loop = new Date().getTime()

    for (var i = 0; i <= n; i++) {
        count += i
    }

    // Create Date object AFTER the loop
    var after_loop = new Date().getTime()

    // Calculate time in milliseconds, then convert to seconds
    var time_taken = (after_loop - before_loop) / 1000

    return {
        "sum": count,
        "time_taken_seconds": time_taken
    };
}

console.log(calculateTime(100))
console.log(calculateTime(100000))
console.log(calculateTime(1000000000))
