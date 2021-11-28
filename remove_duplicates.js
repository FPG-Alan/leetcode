/**
 * 双指针， 每次右指针右移一位
 * 若nums[left] !== nums[right], 左指针右移一位， 赋值为右指针当前值
 */
function removeDuplicates(nums) {
  let left = 0,
    right = 1;
  for (; right < nums.length; right += 1) {
    if (nums[left] !== nums[right]) {
      nums[++left] = nums[right];
    }
  }

  console.log(left);
  return left + 1;
}

removeDuplicates([0, 0, 1, 1, 1, 1, 1, 1, 2, 2, 3, 3, 4]);
