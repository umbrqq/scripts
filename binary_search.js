/**
 * Binary Search Algorithm 🔍
 * Complexity: O(log n)
 * * Description:
 * Efficiently finds the position of a target value within a sorted array.
 * Note: The array MUST be sorted before running this.
 */

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        // Calculate middle index
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // Target found, return index
        }

        if (arr[mid] < target) {
            left = mid + 1; // Search right half
        } else {
            right = mid - 1; // Search left half
        }
    }

    return -1; // Target not found
}

// Test Case
const sortedArray = [10, 20, 30, 40, 50, 60, 70];
const targetValue = 30;

const result = binarySearch(sortedArray, targetValue);

if (result !== -1) {
    console.log(`Element ${targetValue} found at index: ${result}`);
} else {
    console.log(`Element ${targetValue} not found.`);
}
