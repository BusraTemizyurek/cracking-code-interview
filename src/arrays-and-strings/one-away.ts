export function oneAway(s: string, t: string): boolean {
  if (s.length !== t.length) {
    if (Math.abs(t.length - s.length) > 1) {
      return false;
    }
  }

  let i1 = 0;
  let i2 = 0;
  let isDiffFound = false;

  // pale
  // ple
  while (i1 < s.length && i2 < t.length) {
    const codeOfS = s[i1].charCodeAt(0);
    const codeOfT = t[i2].charCodeAt(0);

    if (codeOfS !== codeOfT) {
      if (isDiffFound) {
        return false;
      }
      isDiffFound = true;

      if (s.length > t.length) {
        i2--;
      }
      if (t.length > s.length) {
        i1--;
      }
    }
    i1++;
    i2++;
  }

  return true;
}
