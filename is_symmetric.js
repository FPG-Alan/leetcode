// 给你一个二叉树的根节点 root ， 检查它是否轴对称。
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
 * @return {boolean}
 */
// let left = null;
// let right = null;
const result = [];
var isSymmetric = function (root) {
  if (root.left) {
    isSymmetric(root.left);
  }

  if (root.right) {
    isSymmetric(root.right);
  }
  result.push(root.val);
  return false;
};

// 递归版本
// -------------------------------------------------------------
// 先序遍历
const result1 = [];
function recursion_preOrderTraversal(root) {
  result1.push(root.val);
  if (root.left) {
    recursion_preOrderTraversal(root.left);
  }

  if (root.right) {
    recursion_preOrderTraversal(root.right);
  }
}

// 中序遍历
const result2 = [];
function recursion_middleOrderTraversal(root) {
  if (root.left) {
    recursion_middleOrderTraversal(root.left);
  }
  result2.push(root.val);
  if (root.right) {
    recursion_middleOrderTraversal(root.right);
  }
}

// 后序遍历
const result3 = [];
function recursion_postOrderTraversal(root) {
  if (root.left) {
    recursion_postOrderTraversal(root.left);
  }

  if (root.right) {
    recursion_postOrderTraversal(root.right);
  }

  result3.push(root.val);
}

// 循环版本
// -------------------------------------------------------------
// 先序遍历
const result4 = [];
function preOrderTraversal(root) {
  const stack = [];
  let currentNode = root;

  while (currentNode) {
    result4.push(currentNode.val);

    if (currentNode.right) {
      stack.push(currentNode);
    }
    if (currentNode.left) {
      currentNode = currentNode.left;
    } else {
      const prev = stack.pop();
      currentNode = (prev && prev.right) || null;
    }
  }
}

const result41 = [];
function preOrderTraversal1(root) {
  const stack = [];
  let currentNode = root;

  while (currentNode || stack.length > 0) {
    if (currentNode) {
      stack.push(currentNode);
      result41.push(currentNode.val);
      currentNode = currentNode.left;
    } else {
      currentNode = stack.pop().right;
    }
  }
}

// 中序遍历
const result5 = [];
function middleOrderTraversal(root) {
  const stack = [];
  let currentNode = root;

  while (stack.length > 0 || currentNode) {
    if (currentNode) {
      stack.push(currentNode);
      currentNode = currentNode.left;
    } else {
      currentNode = stack.pop();
      result5.push(currentNode.val);
      currentNode = currentNode.right;
    }
  }
}

// 后序遍历
const result6 = [];
function postOrderTraversal(root) {
  const stack = [];
  let currentNode = root;
  let lastVisit = root;
  while (stack.length > 0 || currentNode) {
    while (currentNode) {
      stack.push(currentNode);
      currentNode = currentNode.left;
    }

    currentNode = stack[stack.length - 1];

    if (!currentNode.right || currentNode.right === lastVisit) {
      result6.push(currentNode.val);
      stack.pop();
      lastVisit = currentNode;
      currentNode = null;
    } else {
      currentNode = currentNode.right;
    }
  }
}

const result7 = [];
function postOrderTraversal1(root) {
  const stack = [];
  let currentNode = root;
  let visited = root;
  while (currentNode || stack.length > 0) {
    if (currentNode) {
      stack.push(currentNode);
      currentNode = currentNode.left;
    } else {
      currentNode = stack[stack.length - 1];

      if (!currentNode.right || visited === currentNode.right) {
        result7.push(currentNode.val);
        stack.pop();
        visited = currentNode;
        currentNode = null;
      } else {
        currentNode = currentNode.right;
      }
    }
    console.log(stack);
  }
}

const root = {
  val: 1,
  left: {
    val: 2,
    left: { val: 3, left: null, right: null },
    right: { val: 4, left: null, right: null },
  },
  right: {
    val: 2,
    left: { val: 4, left: null, right: null },
    right: { val: 3, left: null, right: null },
  },
};
// isSymmetric(root);
// console.log(result);

const root_test = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: {
        val: 6,
        left: { val: 7, left: null, right: null },
        right: { val: 8, left: null, right: null },
      },
    },
    right: null,
  },
  right: {
    val: 3,
    left: null,
    right: {
      val: 5,
      left: null,
      right: null,
    },
  },
};
// recursion_preOrderTraversal(root_test);
// console.log(result1);
// recursion_middleOrderTraversal(root_test);
// console.log(result2);
// recursion_postOrderTraversal(root_test);
// console.log(result3);

// preOrderTraversal(root_test);
// console.log(result4);
// preOrderTraversal1(root_test);
// console.log(result41);

// middleOrderTraversal(root_test);
// console.log(result5);

// postOrderTraversal(root_test);
// console.log(result6);

postOrderTraversal1(root_test);
console.log(result7);
