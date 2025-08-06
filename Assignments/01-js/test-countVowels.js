// Simple test file to check if countVowels function works
const countVowels = require('./medium/countVowels');

console.log("Testing countVowels function:");
console.log("---------------------------");

// Test cases
const testCases = [
    { input: "hello", expected: 2 },
    { input: "programming", expected: 3 },
    { input: "OpenAI", expected: 4 },
    { input: "rhythm", expected: 0 },
    { input: "", expected: 0 },
    { input: "EaSiEr", expected: 4 },
    { input: "aEIOU", expected: 5 }
];

let passed = 0;
let total = testCases.length;

testCases.forEach((test, index) => {
    const result = countVowels(test.input);
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
