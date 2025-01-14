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

// optional solution for O(n) time complexity

const getPath = (s: BTNode<number>[], n: BTNode<number>) => {
  const visited = new Set<BTNode<number>>();

  while (s[s.length - 1] !== n) {
    const temp = s[s.length - 1];
    if (!temp) {
      return undefined;
    }
    visited.add(temp);

    if (temp.left && !visited.has(temp.left)) {
      s.push(temp.left);
    } else if (temp.right && !visited.has(temp.right)) {
      s.push(temp.right);
    } else {
      s.pop();
    }
  }
  return s;
};

export const getFirstCommonAncestor = (
  root: BTNode<number>,
  n1: BTNode<number>,
  n2: BTNode<number>
): BTNode<number> | undefined => {
  if (root === n1 || root === n2) {
    return root;
  }

  let s1: BTNode<number>[] | undefined = [root];
  let s2: BTNode<number>[] | undefined = [root];

  s1 = getPath(s1, n1);
  s2 = getPath(s2, n2);

  if (!s1 || !s2) {
    return undefined;
  }

  let s = s1.length > s2.length ? s1 : s2;
  while (s1.length !== s2.length) {
    s.pop();
  }

  while (s.length > 0) {
    const p1 = s1.pop();
    const p2 = s2.pop();

    if (p1 === p2) {
      return p1;
    }
  }
  return undefined;
};

// optional solution-2 for O(n) time complexity

export const firstCommonAncestor = (
  root: BTNode<number> | undefined,
  n1: BTNode<number>,
  n2: BTNode<number>
): BTNode<number> | undefined => {
  if (!root) {
    return undefined;
  }

  if (root === n1 || root === n2) {
    return root;
  }

  const left = firstCommonAncestor(root.left, n1, n2);
  const right = firstCommonAncestor(root.right, n1, n2);

  if (right && left) {
    return root;
  }

  return left ?? right;
};
