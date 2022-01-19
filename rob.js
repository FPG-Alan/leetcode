/**
 *
 * 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，
 * 影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，
 * 如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
 * 给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。
 */
function rob(nums) {
  // let max = prev = nums[0];
  if (nums.length === 1) {
    return nums[0];
  }
  const dp = [];
  dp[0] = nums[0];
  dp[1] = Math.max(nums[1], nums[0]);
  for (let i = 2, l = nums.length; i < l; i += 1) {
    // ~~let tmp = [...dp];~~
    // ~~tmp.pop();~~
    // ~~当前的值等于“之前的值里， 去掉上一个之后， 的最大值”~~
    // ~~dp[i] = Math.max(...tmp) + nums[i];~~
    // 偷这间房间， 就需要看偷前面隔一个房间的结果， 加上这件房间的现金
    // 但是若上一个房间的结果更大， 就应该选择上一个房间的结果， 这间房间可以不偷

    // 上面注释掉的想法就是错误的，
    // dp[i]是指 “到第i个房间， 可以偷到的最大金额”
    // 而不是 “偷第i个房间的话， 可以偷到的最大金额”
    dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2]);
  }

  console.log(dp);
  return dp[dp.length - 1];
}

function rob2(nums) {
  if (nums.length < 3) {
    return Math.max(nums[0] || 0, nums[1] || 0);
  }
  const dp = [nums[0], Math.max(nums[0], nums[1])];
  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
  }

  console.log(dp);
  return dp[nums.length - 1];
}

console.log(rob([2, 1, 1, 2]));
console.log(rob([2, 7, 9, 3, 1]));
