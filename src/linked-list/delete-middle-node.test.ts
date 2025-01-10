import { ListNode } from "../types";
import { removeMiddleNode } from "./delete-middle-node";

describe("removeMiddleNode", () => {
  it("removes the given middle node from the list", () => {
    const a: ListNode<string> = {
      val: "a",
    };
    const b: ListNode<string> = {
      val: "b",
    };
    const c: ListNode<string> = {
      val: "c",
    };
    const d: ListNode<string> = {
      val: "d",
    };
    const e: ListNode<string> = {
      val: "e",
    };

    a.next = b;
    b.next = c;
    c.next = d;
    d.next = e;

    removeMiddleNode(c);
    expect(b.next.val).toBe("d");
    expect(d.next.val).toBe("e");
  });

  it("removes the given middle node from the list", () => {
    const a: ListNode<string> = {
      val: "a",
    };
    const b: ListNode<string> = {
      val: "b",
    };
    const c: ListNode<string> = {
      val: "c",
    };
    const d: ListNode<string> = {
      val: "d",
    };
    const e: ListNode<string> = {
      val: "e",
    };

    a.next = b;
    b.next = c;
    c.next = d;
    d.next = e;

    removeMiddleNode(d);
    expect(c.next.val).toBe("e");
  });

  it("doesn't change if the given node is not the middle node", () => {
    const a: ListNode<string> = {
      val: "a",
    };
    const b: ListNode<string> = {
      val: "b",
    };

    const c: ListNode<string> = {
      val: "c",
    };

    a.next = b;

    removeMiddleNode(b);
    expect(a.next.val).toBe("b");
  });
});
