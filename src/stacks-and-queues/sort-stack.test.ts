import { SortStack } from "./sort-stack";

describe("SortStack", () => {
  it("pushes items to the empty stack", () => {
    const s = new SortStack();
    s.push(8);
    expect(s.stack).toEqual([8]);
  });

  it("pushes bigger item such that the smallest items are at the top", () => {
    const s = new SortStack();
    s.push(8);
    s.push(9);
    s.push(10);
    expect(s.stack).toEqual([10, 9, 8]);
  });

  it("pushes smaller item such that the smallest items are at the top", () => {
    const s = new SortStack();
    s.push(8);
    s.push(9);
    s.push(7);
    expect(s.stack).toEqual([9, 8, 7]);
  });

  it("pops the item at the top, which is the smallest", () => {
    const s = new SortStack();
    s.push(8);
    s.push(9);
    s.push(7);
    expect(s.pop()).toBe(7);
    expect(s.stack).toEqual([9, 8]);

    s.push(10);
    s.push(3);
    s.pop();
    expect(s.stack).toEqual([10, 9, 8]);
  });

  it("peeks the item at the top, which is the smallest", () => {
    const s = new SortStack();
    s.push(8);
    s.push(9);
    s.push(7);
    expect(s.peek()).toBe(7);
    s.pop();
    expect(s.stack).toEqual([9, 8]);
    expect(s.peek()).toBe(8);
  });

  it("isEmpty returns true if stack is empty", () => {
    const s = new SortStack();
    s.push(8);
    s.push(9);
    s.push(7);

    s.pop();
    s.pop();
    s.pop();
    expect(s.isEmpty()).toEqual(true);
  });

  it("isEmpty returns false if stack is not empty", () => {
    const s = new SortStack();
    s.push(8);
    s.push(9);
    s.push(7);

    s.pop();
    s.pop();

    expect(s.isEmpty()).toBe(false);
  });

  it("pop returns undefined when stack is empty", () => {
    const s = new SortStack();
    s.push(8);
    s.push(9);
    s.push(7);

    s.pop();
    s.pop();
    s.pop();
    expect(s.pop()).toBeUndefined;
  });

  it("peek returns undefined when stack is empty", () => {
    const s = new SortStack();
    s.push(8);
    s.push(9);
    s.push(7);

    s.pop();
    s.pop();
    s.pop();
    expect(s.peek()).toBeUndefined;
  });
});
