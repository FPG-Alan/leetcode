/**
 * 有效 二叉搜索树定义如下：
 * - 节点的左子树只包含 小于 当前节点的数。
 * - 节点的右子树只包含 大于 当前节点的数。
 * - 所有左子树和右子树自身必须也是二叉搜索树。
 */
function isValidBST(root) {
  return isValidBST_inner(root, Infinity, -Infinity);
}

function isValidBST_inner(root, max, min) {
  if (root === null) {
    return true;
  }

  if (root.val >= max || root.val <= min) {
    return false;
  }

  return (
    isValidBST_inner(root.left, root.val, min) &&
    isValidBST_inner(root.right, max, root.val)
  );
}

// 中序遍历
let prev = -Infinity;
function isValidBST2(root) {
  if (root === null) {
    return true;
  }

  const leftValid = isValidBST(root.left);
  if (prev >= root.val) {
    return false;
  }
  prev = root.val;

  const rightValid = isValidBST(root.right);

  return leftValid && rightValid;
}

const root = {
  val: 10,
  left: { val: 5, left: null, right: null },
  right: {
    val: 15,
    left: { val: 6, left: null, right: null },
    right: { val: 20, left: null, right: null },
  },
};

const root0 = {
  val: 0,
  left: null,
  right: null,
};

const root1 = {
  val: 5,
  left: { val: 1, left: null, right: null },
  right: {
    val: 4,
    left: { val: 3, left: null, right: null },
    right: { val: 6, left: null, right: null },
  },
};

const root2 = {
  val: 2,
  left: {
    val: 1,
    left: null,
    right: null,
  },
  right: {
    val: 3,
    left: null,
    right: null,
  },
};
console.log(isValidBST2(root0));
