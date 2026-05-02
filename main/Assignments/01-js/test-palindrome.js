// Simple test file to check if isPalindrome function works
const isPalindrome = require('./medium/palindrome');

console.log("Testing isPalindrome function:");
console.log("------------------------------");

// Test cases from the actual test file
const testCases = [
    { input: "level", expected: true },
    { input: "racecar", expected: true },
    { input: "hello", expected: false },
    { input: "openai", expected: false },
    { input: "", expected: true },
    { input: "Anna", expected: true },
    { input: "aNnA", expected: true },
    { input: "Madam", expected: true },
    { input: "a", expected: true },
    { input: "abcde", expected: false }
];

let passed = 0;
let total = testCases.length;

testCases.forEach((test, index) => {
    const result = isPalindrome(test.input);
    const isCorrect = result === test.expected;

    console.log(`Test ${index + 1}: "${test.input}"`);
    console.log(`  Expected: ${test.expected}, Got: ${result} ${isCorrect ? "✓ PASS" : "✗ FAIL"}`);

    if (isCorrect) passed++;
});

console.log(`\nResults: ${passed}/${total} tests passed`);
if (passed === total) {
    console.log("🎉 All tests passed! Great job!");
} else {
    console.log("❌ Some tests failed. Check your logic.");
}
