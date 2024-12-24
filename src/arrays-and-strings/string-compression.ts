// page 103 (91) Q-1.6

export function compressString(s: string): string {
  if (s.length <= 1) {
    return s;
  }

  const map = new Map<string, number>();
  let t = "";

  for (let i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) ?? 0) + 1);
  }

  const arr = [...map.entries()];

  for (let i = 0; i < arr.length; i++) {
    t += `${arr[i][0]}${arr[i][1]}`;
  }

  return t.length > s.length ? s : t;
}
