/**
 * 贪心
 * 找局部最优解
 */
function maxProfit(prices) {
  let profit = 0;
  for (let i = 1, l = prices.length; i < l; i += 1) {
    if (prices[i] > prices[i - 1]) {
      profit += prices[i] - prices[i - 1];
    }
  }

  console.log(profit);
  return profit;
}

maxProfit([7, 1, 5, 3, 6, 4]);
