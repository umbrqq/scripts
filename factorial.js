/**
 * Recursive Factorial Calculation ❗
 * * Description:
 * Calculates the product of an integer and all the integers below it.
 * Demonstrates the concept of recursion (function calling itself).
 */

function factorial(n) {
    // Base case: factorial of 0 or 1 is 1
    if (n === 0 || n === 1) {
        return 1;
    }
    // Recursive step
    return n * factorial(n - 1);
}

// Test Case
const num = 5;
console.log(`Factorial of ${num} is:`, factorial(num)); // Output: 120
