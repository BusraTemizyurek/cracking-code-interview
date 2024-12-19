// Page 121 (109) Q-4.3

import { BTNode, ListNode } from "../types";

function helper(
  node: BTNode<number> | undefined,
  level: number,
  head: ListNode<BTNode<number>>[],
  tail: ListNode<BTNode<number>>[]
) {
  if (!node) {
    return;
  }
  const newNode: ListNode<BTNode<number>> = {
    val: node,
  };

  if (level > head.length - 1) {
    head.push(newNode);
    tail.push(newNode);
  } else {
    tail[level].next = newNode;
    tail[level] = newNode;
  }

  helper(node.left, level + 1, head, tail);
  helper(node.right, level + 1, head, tail);
}

export function createLists(root: BTNode<number>): ListNode<BTNode<number>>[] {
  const head: ListNode<BTNode<number>>[] = [];
  const tail: ListNode<BTNode<number>>[] = [];
  helper(root, 0, head, tail);

  return head;
}
