import { BTNode } from "../types";

const helper = (
  arr: number[],
  s: number,
  e: number
): BTNode<number> | undefined => {
  if (s > e) {
    return undefined;
  }

  const m = Math.floor((e - s) / 2) + s;
  const root: BTNode<number> = {
    val: arr[m],
  };

  root.left = helper(arr, s, m - 1);
  root.right = helper(arr, m + 1, e);

  return root;
};

export const createMinimalTree = (
  arr: number[]
): BTNode<number> | undefined => {
  if (arr.length === 0) {
    return undefined;
  }

  return helper(arr, 0, arr.length - 1);
};
