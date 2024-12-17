import { findPathsWithsum } from "./paths-with-sum";
import { BTNode } from "../types";

describe("main function", () => {
  it("works for simple tree", () => {
    const root1: BTNode<number> = {
      val: 5,
      left: { val: 3, left: { val: 2 }, right: { val: 1 } },
      right: { val: -2, left: { val: 1 }, right: { val: 6 } },
    };
    const sum1 = 8;

    expect(findPathsWithsum(root1, sum1)).toBe(1);
  });

  it("works for tree with multiple paths", () => {
    const root2: BTNode<number> = {
      val: 10,
      left: {
        val: 5,
        left: { val: 3, left: { val: 3 }, right: { val: -2 } },
        right: { val: 2, right: { val: 1 } },
      },
      right: {
        val: -3,
        right: { val: 11 },
      },
    };
    const sum2 = 8;

    expect(findPathsWithsum(root2, sum2)).toBe(3);
  });

  it("works for tree with no path", () => {
    const root3: BTNode<number> = {
      val: 1,
      left: { val: 2 },
      right: { val: 3 },
    };
    const sum3 = 10;

    expect(findPathsWithsum(root3, sum3)).toBe(0);
  });

  it("works for tree with just 1 node in path", () => {
    const root4: BTNode<number> = {
      val: -10,
      left: { val: 9 },
      right: {
        val: 20,
        left: { val: 15 },
        right: { val: 7 },
      },
    };
    const sum4 = 7;

    expect(findPathsWithsum(root4, sum4)).toBe(1);
  });
});
