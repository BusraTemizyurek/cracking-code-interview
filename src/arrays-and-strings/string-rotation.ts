// page 103(91) Q-1.9

//solution1
export function isSubstring1(s1: string, s2: string): boolean {
  if (s1.length !== s2.length) {
    return false;
  }

  if (s1 === s2) {
    return true;
  }

  let index: number | undefined = undefined;
  for (let i = 0; i < s2.length; i++) {
    if (s2[i] === s1[0]) {
      index = i;
    }
  }

  if (index) {
    let length = s1.length;
    let index1 = 0;
    while (length > 0) {
      if (s1[index1] !== s2[index]) {
        return false;
      }
      index1++;
      if (index === s1.length - 1) {
        index = 0;
      } else {
        index++;
      }
      length--;
    }
    return true;
  }
  return false;
}

//solution 2
export function isSubstring2(s1: string, s2: string): boolean {
  if (s1.length !== s2.length) {
    return false;
  }

  if (s1 === s2) {
    return true;
  }

  const t = s2 + s2;
  return t.includes(s1);
}
