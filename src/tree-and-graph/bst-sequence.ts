//page 122(110) Q-4.9

import { BTNode } from "../types";

export function bstSequence(
  root: BTNode<number>,
  others: (BTNode<number> | undefined)[] = []
): BTNode<number>[][] {
  const output: BTNode<number>[][] = [];

  if (root.left) {
    output.push(...bstSequence(root.left, [root.right, ...others]));
  }

  if (root.right) {
    output.push(...bstSequence(root.right, [root.left, ...others]));
  }

  for (const other of others) {
    if (!other) {
      continue;
    }

    output.push(
      ...bstSequence(other, [
        root.left,
        root.right,
        ...others.filter((o) => o !== other),
      ])
    );
  }

  if (output.length === 0) {
    return [[root]];
  }

  for (const arr of output) {
    arr.unshift(root);
  }

  return output;
}
