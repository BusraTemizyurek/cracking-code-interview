import { createLists } from "./list-of-depths";
import { BTNode } from "../types";
import { ListNode } from "../types";

describe("createLists", () => {
  it("returns ListNode array includes lists for each level of a binary tree", () => {
    const n100: BTNode<number> = { val: 100 };
    const n50: BTNode<number> = { val: 50 };
    const n150: BTNode<number> = { val: 150 };
    const n25: BTNode<number> = { val: 25 };
    const n75: BTNode<number> = { val: 75 };
    const n125: BTNode<number> = { val: 125 };
    const n200: BTNode<number> = { val: 200 };
    const n20: BTNode<number> = { val: 20 };
    const n110: BTNode<number> = { val: 110 };

    n100.left = n50;
    n100.right = n150;

    n50.left = n25;
    n50.right = n75;

    n25.left = n20;

    n150.left = n125;
    n150.right = n200;

    n125.left = n110;

    const l1: ListNode<BTNode<number>> = { val: n100 };

    const l2: ListNode<BTNode<number>> = { val: n50 };
    const l3: ListNode<BTNode<number>> = { val: n150 };

    const l4: ListNode<BTNode<number>> = { val: n25 };
    const l5: ListNode<BTNode<number>> = { val: n75 };
    const l6: ListNode<BTNode<number>> = { val: n125 };
    const l7: ListNode<BTNode<number>> = { val: n200 };

    const l8: ListNode<BTNode<number>> = { val: n20 };
    const l9: ListNode<BTNode<number>> = { val: n110 };

    l2.next = l3;

    l4.next = l5;
    l5.next = l6;
    l6.next = l7;

    l8.next = l9;

    const result = [l1, l2, l4, l8];

    expect(createLists(n100)).toStrictEqual(result);
  });

  it("returns ListNode array includes lists for each level of a binary tree with only one node", () => {
    const n100: BTNode<number> = { val: 100 };
    const l1: ListNode<BTNode<number>> = { val: n100 };

    const result = [l1];

    expect(createLists(n100)).toStrictEqual(result);
  });
});
