import { getLoopStartingNode } from "./loop-detection";
import { ListNode } from "../types";

describe("getLoopStartingNode", () => {
  test("should return the node where the loop starts", () => {
    const l1: ListNode<number> = { val: 1 };
    const l2: ListNode<number> = { val: 2 };
    const l3: ListNode<number> = { val: 3 };

    l1.next = l2;
    l2.next = l3;
    l3.next = l2;
    const result = getLoopStartingNode(l1);
    expect(result?.val).toBe(2);
  });

  test("should return undefined for a list without a loop", () => {
    const l1: ListNode<number> = { val: 1 };
    const l2: ListNode<number> = { val: 2 };
    const l3: ListNode<number> = { val: 3 };

    l1.next = l2;
    l2.next = l3;

    const result = getLoopStartingNode(l1);
    expect(result).toBeUndefined();
  });

  test("should handle a single node without a loop", () => {
    const list: ListNode<number> = { val: 1 };

    const result = getLoopStartingNode(list);
    expect(result).toBeUndefined();
  });

  test("should handle a single node with a loop", () => {
    const list: ListNode<number> = { val: 1 };
    list.next = list; // Self-loop

    const result = getLoopStartingNode(list);
    expect(result?.val).toBe(1);
  });
});
