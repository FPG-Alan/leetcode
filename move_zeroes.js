function moveZeroes(nums) {
  //   const origin_length = nums.length;
  let currentIndex = 0;
  for (let i = 0, l = nums.length; i < l; i += 1) {
    if (nums[i] !== 0) {
      if (currentIndex !== i) {
        nums[currentIndex] = nums[i];
      }
      currentIndex += 1;
    }
  }

  for (let i = currentIndex, l = nums.length; i < l; i += 1) {
    nums[i] = 0;
  }

  return nums;
}

// console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0, 0, 1]));
