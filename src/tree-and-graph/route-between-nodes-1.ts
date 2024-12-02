// page 121 (109) Q-4.1

function dfs2(
  root: Map<number, number[]>,
  node: number,
  dest: number,
  visited: Set<number>
): boolean {
  if (node === dest) {
    return true;
  }

  if (visited.has(node)) {
    return false;
  }

  visited.add(node);

  for (const neighbor of root.get(node) ?? []) {
    if (dfs2(root, neighbor, dest, visited)) {
      return true;
    }
  }

  return false;
}

export function isRouteExist(
  root: Map<number, number[]>,
  source: number,
  dest: number
): boolean {
  const visited = new Set<number>();
  return dfs2(root, source, dest, visited);
}
