//Q6. Read about infix, prefix, and postfix expressions. Write a program to convert postfix to prefix expression.




// Infix Notation: This is the standard way of writing mathematical expressions with operators between operands, such as 2 + 3. Infix notation uses parentheses to determine the order of operations.

// Prefix Notation (Polish Notation): In prefix notation, operators precede their operands. For example, + 2 3 means the same as 2 + 3.

// Postfix Notation (Reverse Polish Notation - RPN): In postfix notation, operators come after their operands. For example, 2 3 + represents 2 + 3.


function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
}

function postfixToPrefix(postfixExpression) {
    const stack = [];
    
    for (let char of postfixExpression) {
        if (!isOperator(char)) {
            // If it's an operand, push it onto the stack
            stack.push(char);
        } else {
            // If it's an operator, pop two operands from the stack and combine them with the operator
            const operand2 = stack.pop();
            const operand1 = stack.pop();
            const prefixExpression = char + operand1 + operand2;
            stack.push(prefixExpression);
        }
    }
    
    // The final item in the stack will be the prefix expression
    return stack.pop();
}

// Example usage:
const postfixExpression = '23+5*';
const prefixExpression = postfixToPrefix(postfixExpression);
console.log(`Postfix Expression: ${postfixExpression}`);
console.log(`Prefix Expression: ${prefixExpression}`);
