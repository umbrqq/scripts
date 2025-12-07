/**
 * Bubble Sort Algorithm
 * Complexity: O(n^2)
 * * Description:
 * Compares adjacent elements and swaps them if they are in the wrong order.
 * The pass through the list is repeated until the list is sorted.
 */

function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
    
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Swap elements
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
        // Optimize: reduce the range as the last element is already sorted
        n--; 
    } while (swapped);
    
    return arr;
}
