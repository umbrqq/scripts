/**
 * Binary Search Algorithm
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
