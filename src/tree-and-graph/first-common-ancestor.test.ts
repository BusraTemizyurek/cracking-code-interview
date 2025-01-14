import { findFirstCommonAncestor } from "./first-common-ancestor";
import { BTNode } from "../types";

describe("findFirstCommonAncestor", () => {
  it("returns the root when one of the nodes is the root", () => {
    const n1: BTNode<number> = { val: 1 };
    const n2: BTNode<number> = { val: 2 };
    const n3: BTNode<number> = { val: 3 };
    const n4: BTNode<number> = { val: 4 };

    n1.left = n2;
    n1.right = n3;
    n2.left = n4;

    expect(findFirstCommonAncestor(n1, n1, n3)).toBe(n1);
  });

  it("returns the immediate parent as the first common ancestor of two sibling nodes", () => {
    const n1: BTNode<number> = { val: 1 };
    const n2: BTNode<number> = { val: 2 };
    const n3: BTNode<number> = { val: 3 };
    const n4: BTNode<number> = { val: 4 };
    const n5: BTNode<number> = { val: 5 };
    const n6: BTNode<number> = { val: 6 };
    const n7: BTNode<number> = { val: 7 };

    n1.left = n2;
    n1.right = n3;
    n2.left = n4;
    n2.right = n5;
    n3.right = n6;
    n6.right = n7;

    expect(findFirstCommonAncestor(n1, n4, n5)).toBe(n2);
  });

  it("returns the root as the first common ancestor when nodes are on different subtrees", () => {
    const n1: BTNode<number> = { val: 1 };
    const n2: BTNode<number> = { val: 2 };
    const n3: BTNode<number> = { val: 3 };
    const n4: BTNode<number> = { val: 4 };
    const n5: BTNode<number> = { val: 5 };
    const n6: BTNode<number> = { val: 6 };
    const n7: BTNode<number> = { val: 7 };

    n1.left = n2;
    n1.right = n3;
    n2.left = n4;
    n2.right = n5;
    n3.right = n6;
    n6.right = n7;

    expect(findFirstCommonAncestor(n1, n5, n7)).toBe(n1);
  });

  it("returns the deeper common ancestor when nodes are on the same subtree", () => {
    const n1: BTNode<number> = { val: 1 };
    const n2: BTNode<number> = { val: 2 };
    const n3: BTNode<number> = { val: 3 };
    const n4: BTNode<number> = { val: 4 };
    const n5: BTNode<number> = { val: 5 };
    const n6: BTNode<number> = { val: 6 };
    const n7: BTNode<number> = { val: 7 };

    n1.left = n2;
    n1.right = n3;
    n2.left = n4;
    n2.right = n5;
    n3.right = n6;
    n6.right = n7;

    expect(findFirstCommonAncestor(n1, n3, n7)).toBe(n3);
  });

  it("handles trees without a left subtree", () => {
    const n1: BTNode<number> = { val: 1 };
    const n3: BTNode<number> = { val: 3 };
    const n6: BTNode<number> = { val: 6 };
    const n7: BTNode<number> = { val: 7 };

    n1.right = n3;
    n3.right = n6;
    n6.left = n7;

    expect(findFirstCommonAncestor(n1, n3, n7)).toBe(n3);
  });

  it("handles trees without a right subtree", () => {
    const n1: BTNode<number> = { val: 1 };
    const n2: BTNode<number> = { val: 2 };
    const n4: BTNode<number> = { val: 4 };
    const n5: BTNode<number> = { val: 5 };

    n1.left = n2;
    n2.left = n4;
    n2.right = n5;

    expect(findFirstCommonAncestor(n1, n4, n2)).toBe(n2);
  });

  it("returns undefined when no common ancestor exits", () => {
    const n1: BTNode<number> = { val: 1 };
    const n2: BTNode<number> = { val: 2 };
    const n4: BTNode<number> = { val: 4 };
    const n5: BTNode<number> = { val: 5 };

    n1.left = n2;
    n2.left = n4;

    expect(findFirstCommonAncestor(n1, n2, n5)).toBeUndefined;
    expect(findFirstCommonAncestor(n1, n5, n2)).toBeUndefined;
  });

  it("returns the only node as the common ancestor when the tree has a single node", () => {
    const n1: BTNode<number> = { val: 1 };

    expect(findFirstCommonAncestor(n1, n1, n1)).toBe(n1);
  });

  it("handles large unbalanced trees", () => {
    const n1: BTNode<number> = { val: 1 };
    const n2: BTNode<number> = { val: 2 };
    const n3: BTNode<number> = { val: 3 };
    const n4: BTNode<number> = { val: 4 };

    n1.left = n2;
    n2.left = n3;
    n3.left = n4;

    expect(findFirstCommonAncestor(n1, n3, n4)).toBe(n3);
  });
});
