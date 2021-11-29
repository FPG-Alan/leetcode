function containsDuplicate(nums) {
  let obj = {};

  for (let i = 0, l = nums.length; i < l; i += 1) {
    const key = nums[i];
    if (obj[key] || obj[key] === 0) {
      return true;
    } else {
      obj[key] = key;
    }
  }

  return false;
}

function containsDuplicate2(nums) {
  return [...new Set(nums)].length !== nums.length;
}

const contain = containsDuplicate2([1, 2, 3, 4]);

console.log(contain);
