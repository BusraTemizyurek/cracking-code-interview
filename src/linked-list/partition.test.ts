import { partition } from "./partition";
import { ListNode } from "../types";

function convertListToArray(list: ListNode<number>): number[] {
  let temp: ListNode<number> | undefined = list;
  const arr: number[] = [];
  while (temp) {
    arr.push(temp.val);
    temp = temp.next;
  }

  return arr;
}

describe("partition", () => {
  it("should partition the list", () => {
    const l3: ListNode<number> = {
      val: 3,
    };
    const l5: ListNode<number> = {
      val: 5,
    };
    const l5n: ListNode<number> = {
      val: 5,
    };
    const l8: ListNode<number> = {
      val: 8,
    };
    const l10: ListNode<number> = {
      val: 10,
    };
    const l2: ListNode<number> = {
      val: 2,
    };
    const l1: ListNode<number> = {
      val: 1,
    };

    l3.next = l5;
    l5.next = l8;
    l8.next = l5n;
    l5n.next = l10;
    l10.next = l2;
    l2.next = l1;

    const result = partition(l3, 5);

    expect(convertListToArray(result)).toStrictEqual([1, 2, 3, 10, 5, 8, 5]);
  });

  it("should handle a list with all elements smaller than the partition", () => {
    const l3: ListNode<number> = {
      val: 3,
    };
    const l2: ListNode<number> = {
      val: 2,
    };
    const l1: ListNode<number> = {
      val: 1,
    };

    l3.next = l2;
    l2.next = l1;

    const result = partition(l3, 5);
    expect(convertListToArray(result)).toStrictEqual([1, 2, 3]);
  });

  it("should handle a list with all elements greater than or equal to the partition", () => {
    const l5: ListNode<number> = {
      val: 5,
    };
    const l8: ListNode<number> = {
      val: 8,
    };
    const l10: ListNode<number> = {
      val: 10,
    };

    l5.next = l8;
    l8.next = l10;

    const result = partition(l5, 4);
    expect(convertListToArray(result)).toStrictEqual([10, 8, 5]);
  });

  it("should handle single element list", () => {
    const l5: ListNode<number> = {
      val: 5,
    };

    const result = partition(l5, 4);
    expect(convertListToArray(result)).toStrictEqual([5]);
  });

  it("should handle list with duplicate elements", () => {
    const l5: ListNode<number> = {
      val: 5,
    };
    const l5s: ListNode<number> = {
      val: 5,
    };
    const l5t: ListNode<number> = {
      val: 5,
    };

    l5.next = l5s;
    l5s.next = l5t;

    const result = partition(l5, 4);
    expect(convertListToArray(result)).toStrictEqual([5, 5, 5]);
  });
});
