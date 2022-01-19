/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  if (nums.length === 0) {
    return null;
  }

  return sortedArrayToBSTHelp(nums, 0, nums.length - 1);
};

function sortedArrayToBSTHelp(nums, start, end) {
  if (start > end) {
    return null;
  }

  const mid = Math.floor((start + end) / 2);

  const root = new TreeNode(
    nums[mid].val,
    sortedArrayToBSTHelp(nums, start, mid - 1),
    sortedArrayToBSTHelp(nums, mid + 1, end)
  );

  return root;
}
