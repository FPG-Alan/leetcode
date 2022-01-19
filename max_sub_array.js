function maxSubArray(nums) {
  let prev = nums[0];
  let max = prev;
  for (let i = 1, l = nums.length; i < l; i += 1) {
    // 这里最主要的是要看上一个是否小于0， 如果小于0就直接舍弃掉之前的结果
    // 否则越加越小
    prev = Math.max(prev, 0) + nums[i];
    max = Math.max(max, prev);
  }

  return max;
}

console.log(maxSubArray([5, 4, -1, 7, 8]));
