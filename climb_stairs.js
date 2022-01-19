/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n === 1) {
    return 1;
  }

  if (n === 2) {
    return 2;
  }

  let res = [1, 2];
  for (let i = 2; i < n; i++) {
    res.push(res[i - 1] + res[i - 2]);
  }

  return res[res.length - 1];
};
