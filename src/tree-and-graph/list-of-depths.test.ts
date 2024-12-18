import { createLists } from "./list-of-depths";
import { TNode } from "./types";
import { ListNode } from "./types";

describe("createLists", () => {
  it("returns ListNode array includes lists for each level of a binary tree", () => {
    const n100: TNode = { val: 100 };
    const n50: TNode = { val: 50 };
    const n150: TNode = { val: 150 };
    const n25: TNode = { val: 25 };
    const n75: TNode = { val: 75 };
    const n125: TNode = { val: 125 };
    const n200: TNode = { val: 200 };
    const n20: TNode = { val: 20 };
    const n110: TNode = { val: 110 };

    n100.left = n50;
    n100.right = n150;

    n50.left = n25;
    n50.right = n75;

    n25.left = n20;

    n150.left = n125;
    n150.right = n200;

    n125.left = n110;

    const l1: ListNode = { val: n100 };

    const l2: ListNode = { val: n50 };
    const l3: ListNode = { val: n150 };

    const l4: ListNode = { val: n25 };
    const l5: ListNode = { val: n75 };
    const l6: ListNode = { val: n125 };
    const l7: ListNode = { val: n200 };

    const l8: ListNode = { val: n20 };
    const l9: ListNode = { val: n110 };

    l2.next = l3;

    l4.next = l5;
    l5.next = l6;
    l6.next = l7;

    l8.next = l9;

    const result = [l1, l2, l4, l8];

    expect(createLists(n100)).toStrictEqual(result);
  });

  it("returns ListNode array includes lists for each level of a binary tree with only one node", () => {
    const n100: TNode = { val: 100 };
    const l1: ListNode = { val: n100 };

    const result = [l1];

    expect(createLists(n100)).toStrictEqual(result);
  });
});
