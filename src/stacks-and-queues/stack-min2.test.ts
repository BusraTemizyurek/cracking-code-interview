import { StackMin } from "./stack-min2";

describe("StackMin", () => {
  let stack: StackMin;

  beforeEach(() => {
    stack = new StackMin();
  });

  it("push and min should work correctly for a single element", () => {
    stack.push(10);
    expect(stack.min()).toBe(10);
  });

  it("push and min should work correctly for multiple elements", () => {
    stack.push(10);
    stack.push(20);
    stack.push(5);

    expect(stack.min()).toBe(5); // Minimum after pushing 10, 20, 5
    stack.pop(); // Minimum after popping 5
    expect(stack.min()).toBe(10);
    stack.pop();
    stack.pop();

    stack.push(1);
    stack.push(3);
    stack.push(0);
    expect(stack.min()).toBe(0);
    stack.pop();
    expect(stack.min()).toBe(1);
  });

  it("pop should return the correct value and update min", () => {
    stack.push(10);
    stack.push(20);
    stack.push(5);

    expect(stack.pop()).toBe(5); // Pop the top element
    expect(stack.min()).toBe(10); // Minimum updates to 10

    expect(stack.pop()).toBe(20); // Pop 20
    expect(stack.min()).toBe(10); // Minimum remains 10

    expect(stack.pop()).toBe(10); // Pop 10
    expect(stack.min()).toBeUndefined(); // Stack is empty, min is undefined
  });

  it("min should return undefined for an empty stack", () => {
    expect(stack.min()).toBeUndefined();
  });

  it("pop should return undefined for an empty stack", () => {
    expect(stack.pop()).toBeUndefined();
  });

  it("should handle mixed push and pop operations", () => {
    stack.push(15);
    stack.push(10);
    stack.push(25);

    expect(stack.min()).toBe(10); // Minimum is 10

    expect(stack.pop()).toBe(25); // Pop 25
    expect(stack.min()).toBe(10); // Minimum remains 10

    stack.push(5);
    expect(stack.min()).toBe(5); // Minimum updates to 5

    expect(stack.pop()).toBe(5); // Pop 5
    expect(stack.min()).toBe(10); // Minimum updates to 10
  });
});
