import { MyQ } from "./queue-via-stacks";

describe("MyQ", () => {
  it("adds and removes item to/from queue", () => {
    const q = new MyQ();

    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    q.enqueue(4);

    expect(q.dequeue()).toBe(1);
    expect(q.dequeue()).toBe(2);
    expect(q.dequeue()).toBe(3);
    expect(q.dequeue()).toBe(4);
  });

  it("adds and removes item to/from queue", () => {
    const q = new MyQ();

    expect(q.dequeue()).toBe(undefined);
  });
});
