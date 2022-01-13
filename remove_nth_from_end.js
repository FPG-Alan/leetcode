/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

function removeNthFromEnd(head, n) {
  const nodeOfIndex = [head];
  let currentNode = head;
  while (currentNode.next) {
    currentNode = currentNode.next;
    nodeOfIndex.unshift(currentNode);
  }

  if (nodeOfIndex[n]) {
    nodeOfIndex[n].next = nodeOfIndex[n - 2] || null;
  } else if (nodeOfIndex[n - 2]) {
    // 要删除的节点没有前面的节点(就是head节点)
    return nodeOfIndex[n - 2];
  } else {
    // 要删除的节点没有前面的节点(就是head节点)
    // 且， 也没有后面的节点(没有新的head节点)
    return null;
  }

  return head;
}

// TEST 1
// --------------------------------------------
// const node3 = { val: 4, next: null };
// const node2 = { val: 3, next: node3 };
// const node1 = { val: 2, next: node2 };
// const node0 = { val: 1, next: node1 };

// console.log(removeNthFromEnd(node3, 2));

// TEST 2
// --------------------------------------------
// const node3 = { val: 4, next: null };

// console.log(removeNthFromEnd(node3, 1));

// TEST 3
// --------------------------------------------
// const node3 = { val: 4, next: null };
// const node2 = { val: 3, next: node3 };

// console.log(removeNthFromEnd(node2, 2));
