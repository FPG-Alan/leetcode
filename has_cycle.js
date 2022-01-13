// 执行用时：284 ms, 在所有 JavaScript 提交中击败了5.29%的用户
// 内存消耗：41.1 MB, 在所有 JavaScript 提交中击败了17.97%的用户
function hasCycle(head) {
  if (!head) {
    return false;
  }

  let currentNode = head.next;
  if (!currentNode) {
    return false;
  }

  const nodes = [];
  while (currentNode) {
    if (nodes.find((node) => node === currentNode)) {
      return true;
    } else {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }
  }

  return false;
}

// 快慢指针
// 执行用时：72 ms, 在所有 JavaScript 提交中击败了92.94%的用户
// 内存消耗：40.1 MB, 在所有 JavaScript 提交中击败了85.49%的用户
function hasCycle2(head) {
  if (!head) {
    return false;
  }

  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}

// 还可以逐个删除
