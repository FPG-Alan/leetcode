function reverse(x) {
  const nums = Math.abs(x).toString().split("");
  const l = nums.length;
  let result = 0;

  for (let i = l - 1; i >= 0; i--) {
    const num = parseInt(nums[i]);
    if (num !== 0) {
      result += num * Math.pow(10, i);
    }
  }

  result = result * ((x >= 0 && 1) || -1);

  if (result > Math.pow(2, 31) - 1 || result < Math.pow(2, 31) * -1) {
    return 0;
  }
  return result;
}

console.log(reverse(120));
console.log(reverse(0));
console.log(reverse(-123));
console.log(reverse(1534236469));
