import { findKthToLast1, findKthToLast2 } from "./return-kth-to-last";
import { ListNode } from "../types";

// Sample linked list
const list: ListNode<number> = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
        },
      },
    },
  },
};

describe("findKthToLast1", () => {
  test("kth = 1 (last element)", () => {
    expect(findKthToLast1(list, 1)?.val).toBe(5);
  });

  test("kth = 3 (third to last element)", () => {
    expect(findKthToLast1(list, 3)?.val).toBe(3);
  });

  test("kth = 5 (first element)", () => {
    expect(findKthToLast1(list, 5)?.val).toBe(1);
  });

  test("kth = 6 (out of bounds)", () => {
    expect(findKthToLast1(list, 6)).toBeUndefined();
  });

  test("kth = 0 (invalid kth)", () => {
    expect(findKthToLast1(list, 0)).toBeUndefined();
  });
});

describe("findKthToLast2", () => {
  test("kth = 1 (last element)", () => {
    expect(findKthToLast2(list, 1)?.val).toBe(5);
  });

  test("kth = 3 (third to last element)", () => {
    expect(findKthToLast2(list, 3)?.val).toBe(3);
  });

  test("kth = 5 (first element)", () => {
    expect(findKthToLast2(list, 5)?.val).toBe(1);
  });

  test("kth = 6 (out of bounds)", () => {
    expect(findKthToLast2(list, 6)).toBeUndefined();
  });

  test("kth = 0 (invalid kth)", () => {
    expect(findKthToLast2(list, 0)).toBeUndefined();
  });
});
