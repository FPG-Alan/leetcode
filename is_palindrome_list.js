function isPalindrome(head) {
  const nodes = [];
  let currentNode = head;
  while (currentNode) {
    nodes.push(currentNode);
    currentNode = currentNode.next;
  }

  if (nodes.length <= 1) {
    return true;
  }
  for (let i = 0, l = Math.floor(nodes.length / 2); i < l; i += 1) {
    if (nodes[i].val !== nodes[nodes.length - i - 1].val) {
      return false;
    }
  }

  return true;
}

// TEST 1
// --------------------------------------------
const node3 = { val: 1, next: null };
const node2 = { val: 2, next: node3 };
const node1 = { val: 2, next: node2 };
const node0 = { val: 1, next: node1 };

console.log(isPalindrome(node0));
