// 层序遍历二叉树（即逐层地，从左到右访问所有节点）。
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const result = [];
var levelOrder = function (root) {
  if (!root) {
    return [];
  }
  let need_visit = [root];
  const result = [];

  while (need_visit.length > 0) {
    const currentVisit = [...need_visit];
    const tempResult = [];

    need_visit = [];
    for (let i = 0, l = currentVisit.length; i < l; i += 1) {
      tempResult.push(currentVisit[i].val);

      if (currentVisit[i].left) {
        need_visit.push(currentVisit[i].left);
      }

      if (currentVisit[i].right) {
        need_visit.push(currentVisit[i].right);
      }
    }

    result.push(tempResult);
  }

  return result;
};
