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

// function getPath(root: BTNode<number>, n: BTNode<number>) {
//   const s: BTNode<number>[] = [root];
//   const visited = new Set<BTNode<number>>();

//   while (s[s.length - 1] !== n) {
//     const temp = s[s.length - 1];
//     if (!temp) {
//       return undefined;
//     }
//     visited.add(temp);

//     if (temp.left && !visited.has(temp.left)) {
//       s.push(temp.left);
//     } else if (temp.right && !visited.has(temp.right)) {
//       s.push(temp.right);
//     } else {
//       s.pop();
//     }
//   }

//   return s;
// }

// // optional solution for O(n) time complexity

// export const getFirstCommonAncestor = (
//   root: BTNode<number>,
//   n1: BTNode<number>,
//   n2: BTNode<number>
// ) => {
//   if (root === n1 || root === n2) {
//     return root;
//   }

//   const s1 = getPath(root, n1);
//   const s2 = getPath(root, n2);

//   if (!s1 || !s2) {
//     return undefined;
//   }

//   const bigger = s1.length > s2.length ? s1 : s2;
//   const smaller = bigger === s1 ? s2 : s1;

//   for (let i = smaller.length - 1; i >= 0; i--) {
//     if (smaller[i] === bigger[i]) {
//       return smaller[i];
//     }
//   }

//   // Not Found
//   return undefined;
// };
