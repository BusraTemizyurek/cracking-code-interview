// page 102 (90) Q-1.1

export function isUnique(s: string): boolean {
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      const l1 = s[i].charCodeAt(0);
      const l2 = s[j].charCodeAt(0);
      if (l1 === l2) {
        return false;
      }
    }
  }

  return true;
}

// Using data structure
export function checkIfUnique(s: string): boolean {
  const set = new Set<number>();

  for (let i = 0; i < s.length; i++) {
    const l = s[i].charCodeAt(0);
    if (!set.has(l)) {
      set.add(l);
    } else {
      return false;
    }
  }

  return true;
}
