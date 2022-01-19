function maxSubArray(nums) {
  let prev = nums[0];
  let max = prev;
  for (let i = 1, l = nums.length; i < l; i += 1) {
    prev = Math.max(prev, 0) + nums[i];
    max = Math.max(max, prev);
  }

  return max;
}

console.log(maxSubArray([5, 4, -1, 7, 8]));
