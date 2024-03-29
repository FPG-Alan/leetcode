function validSudoku(board) {
  const square_nums = [
    [{}, {}, {}],
    [{}, {}, {}],
    [{}, {}, {}],
  ];
  const line_nums = Array.from({ length: 9 }, () => new Object());
  const column_nums = Array.from({ length: 9 }, () => new Object());
  for (let i = 0, l = 9; i < l; i += 1) {
    for (let j = 0, k = 9; j < k; j += 1) {
      // check each line
      if (line_nums[i][board[i][j]] && board[i][j] !== ".") {
        return false;
      }
      line_nums[i][board[i][j]] = true;

      // check each column
      if (column_nums[i][board[j][i]] && board[j][i] !== ".") {
        return false;
      }
      column_nums[i][board[j][i]] = true;

      const square_line = Math.floor(i / 3);
      const square_column = Math.floor(j / 3);
      const current_square_nums = square_nums[square_line][square_column];
      // check each square
      if (current_square_nums[board[i][j]] && board[i][j] !== ".") {
        return false;
      }
      current_square_nums[board[i][j]] = true;
    }
  }

  console.log(column_nums[3]);
  return true;
}

const test1 = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

const test2 = [
  ["8", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

const test3 = [
  [".", ".", ".", "9", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", "3", ".", ".", ".", ".", ".", "1"],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  ["1", ".", ".", ".", ".", ".", "3", ".", "."],
  [".", ".", ".", ".", "2", ".", "6", ".", "."],
  [".", "9", ".", ".", ".", ".", ".", "7", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  ["8", ".", ".", "8", ".", ".", ".", ".", "."],
];

const test4 = [
  [".", ".", "4", ".", ".", ".", "6", "3", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  ["5", ".", ".", ".", ".", ".", ".", "9", "."],
  [".", ".", ".", "5", "6", ".", ".", ".", "."],
  ["4", ".", "3", ".", ".", ".", ".", ".", "1"],
  [".", ".", ".", "7", ".", ".", ".", ".", "."],
  [".", ".", ".", "5", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
];
// console.log(validSudoku(test1));
// console.log(validSudoku(test2));
console.log(validSudoku(test4));
