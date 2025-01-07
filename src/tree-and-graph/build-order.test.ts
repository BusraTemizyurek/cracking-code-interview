import { buildOrder } from "./build-order";

describe("buildOrder", () => {
  it("throws error for empty projects array", () => {
    const pr: string[] = [];
    const dep = [
      ["a", "d"],
      ["f", "b"],
      ["b", "d"],
      ["f", "a"],
      ["d", "c"],
    ];

    expect(() => buildOrder(pr, dep)).toThrow();
  });

  it("returns build order for the projects", () => {
    const pr = ["a", "b", "c", "d", "e", "f"];
    const dep = [
      ["a", "d"],
      ["f", "b"],
      ["b", "d"],
      ["f", "a"],
      ["d", "c"],
    ];

    expect(buildOrder(pr, dep)).toEqual(["f", "a", "b", "d", "c", "e"]);
  });

  it("returns projects if no dependency available", () => {
    const pr = ["a", "b", "c", "d", "e", "f"];
    const dep: string[][] = [];

    expect(buildOrder(pr, dep)).toEqual(["a", "b", "c", "d", "e", "f"]);
  });

  it("throws error for project orders in cycles", () => {
    const x = ["a", "b", "c"];
    const y = [
      ["a", "b"],
      ["b", "c"],
      ["c", "a"],
    ];

    expect(() => buildOrder(x, y)).toThrow();
  });
});
