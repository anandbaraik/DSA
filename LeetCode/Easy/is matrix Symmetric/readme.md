```js
function isSymmetric(matrix) {
  let numOfRows = matrix.length;
  let numOfColumns = matrix[0].length;
  if (numOfRows !== numOfColumns) return false;
  for (let row = 0; row < numOfRows; row++) {
    for (let column = 0; column < numOfColumns; column++) {
      if (matrix[row][column] !== matrix[column][row]) {
        return false;
      }
    }
  }
  return true;
}

// Example usage:
const symmetricMatrix = [
  [1, 2, 3],
  [2, 4, 5],
  [3, 5, 6],
];

const nonSymmetricMatrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(isSymmetric(symmetricMatrix)); // Output: true
console.log(isSymmetric(nonSymmetricMatrix)); // Output: false
```
