//page 122(110) Q-4.7

function dfs(
  pr: string,
  map: Map<string, string[]>,
  visited: Set<string>,
  result: string[]
) {
  if (visited.has(pr) && !result.includes(pr)) {
    throw new Error("no build option");
  }

  if (visited.has(pr)) {
    return;
  }

  visited.add(pr);

  if (result.includes(pr)) {
    return;
  }

  const dependencies = map.get(pr);
  if (!dependencies || dependencies.length === 0) {
    result.push(pr);
    return;
  }

  for (const d of dependencies) {
    dfs(d, map, visited, result);
  }

  if (!result.includes(pr)) {
    result.push(pr);
  }
}

export function buildOrder(
  projects: string[],
  dependencies: string[][]
): string[] | undefined {
  if (projects.length === 0) {
    throw new Error("no projects tp build");
  }

  if (dependencies.length === 0) {
    return projects;
  }

  const map = new Map<string, string[]>();
  for (const d of dependencies) {
    const f = d[0];
    const s = d[1];

    let item = map.get(s);
    if (!item) {
      item = [];
      map.set(s, item);
    }
    item.push(f);
  }
  const visited = new Set<string>();
  const result: string[] = [];

  for (const pr of projects) {
    dfs(pr, map, visited, result);
  }

  return result;
}
