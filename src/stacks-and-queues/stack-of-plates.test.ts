import { SetOfStacks } from "./stack-of-plates";

describe("SetofStacks", () => {
  it("should initialize with the given threshold", () => {
    const stacks = new SetOfStacks(5);
    expect(stacks.stack).toEqual([]);
  });

  it("should use default threshold of 10 if not provided", () => {
    const stacks = new SetOfStacks(undefined as any);
    for (let i = 1; i <= 10; i++) {
      stacks.push(i);
    }
    expect(stacks.stack.length).toBe(1);
    stacks.push(11);
    expect(stacks.stack.length).toBe(2);
  });

  it("should create a new stack when the current stack exceeds the threshold", () => {
    const stacks = new SetOfStacks(3);
    stacks.push(1);
    stacks.push(2);
    stacks.push(3);
    stacks.push(4);
    expect(stacks.stack.length).toBe(2);
    expect(stacks.stack).toEqual([[1, 2, 3], [4]]);
  });

  it("should pop an element from the last stack", () => {
    const stacks = new SetOfStacks(3);
    stacks.push(1);
    stacks.push(2);
    stacks.push(3);
    stacks.push(4);
    stacks.pop();
    expect(stacks.stack).toEqual([[1, 2, 3]]);
  });

  it("should remove an empty stack after popping the last element", () => {
    const stacks = new SetOfStacks(3);
    stacks.push(1);
    stacks.push(2);
    stacks.push(3);
    stacks.push(4);
    stacks.pop();
    stacks.pop();
    stacks.pop();
    stacks.pop();
    expect(stacks.stack).toEqual([]);
  });

  it("should pop an element from a specific stack using popAt", () => {
    const stacks = new SetOfStacks(3);
    stacks.push(1);
    stacks.push(2);
    stacks.push(3);
    stacks.push(4);
    stacks.push(5);
    stacks.popAt(0);
    expect(stacks.stack).toEqual([
      [1, 2],
      [4, 5],
    ]);
  });

  it("should handle popping from an empty stack gracefully", () => {
    const stacks = new SetOfStacks(3);
    stacks.push(1);
    stacks.pop();
    stacks.pop(); // This pop should not throw an error
    expect(stacks.stack).toEqual([]);
  });

  it("works well for mixed function usage", () => {
    const stack = new SetOfStacks(3);

    stack.push(1);
    stack.push(2);
    stack.push(3);

    stack.push(4);
    stack.push(5);
    stack.push(6);

    stack.push(7);
    stack.pop();

    const result = [
      [1, 2, 3],
      [4, 5, 6],
    ];
    expect(stack.stack).toEqual(result);

    stack.pop();
    const result2 = [
      [1, 2, 3],
      [4, 5],
    ];

    expect(stack.stack).toEqual(result2);

    stack.pop();
    stack.pop();
    const result3 = [[1, 2, 3]];

    expect(stack.stack).toEqual(result3);
  });
});
