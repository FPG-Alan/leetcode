function rotateMatrix(matrix) {
  const tmp_values = {};
  for (let i = 0, l = matrix.length; i < l; i += 1) {
    let target_y = l - i - 1;
    for (let j = 0, k = matrix[i].length; j < k; j += 1) {
      const target_x = j;

      if (!tmp_values[target_x]) {
        tmp_values[target_x] = {};
      }
      tmp_values[target_x][target_y] = matrix[target_x][target_y];

      if (tmp_values[i]?.[j] !== null && tmp_values[i]?.[j] !== undefined) {
        matrix[target_x][target_y] = tmp_values[i][j];
        tmp_values[i][j] = null;
      } else {
        matrix[target_x][target_y] = matrix[i][j];
      }
    }
  }
}

const matrix1 = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];

const matrix2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const matrix3 = [[1]];

const matrix4 = [
  [1, 2],
  [3, 4],
];

const matrix5 = [
  [43, 39, 3, 33, 37, 20, 14],
  [9, 18, 9, -1, 40, 22, 38],
  [14, 42, 3, 23, 12, 14, 32],
  [18, 31, 45, 11, 8, -1, 31],
  [28, 44, 14, 23, 40, 24, 13],
  [29, 45, 33, 45, 20, 0, 45],
  [12, 23, 35, 32, 22, 39, 8],
];

rotateMatrix(matrix5);
console.log(matrix5);
