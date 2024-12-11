// page 102 (90) Q-1.2

export function checkPermutation(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  const map = new Map<string, number>();

  for (let i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) ?? 0) + 1);
  }

  for (let i = 0; i < t.length; i++) {
    const x = map.get(t[i]);
    if (!x) {
      return false;
    }

    if (x - 1 === 0) {
      map.delete(t[i]);
    } else {
      map.set(t[i], x - 1);
    }
  }

  return map.size === 0;
}
