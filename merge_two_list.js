/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function mergeTwoList(list1, list2) {
  const listNodes = [];
  let currentNode = list1;
  while (currentNode) {
    listNodes.push(currentNode);
    currentNode = currentNode.next;
  }
  currentNode = list2;
  while (currentNode) {
    listNodes.push(currentNode);
    currentNode = currentNode.next;
  }

  if (listNodes.length > 0) {
    listNodes.sort((a, b) => a.val - b.val);
    for (let i = 0, l = listNodes.length - 1; i < l; i += 1) {
      listNodes[i].next = listNodes[i + 1];
    }

    listNodes[listNodes.length - 1].next = null;

    console.log(listNodes.length);
    return listNodes[0];
  } else {
    return null;
  }
}

function mergeTwoList2(list1, list2) {
  const resultHead = { val: -1, next: null };
  let curResultHead = resultHead;
  let head1 = list1;
  let head2 = list2;

  while (head1 && head2) {
    if (head1.val < head2.val) {
      curResultHead.next = head1;
      head1 = head1.next;
    } else {
      curResultHead.next = head2;
      head2 = head2.next;
    }

    curResultHead = curResultHead.next;
  }

  if (head1) {
    curResultHead.next = head1;
  } else {
    curResultHead.next = head2;
  }

  return resultHead.next;
}

// TEST 1
// --------------------------------------------
const node3 = { val: 4, next: null };
const node2 = { val: 3, next: node3 };
const node1 = { val: 2, next: node2 };
const node0 = { val: 1, next: node1 };

const node33 = { val: 8, next: null };
const node22 = { val: 6, next: node33 };
const node11 = { val: 3, next: node22 };
const node00 = { val: 1, next: node11 };

console.log(mergeTwoList(node0, node00));
