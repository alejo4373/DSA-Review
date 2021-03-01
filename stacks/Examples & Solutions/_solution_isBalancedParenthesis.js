/**
# Valid Parenthesis

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.

== Example 1 ==
Input: s = "([)]"
Output: false

== Example 2 ==
Input: s = "{[]}"
Output: true

Source: https://leetcode.com/problems/valid-parentheses/
Solution: https://leetcode.com/problems/valid-parentheses/solution/
*/

const Stack = require('../Stack')
/**
 * @function isBalancedParenthesis
 * Determine if every opening parentheses has a matching closing parentheses in a string
 * 
 * @param {string} str. A string to check if its parenthesis are balanced
*/
var isBalancedParenthesis = function (str) {
  // if string is empty return true
  if (!str) return true;
  // create a stack
  let stack = new Stack()
  //loop through string 
  for (let char of str) {
    if (char === '[') stack.push(']')
    else if (char === '{') stack.push('}')
    else if (char === '(') stack.push(')')
    else if (stack.isEmpty() || char !== stack.pop()) return false
  }
  return stack.isEmpty()
};


console.log(isBalancedParenthesis(""))      // Output: true
console.log(isBalancedParenthesis(")"))     // Output: false
console.log(isBalancedParenthesis("("))     // Output: false
console.log(isBalancedParenthesis("()"))    // Output: true
console.log(isBalancedParenthesis("(])"))   // Output: false
console.log(isBalancedParenthesis("()[]{}"))// Output: true
console.log(isBalancedParenthesis("(]"))    // Output: false
console.log(isBalancedParenthesis("([)]"))  // Output: false
console.log(isBalancedParenthesis("{[]}"))  // Output: true
