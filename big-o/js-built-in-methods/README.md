# Time/Space Complexity of JavaScript Built-In Methods

Remember that when analyzing time/space complexity we are most interested in the worst time or space complexity, however sometimes is good to think about the best or average time/space complexity for contrast.

If you are unsure about the time/space complexities of a certain methods I recommend you implement your own version of the method to appreciate what it does and how it does it.

## String Methods

### `str.indexOf(substr)`

Find the index at which a substring starts in `str`. Returns `-1` if not found

#### Complexities

| Time   | Space  |
| ------ | ------ |
| `O(n)` | `O(1)` |

**Notes**: Has to traverse the whole string. Only needs to store an index. Same as `str.includes()`

**Question**: On what input could this run in `O(1)` - Constant time?

### `str.slice(startIdx, endIdx)`

Extract a section of a string.

#### Complexities

| Time   | Space  |
| ------ | ------ |
| `O(d)` | `O(d)` |

**Notes** Where `d` is the difference between `startIdx` and `endIdx`. A new string of length `d` will be created with the characters between `startIdx` and `endIdx` not including the character at `endIdx`

### `str.concat(str2)`

Joins or concatenates two strings.

#### Complexities

| Time       | Space      |
| ---------- | ---------- |
| `O(n + m)` | `O(n + m)` |

**Notes** Where `n` is the length of `str` and `m` is the length of `str2`. A new string of length `n + m` is created which occupies `n + m` space and is returned. This is the same as `str + str2` and it is the same for arrays.

**Exercise:** Implement your own concat function concatenating character by character, that is without `str + str2`

### `str.repeat(num)`

Repeat a string `num` number of times and return as a new string.

#### Complexities

| Time         | Space      |
| ------------ | ---------- |
| `O(n * num)` | `O(n * m)` |

**Notes** Where `n` is the length of `str` and `num` is the number of times `str` is to be repeated. A new string of length `n * num` is created and returned.

### Your Turn

1. Implement `strTrim(str)` that works just like `str.trim()` and determine its time/space complexity
2. Complete the table bellow. It might be helpful to implement your own version of these methods to understand their time/space complexities.

| Method                              | Time | Space |
| ----------------------------------- | ---- | ----- |
| `str.trim()`                        |      |       |
| `str.startsWith(substr)`            |      |       |
| `str.split(separator)`              |      |       |
| `str.toLowerCase()`                 |      |       |
| `str.replaceAll(substr, newSubstr)` |      |       |

📑 You can find more information as well as a complete list of String methods [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

## Array Methods

### `arr.fill(value)`

Fill an array with the specified value. 

#### Complexities

| Time   | Space  |
| ------ | ------ |
| `O(n)` | `O(1)` |

**Notes** Where `n` is the length of `arr`. `O(n)` because it has to visit every index and put the `value` there. Constant space because it does not create or returns a new array, it modifies the original array.

### `arr.push(value)`

Add an element to the end of an array.

#### Complexities

| Time   | Space  |
| ------ | ------ |
| `O(1)` | `O(1)` |

**Notes** Considered Constant time because Arrays in JavaScript are Dynamic Arrays and they have Amortized Time for insertion and deletion at the end of the array. [Checkout our lesson this topic](https://www.youtube.com/watch?v=etKum-Utrow&list=PLvQtbvxnE8UH9HAk856102ilGII9KVdBV&index=16) or read this article in [Medium](https://medium.com/@satorusasozaki/amortized-time-in-the-time-complexity-of-an-algorithm-6dd9a5d38045).

### `arr.shift(substr)`

Remove an element from beginning of an array.

#### Complexities

| Time   | Space  |
| ------ | ------ |
| `O(n)` | `O(1)` |

**Notes**: When removing an element from the beginning of an array the remaining elements need to be reindexed which are `(n - 1)` elements, therefore `O(n)`. No additional space is needed.

### `arr.sort(substr)`

Sort an array.

#### Complexities

| Time         | Space  |
| ------------ | ------ |
| `O(n log n)` | `O(n)` |

**Notes**: Different browsers may use different sorting algorithms but we can rely on the fact that they use an efficient algorithm like Merge Sort which runs in `n log n` time and `n` space. See more [here](https://www.bigocheatsheet.com/#sorting:~:text=Array%20Sorting%20Algorithms)

### Your Turn

1. Implement a function `reverseArr(arr)` that works just like `arr.reverse()`
2. Complete the table bellow. It might be helpful to implement your own version of these methods to understand their time/space complexities.

| Method                       | Time | Space |
| ---------------------------- | ---- | ----- |
| `arr.reverse()`              |      |       |
| `arr.join(separator)`        |      |       |
| `arr.pop()`                  |      |       |
| `arr.unshift(value)`         |      |       |
| `arr.filter(filterFn)`       |      |       |
| `arr.reduce(fn, initialAcc)` |      |       |

📑 You can find more information as well as a complete list of Array methods [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods)


## Object Methods

### `Object.values(myObj)`

Extract all values only from an object and return them in an array 

#### Complexities

| Time   | Space  |
| ------ | ------ |
| `O(n)` | `O(n)` |

**Notes**: Where `n` is the number of key-value pairs in `myObj`. We need to traverse all the properties and add each one to an output array, that is then returned.

### `Object.assign(objA, objB)`

Adds the properties of `objB` to `objA`. Can be used to make copies of objects.

#### Complexities

| Time   | Space  |
| ------ | ------ |
| `O(n)` | `O(n)` |

**Notes**: Where `n` is the number of key-value pairs in `objB` to be copied to `objA`.

**Exercise:** Implement `mergeObjs(objA, objB)` that works just like `Object.assign(objA, objB)` and determine its time/space complexity

### Your Turn

1. Implement `getKeys(myObj)` that works just like `Object.keys(myObj)` and determine its time/space complexity
2. Complete the table bellow. It might be helpful to implement your own version of these methods to understand their time/space complexities.

| Method                      | Time | Space |
| --------------------------- | ---- | ----- |
| `Object.keys(myObj)`        |      |       |
| `myObj.hasOwnProperty(key)` |      |       |

📑 Full list of object methods [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

## Other Methods or Functions

| Method                      | Time   | Space  | Notes                                                                                        |
| --------------------------- | ------ | ------ | -------------------------------------------------------------------------------------------- |
| `parseInt(str)`             | `O(n)` | `O(1)` | Will traverse str and convert it into a number that occupies constant space                  |
| `Math.pow()`                | `O(1)` | `O(1)` | Math is constant time/space                                                                  |
| `Math.min(a, b, ...etc)`    | `O(n)` | `O(1)` | `O(n)` Because it can take an arbitrary number of arguments                                  |
| `console.log(someValue)`    | `O(1)` | `O(1)` | No matter how big what you want to log is `console.log` has                                  |
| `JSON.stringify(someValue)` | `O(n)` | `O(n)` | Where `n` is the length or size of what is being logged. Needs to log character by character |
