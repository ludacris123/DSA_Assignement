//Q8. Write a program to check if all the brackets are closed in a given code snippet.


//Ans=>

function areBracketsBalanced(codeSnippet) {
    const stack = [];
    const bracketPairs = {
        '(': ')',
        '{': '}',
        '[': ']',
    };

    for (let char of codeSnippet) {
        if (bracketPairs[char]) {
            // If it's an opening bracket, push it onto the stack
            stack.push(char);
        } else if (Object.values(bracketPairs).includes(char)) {
            // If it's a closing bracket, check if it matches the top of the stack
            const top = stack.pop();
            if (bracketPairs[top] !== char) {
                return false; // Mismatched brackets
            }
        }
    }

    // If the stack is empty at the end, all brackets are balanced
    return stack.length === 0;
}

// Example usage:
const codeSnippet1 = 'if (x > 0) { console.log("x is positive"); }';
const codeSnippet2 = 'function() { return "unbalanced } code"; }';

console.log(areBracketsBalanced(codeSnippet1)); // Output: true
console.log(areBracketsBalanced(codeSnippet2)); // Output: false

