// page 121 (109) Q-4.1

export class TNode {
  val: number;
  neighbors?: TNode[];

  constructor(val: number, neighbors?: TNode[]) {
    this.val = val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
  }
}

function dfs(node: TNode, dest: TNode, visited: Set<number>): boolean {
  if (node === dest) {
    return true;
  }

  if (visited.has(node.val)) {
    return false;
  }

  visited.add(node.val);

  for (const neighbor of node.neighbors ?? []) {
    if (dfs(neighbor, dest, visited)) {
      return true;
    }
  }

  return false;
}

export function isRoute(source: TNode, destination: TNode): boolean {
  const visited = new Set<number>();
  return dfs(source, destination, visited);
}
