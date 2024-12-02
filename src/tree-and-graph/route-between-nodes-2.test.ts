import { isRoute, TNode } from "./route-between-nodes-2";

describe("isRoute returns true if a route exists between given nodes", () => {
  const x = new TNode(1);
  const y = new TNode(2);
  const z = new TNode(3);
  const t = new TNode(4);
  const k = new TNode(5);
  const l = new TNode(6);

  x.neighbors = [y, z];
  y.neighbors = [x, z, k];
  z.neighbors = [t];

  it("isRoute returns true when the route exists between directly connected nodes", () => {
    expect(isRoute(y, k)).toBe(true);
  });

  it("isRoute returns false when the route doesn't exist between nodes, not connected in any way", () => {
    expect(isRoute(z, k)).toBe(false);
  });

  it("isRoute returns true when source and destination are connected through an intermediate node.", () => {
    expect(isRoute(x, t)).toBe(true);
  });

  it("isRoute returns true when graph contains a cycle, and a route exists to the destination.", () => {
    expect(isRoute(x, k)).toBe(true);
  });

  it("isRoute returns true when route to self", () => {
    expect(isRoute(x, x)).toBe(true);
  });

  it("isRoute returns false when the graph is disconnected", () => {
    expect(isRoute(k, l)).toBe(false);
  });
});
