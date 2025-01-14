import { BTNode } from "../types";
import { createMinimalTree } from "./minimal-tree";

describe("createMinimalTree", () => {
  it("returns a tree with minimal depth", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const r1: BTNode<number> = { val: 1 };
    const r2: BTNode<number> = { val: 2 };
    const r3: BTNode<number> = { val: 3 };
    const r4: BTNode<number> = { val: 4 };
    const r5: BTNode<number> = { val: 5 };
    const r6: BTNode<number> = { val: 6 };
    const r7: BTNode<number> = { val: 7 };

    r4.left = r2;
    r4.right = r6;
    r2.left = r1;
    r2.right = r3;
    r6.left = r5;
    r6.right = r7;

    expect(JSON.stringify(createMinimalTree(arr), null, 2)).toBe(
      JSON.stringify(r4, null, 2)
    );
  });

  it("returns a tree with minimal depth when arr length is even", () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const r1: BTNode<number> = { val: 1 };
    const r2: BTNode<number> = { val: 2 };
    const r3: BTNode<number> = { val: 3 };
    const r4: BTNode<number> = { val: 4 };
    const r5: BTNode<number> = { val: 5 };
    const r6: BTNode<number> = { val: 6 };

    r3.left = r1;
    r3.right = r5;
    r1.right = r2;
    r5.left = r4;
    r5.right = r6;

    expect(JSON.stringify(createMinimalTree(arr), null, 2)).toBe(
      JSON.stringify(r3, null, 2)
    );
  });

  it("returns undefined if given array is empty", () => {
    const arr: number[] = [];

    expect(createMinimalTree(arr)).toBeUndefined;
  });

  it("returns a tree with minimal depth when arr length is one", () => {
    const arr = [1];
    const r1: BTNode<number> = { val: 1 };

    expect(JSON.stringify(createMinimalTree(arr), null, 2)).toBe(
      JSON.stringify(r1, null, 2)
    );
  });
});
