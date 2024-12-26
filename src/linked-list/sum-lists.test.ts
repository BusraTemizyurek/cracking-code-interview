import { sumListGlobal } from "./sum-lists";
import { ListNode } from "../types";

describe("sumListGlobal", () => {
  it("returns sum of given numbers in a forward format", () => {
    // 617 (forward)
    const num1: ListNode<number> = {
      val: 6,
      next: {
        val: 1,
        next: {
          val: 7,
        },
      },
    };

    // 295 (forward)
    const num2: ListNode<number> = {
      val: 2,
      next: {
        val: 9,
        next: {
          val: 5,
        },
      },
    };

    const result: ListNode<number> = {
      val: 9,
      next: {
        val: 1,
        next: {
          val: 2,
        },
      },
    };

    expect(sumListGlobal(num1, num2, true)).toEqual(result);
  });

  it("returns sum of given numbers in a forward format when one of the numbers has more digits than the other one", () => {
    // 617 (forward)
    const num1: ListNode<number> = {
      val: 6,
      next: {
        val: 1,
        next: {
          val: 7,
        },
      },
    };

    // 29 (forward)
    const num2: ListNode<number> = {
      val: 2,
      next: {
        val: 9,
      },
    };

    const result: ListNode<number> = {
      val: 6,
      next: {
        val: 4,
        next: {
          val: 6,
        },
      },
    };

    expect(sumListGlobal(num1, num2, true)).toEqual(result);
  });

  it("returns sum of given numbers in a forward format when one of the numbers is zero", () => {
    // 617 (forward)
    const num1: ListNode<number> = {
      val: 6,
      next: {
        val: 1,
        next: {
          val: 7,
        },
      },
    };

    // 29 (forward)
    const num2: ListNode<number> = {
      val: 0,
    };

    const result: ListNode<number> = {
      val: 6,
      next: {
        val: 1,
        next: {
          val: 7,
        },
      },
    };

    expect(sumListGlobal(num1, num2, true)).toEqual(result);
  });

  it("returns sum of given numbers in a reverse format", () => {
    // 617 (reverse)
    const n1: ListNode<number> = {
      val: 7,
      next: {
        val: 1,
        next: {
          val: 6,
        },
      },
    };

    // 295 (reverse)
    const n2: ListNode<number> = {
      val: 5,
      next: {
        val: 9,
        next: {
          val: 2,
        },
      },
    };

    const result: ListNode<number> = {
      val: 2,
      next: {
        val: 1,
        next: {
          val: 9,
        },
      },
    };

    expect(sumListGlobal(n1, n2, false)).toEqual(result);
  });

  it("returns sum of given numbers in a reverse format", () => {
    // 610 (reverse)
    const n1: ListNode<number> = {
      val: 0,
      next: {
        val: 1,
        next: {
          val: 6,
        },
      },
    };

    // 295 (reverse)
    const n2: ListNode<number> = {
      val: 5,
      next: {
        val: 9,
        next: {
          val: 2,
        },
      },
    };

    const result: ListNode<number> = {
      val: 5,
      next: {
        val: 0,
        next: {
          val: 9,
        },
      },
    };

    expect(sumListGlobal(n1, n2, false)).toEqual(result);
  });

  it("returns sum of single-digit numbers in forward format", () => {
    const num1: ListNode<number> = { val: 5 };
    const num2: ListNode<number> = { val: 7 };

    const result: ListNode<number> = { val: 1, next: { val: 2 } };

    expect(sumListGlobal(num1, num2, true)).toEqual(result);
  });

  it("handles leading zeros in the input lists", () => {
    const num1: ListNode<number> = {
      val: 0,
      next: {
        val: 0,
        next: {
          val: 3,
        },
      },
    };
    const num2: ListNode<number> = { val: 5 };

    const result: ListNode<number> = {
      val: 5,
      next: { val: 0, next: { val: 3 } },
    };

    expect(sumListGlobal(num1, num2, false)).toEqual(result);
  });
});
