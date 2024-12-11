// page 103 (91) Q-1.4

export function palindromePerm(s: string): boolean {
  const set = new Set<string>();

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== " ") {
      const l = s[i].toLowerCase();
      const check = set.has(l);
      if (!check) {
        set.add(l);
      } else {
        set.delete(l);
      }
    }
  }

  return set.size <= 1;
}
