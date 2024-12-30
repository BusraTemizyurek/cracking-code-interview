// page 122 (110) Q-4.4

import { BTNode } from "../types";

function checkHeight(node: BTNode<number> | undefined): number {
  if (!node) {
    return 0;
  }

  return Math.max(checkHeight(node.left), checkHeight(node.right)) + 1;
}

export function isBalanced(root: BTNode<number> | undefined): boolean {
  if (!root) {
    return true;
  }
  const left = checkHeight(root.left);
  const right = checkHeight(root.right);
  const diff = Math.abs(left - right);

  return diff <= 1 && isBalanced(root.left) && isBalanced(root.right);
}
