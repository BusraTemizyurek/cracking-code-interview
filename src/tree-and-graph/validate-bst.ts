// page 122 (110) Q-4.5

import { TNode } from "../types";

export function getMax(root: TNode<number>): number {
  return root.right ? getMax(root.right) : root.val;
}

export function getMin(root: TNode<number>): number {
  return root.left ? getMin(root.left) : root.val;
}

export function validateBST(root: TNode<number> | undefined): boolean {
  if (!root) {
    return true;
  }

  const left = root.left ? root.left.val < root.val : true;
  const right = root.right ? root.right.val > root.val : true;

  if (!left || !right) {
    return false;
  }

  const leftSubtree = root.left ? getMax(root.left) < root.val : true;
  const rightSubtree = root.right ? getMin(root.right) > root.val : true;

  if (!leftSubtree || !rightSubtree) {
    return false;
  }

  const leftCheck = root.left ? validateBST(root.left) : true;
  const rightCheck = root.right ? validateBST(root.right) : true;

  return leftCheck && rightCheck;
}
