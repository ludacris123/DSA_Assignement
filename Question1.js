// Q1. Write a program to find all pairs of an integer array whose sum is equal to a given number?


//Ans=>

function findPairsWithSum(arr, targetSum) {
    // Create an empty Set to store elements as we iterate through the array.
    const seen = new Set();
    
    // Initialize an array to store the pairs.
    const pairs = [];
    
    for (let num of arr) {
        // Calculate the complement of the current number.
        const complement = targetSum - num;
        
        // Check if the complement exists in the Set.
        if (seen.has(complement)) {
            // If yes, add this pair to the result array.
            pairs.push([num, complement]);
        }
        
        // Add the current number to the Set.
        seen.add(num);
    }
    
    return pairs;
}

// Example usage:
const arr = [1, 2, 3, 4, 5, 6];
const targetSum = 7;
const result = findPairsWithSum(arr, targetSum);
console.log(result); // Output: [ [ 3, 4 ], [ 2, 5 ], [ 1, 6 ] ]
