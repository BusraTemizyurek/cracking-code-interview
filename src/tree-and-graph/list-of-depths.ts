// Page 121 (109) Q-4.3

import { TNode, ListNode } from "./types";

function helper(
  node: TNode | undefined,
  level: number,
  head: ListNode[],
  tail: ListNode[]
) {
  if (!node) {
    return;
  }
  const newNode: ListNode = {
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

export function createLists(root: TNode): ListNode[] {
  const head: ListNode[] = [];
  const tail: ListNode[] = [];
  helper(root, 0, head, tail);

  return head;
}
