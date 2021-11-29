function singleNumber(nums) {
  nums.sort();
  for (let i = 0, l = nums.length; i < l; i += 2) {
    if (i + 1 >= l || nums[i] !== nums[i + 1]) {
      return nums[i];
    }
  }
}

/**
 * 1. 自身异或等于0
 * 2. 任何数与0异或等于其本身
 * 3. 异或运算满足交换律
 *
 * 以上三点推出， 数组所有元素挨个异或一遍， 就是结果
 */
function singelNumber(nums) {
  let result = 0;
  for (let i = 0, l = nums.length; i < l; i += 1) {
    result = result ^ nums[i];
  }

  return result;
}

console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));
console.log(
  singleNumber([
    -336, 513, -560, -481, -174, 101, -997, 40, -527, -784, -283, -336, 513,
    -560, -481, -174, 101, -997, 40, -527, -784, -283, 354,
  ])
);
