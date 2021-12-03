function twoSum(nums, target) {
  const obj = {};
  for (let i = 0, l = nums.length; i < l; i += 1) {
    if (obj[target - nums[i]] !== undefined) {
      return [i, obj[target - nums[i]]];
    }

    obj[nums[i]] = i;
  }
}

console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([0, 4, 3, 0], 0));
