# 2704. To Be Or Not To Be

Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

- toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
- notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".

## Example 1

```js
Input: func = () => expect(5).toBe(5)
Output: {"value": true}
Explanation: 5 === 5 so this expression returns true.
```

## Example 2

```js
Input: func = () => expect(5).toBe(null)
Output: {"error": "Not Equal"}
Explanation: 5 !== null so this expression throw the error "Not Equal".
```

## Example 3

```js
Input: func = () => expect(5).notToBe(null)
Output: {"value": true}
Explanation: 5 !== null so this expression returns true.
```

## Solution

```js
/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
  const throwError = (err) => {
    throw new Error(err);
  };

  const toBe = (toBeBal) => {
    return val === toBeBal ? true : throwError("Not Equal");
  };

  const notToBe = (notToBeVal) => {
    return val !== notToBeVal ? true : throwError("Equal");
  };

  return { toBe, notToBe };
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
```
