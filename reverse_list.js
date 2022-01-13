/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function reverseList(head) {
  if (!head) {
    return null;
  }
  if (head.next) {
    const newHead = reverseList(head.next);
    // 递归后， head.next就是尾节点
    head.next.next = head;
    head.next = null;
    return newHead;
  } else {
    return head;
  }
}

function reverseList2(head) {
  if (!head) {
    return null;
  }

  if (!head.next) {
    return head;
  }
  const nodeList = [head];
  let currentNode = head;

  while (currentNode.next) {
    nodeList.unshift(currentNode.next);
    currentNode = currentNode.next;
  }

  for (let i = 0, l = nodeList.length - 1; i < l; i += 1) {
    nodeList[i].next = nodeList[i + 1];
  }

  nodeList[nodeList.length - 1].next = null;

  return nodeList[0];
}

// TEST 1
// --------------------------------------------
const node3 = { val: 4, next: null };
const node2 = { val: 3, next: node3 };
const node1 = { val: 2, next: node2 };
const node0 = { val: 1, next: node1 };

console.log(reverseList2(node0));
