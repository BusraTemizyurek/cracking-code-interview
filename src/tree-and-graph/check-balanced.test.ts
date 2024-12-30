import { isBalanced } from "./check-balanced";
import { BTNode } from "../types";

describe("isBalanced", () => {
  it("returns true for balanced tree", () => {
    const balanced: BTNode<number> = {
      val: 10,
      left: {
        val: 8,
        left: {
          val: 9,
        },
      },
      right: {
        val: 2,
        left: {
          val: 1,
        },
        right: {
          val: 3,
        },
      },
    };

    expect(isBalanced(balanced)).toBe(true);
  });

  it("returns false for unbalanced tree", () => {
    const notBalanced: BTNode<number> = {
      val: 10,
      left: {
        val: 8,
        left: {
          val: 9,
          left: {
            val: 4,
            left: {
              val: 1,
            },
          },
        },
        right: {
          val: 7,
        },
      },
      right: {
        val: 2,
        right: {
          val: 3,
          right: {
            val: 5,
          },
        },
      },
    };

    expect(isBalanced(notBalanced)).toBe(false);
  });

  it("returns true for an empty tree", () => {
    const emptyTree: BTNode<number> | undefined = undefined;

    expect(isBalanced(emptyTree)).toBe(true);
  });

  it("returns true for a single-node tree", () => {
    const singleNodeTree: BTNode<number> = {
      val: 1,
    };
    expect(isBalanced(singleNodeTree)).toBe(true);
  });

  it("returns true for a tree with one child", () => {
    const oneChildTree: BTNode<number> = {
      val: 1,
      left: {
        val: 2,
      },
    };

    expect(isBalanced(oneChildTree)).toBe(true);
  });

  it("returns false for a tree with only left subtree deeply unbalanced", () => {
    const leftUnbalancedTree: BTNode<number> = {
      val: 1,
      left: {
        val: 2,
        left: {
          val: 3,
          left: {
            val: 4,
          },
        },
      },
    };

    expect(isBalanced(leftUnbalancedTree)).toBe(false);
  });

  it("returns false for a tree with only right subtree deeply unbalanced", () => {
    const rightUnbalancedTree: BTNode<number> = {
      val: 1,
      right: {
        val: 2,
        right: {
          val: 3,
          right: {
            val: 4,
          },
        },
      },
    };

    expect(isBalanced(rightUnbalancedTree)).toBe(false);
  });
});
