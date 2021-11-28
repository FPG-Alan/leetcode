function rotate(nums, k) {
  const result = [...nums];
  for (let i = 0, l = nums.length; i < l; i += 1) {
    let lk = l - k;
    if (lk < 0) {
      lk = l - (Math.abs(lk) % l);
    }
    nums[i] = result[(lk + i) % l];
  }

  console.log(nums);
}
rotate([1, 2, 3, 4, 5, 6, 7], 3);

rotate([1, 2], 3);
rotate([-1, -100, 3, 99], 2);
