import { isRouteExist } from "./route-between-nodes-1";

describe("isRouteExist returns true if a route exists between given nodes", () => {
  const graph = new Map<number, number[]>();
  graph.set(1, [2, 3]);
  graph.set(2, [1, 3, 5]);
  graph.set(3, [4]);
  graph.set(6, []);

  it("isRouteExist returns true when the route exists between directly connected nodes", () => {
    expect(isRouteExist(graph, 2, 5)).toBe(true);
  });

  it("isRouteExist returns false when the route doesn't exist between nodes, not connected in any way", () => {
    expect(isRouteExist(graph, 3, 5)).toBe(false);
  });

  it("isRouteExist returns true when source and destination are connected through an intermediate node.", () => {
    expect(isRouteExist(graph, 1, 4)).toBe(true);
  });

  it("isRouteExist returns true when graph contains a cycle, and a route exists to the destination.", () => {
    expect(isRouteExist(graph, 1, 5)).toBe(true);
  });

  it("isRouteExist returns true when route to self", () => {
    expect(isRouteExist(graph, 1, 1)).toBe(true);
  });

  it("isRouteExist returns false when the graph is disconnected", () => {
    expect(isRouteExist(graph, 5, 6)).toBe(false);
  });
});
