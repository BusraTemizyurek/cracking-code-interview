import { TNode } from "../types";
import { getMax, getMin, validateBST } from "./validate-bst";

describe("validate-bst", () => {
  it("validate-bst function returns true for bst", () => {
    const treeBST: TNode<number> = {
      val: 50,
      left: {
        val: 25,
        left: {
          val: 20,
          left: {
            val: 10,
          },
        },
        right: {
          val: 30,
        },
      },
      right: {
        val: 75,
        left: {
          val: 60,
        },
        right: {
          val: 100,
          left: {
            val: 80,
          },
        },
      },
    };
    expect(validateBST(treeBST)).toBe(true);
  });

  it("getMax function returns max value of bst", () => {
    const treeBST: TNode<number> = {
      val: 50,
      left: {
        val: 25,
        left: {
          val: 20,
          left: {
            val: 10,
          },
        },
        right: {
          val: 30,
        },
      },
      right: {
        val: 75,
        left: {
          val: 60,
        },
        right: {
          val: 100,
          left: {
            val: 80,
          },
        },
      },
    };
    expect(getMax(treeBST)).toBe(100);
  });

  it("getMin function returns min value of bst", () => {
    const treeBST: TNode<number> = {
      val: 50,
      left: {
        val: 25,
        left: {
          val: 20,
          left: {
            val: 10,
          },
        },
        right: {
          val: 30,
        },
      },
      right: {
        val: 75,
        left: {
          val: 60,
        },
        right: {
          val: 100,
          left: {
            val: 80,
          },
        },
      },
    };
    expect(getMin(treeBST)).toBe(10);
  });

  it("validates bst as false", () => {
    const tree: TNode<number> = {
      val: 50,
      left: {
        val: 25,
        left: {
          val: 20,
          left: {
            val: 10,
          },
        },
        right: {
          val: 55,
        },
      },
      right: {
        val: 75,
        left: {
          val: 60,
        },
        right: {
          val: 100,
          left: {
            val: 80,
          },
        },
      },
    };
    expect(validateBST(tree)).toBe(false);
  });
});
