/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
function deleteNode(node) {
  node.val = node.next.val;
  node.next = node.next.next;
}

```
正常杀手需要找到A的把柄才可以杀掉A，
可现在找到A本人后竟然没有可以获取A把柄的途径
A得知我们要杀他，心生一计，可助你完成任务
A说我有B的把柄，你杀了B，我改头换面，以B的身份活着
GC也会自动清理掉B的尸体，没人会知道的
```;
