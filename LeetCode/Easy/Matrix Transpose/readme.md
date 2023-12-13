```js
const transpose = (matrix) => {
  let numOfRows = matrix.length;
  let numOfColumns = matrix[0].length;
  if (numOfRows === 0 || numOfColumns === 0) {
    return [];
  }
  let transposed = [];
  for (let row = 0; row < numOfRows; row++) {
    transposed[row] = [];
    for (let column = 0; column < numOfColumns; column++) {
      transposed[row][column] = matrix[column][row];
    }
  }
  return transposed;
};

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(transpose(matrix));
// [
//   [1, 4, 7],
//   [2, 5, 8],
//   [3, 6, 9],
// ];
```
