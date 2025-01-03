import { bstSequence } from "./bst-sequence";
import { BTNode } from "../types";

describe("bstSequence", () => {
  it("should return a single sequence for a binary search tree with one node", () => {
    const tree = { val: 1 };
    const result = bstSequence(tree);
    expect(result).toEqual([[tree]]);
  });

  it("should return correct sequences for a binary search tree with two nodes", () => {
    const n1: BTNode<number> = {
      val: 1,
    };
    const n2: BTNode<number> = {
      val: 2,
    };

    n2.left = n1;
    const result = bstSequence(n2);
    expect(result).toEqual([[n2, n1]]);
  });

  it("should return correct sequences for a binary search tree with three nodes", () => {
    const n1: BTNode<number> = {
      val: 1,
    };
    const n2: BTNode<number> = {
      val: 2,
    };
    const n3: BTNode<number> = {
      val: 3,
    };

    n2.left = n1;
    n2.right = n3;

    const result = bstSequence(n2);
    expect(result).toEqual([
      [n2, n1, n3],
      [n2, n3, n1],
    ]);
  });

  it("should handle an unbalanced binary search tree", () => {
    const n1: BTNode<number> = {
      val: 1,
    };
    const n2: BTNode<number> = {
      val: 2,
    };
    const n3: BTNode<number> = {
      val: 3,
    };
    const n4: BTNode<number> = {
      val: 4,
    };

    n3.left = n2;
    n2.left = n1;
    n3.right = n4;

    const result = bstSequence(n3);
    expect(result).toEqual([
      [n3, n2, n1, n4],
      [n3, n2, n4, n1],
      [n3, n4, n2, n1],
    ]);
  });

  it("should return all valid sequences for a complex tree", () => {
    const n3: BTNode<number> = {
      val: 3,
    };
    const n5: BTNode<number> = {
      val: 5,
    };
    const n6: BTNode<number> = {
      val: 6,
    };
    const n7: BTNode<number> = {
      val: 7,
    };
    const n8: BTNode<number> = {
      val: 8,
    };
    const n9: BTNode<number> = {
      val: 9,
    };
    const n10: BTNode<number> = {
      val: 10,
    };

    n6.left = n3;
    n6.right = n7;

    n7.right = n10;
    n10.left = n9;
    n9.left = n8;

    const result = bstSequence(n6);
    expect(result).toEqual([
      [n6, n3, n7, n10, n9, n8],
      [n6, n7, n10, n9, n8, n3],
      [n6, n7, n10, n9, n3, n8],
      [n6, n7, n10, n3, n9, n8],
      [n6, n7, n3, n10, n9, n8],
    ]);
  });
});
