//page 122(110) Q-4.8

import { BTNode } from "../types";

function traverse(root: BTNode<number>, n: BTNode<number>): boolean {
  return (
    root === n ||
    (!!root.left && traverse(root.left, n)) ||
    (!!root.right && traverse(root.right, n))
  );
}

export function findFirstCommonAncestor(
  root: BTNode<number>,
  n1: BTNode<number>,
  n2: BTNode<number>
): BTNode<number> | undefined {
  if (root === n1 || root === n2) {
    return root;
  }

  if (
    root.left &&
    root.right &&
    ((traverse(root.left, n1) && traverse(root.right, n2)) ||
      (traverse(root.left, n2) && traverse(root.right, n1)))
  ) {
    return root;
  }

  if (root.left && traverse(root.left, n1) && traverse(root.left, n2)) {
    return findFirstCommonAncestor(root.left, n1, n2);
  }

  if (root.right && traverse(root.right, n1) && traverse(root.right, n2)) {
    return findFirstCommonAncestor(root.right, n1, n2);
  }

  return undefined;
}
