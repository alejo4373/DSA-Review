/**
# Optimize Directions

You found directions to a secret location written in words. The possible directions are "NORTH", "SOUTH", "WEST", "EAST".
"NORTH" and "SOUTH" are opposite directions, as are "EAST" and "WEST". Going one direction and coming back in the opposite
direction leads to going nowhere. Someone else also has these directions to the secret location and you need to get there first.
Since the directions are long, you decide to write a program to figure out the fastest and most direct route to the location.

Write a function that will take a list of strings and will return a list of strings with the unneeded directions
removed (NORTH<->SOUTH or EAST<->WEST side by side).

For example:
In ["NORTH", "EAST", "WEST", "SOUTH", "WEST", “SOUTH”, “NORTH”, "WEST"],
"NORTH" and "SOUTH" are not directly opposite but they become directly opposite after the reduction of "EAST" and "WEST".
The whole path can be reduced to ["WEST", "WEST"].

Not all paths are reducible. The path [“EAST”, "NORTH", "WEST", "SOUTH"] is not reducible.
“EAST" and “NORTH, NORTH" and "WEST", "WEST" and "SOUTH" are not directly opposite of each other and thus can’t be reduced.
The resulting path has not changed from the original path: [“EAST”, "NORTH", "WEST", "SOUTH"].

*/

const Stack = require('../Stack') // You should use this stack
/**
 * @function optimizeDirections
 * Take an array of direction strings and optimize it by removing unneeded directions
 * 
 * @param {string[]} directions. An array of string directions 
 * @returns {string[]}. An array of directions with no unnecessary directions
 */

const optimizeDirections = (directions) => {
  const stack = new Stack();
  let opposites = {
    "NORTH": "SOUTH",
    "SOUTH": "NORTH",
    "EAST": "WEST",
    "WEST": "EAST",
  }
  for (let dir of directions) {
    let oppositeDir = opposites[dir]
    if (oppositeDir === stack.peek()) {
      stack.pop()
    } else {
      stack.push(dir)
    }
  }

  let output = []
  while (!stack.isEmpty()) {
    output.push(stack.pop())
  }

  return output.reverse()
}

console.log(optimizeDirections(["NORTH", "EAST", "WEST", "SOUTH", "WEST", "SOUTH", "NORTH", "WEST"])) // ["WEST", "WEST"]
console.log(optimizeDirections(["NORTH", "NORTH", "SOUTH", "SOUTH", "EAST"])) // ["EAST"]
console.log(optimizeDirections(["NORTH", "NORTH", "SOUTH", "SOUTH", "EAST", "WEST"])) // []
console.log(optimizeDirections(["NORTH", "EAST", "SOUTH", "NORTH", "EAST", "WEST"])) // ["NORTH", "EAST"]
console.log(optimizeDirections(["EAST", "NORTH", "WEST", "SOUTH"])) // ["EAST", "NORTH", "WEST", "SOUTH"]
