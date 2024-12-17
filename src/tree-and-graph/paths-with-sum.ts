// page 123(111) Q-4.12

import { BTNode } from "../types";

function getPathsWithSum(
  root: BTNode<number> | undefined,
  sum: number,
  path: BTNode<number>[],
  pathsWithSum: BTNode<number>[][]
) {
  if (!root) {
    return;
  }
  path.push(root);
  const remain = sum - root.val;
  if (remain === 0) {
    pathsWithSum.push([...path]);
  }
  getPathsWithSum(root.left, remain, path, pathsWithSum);
  getPathsWithSum(root.right, remain, path, pathsWithSum);
  path.pop();

  return;
}

export function main(root: BTNode<number>, sum: number): number {
  const pathsWithSum: BTNode<number>[][] = [];
  inorder(root, sum, pathsWithSum);

  return pathsWithSum.length;
}

function inorder(
  root: BTNode<number> | undefined,
  sum: number,
  pathsWithSum: BTNode<number>[][]
) {
  if (!root) {
    return;
  }

  inorder(root.left, sum, pathsWithSum);

  const path: BTNode<number>[] = [];
  getPathsWithSum(root, sum, path, pathsWithSum);

  inorder(root.right, sum, pathsWithSum);
}
