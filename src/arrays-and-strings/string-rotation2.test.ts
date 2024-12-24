import { isSubstring2 } from "./string-rotation";

describe("isSubstring", () => {
  it("returns true when second string is the substring of the first string", () => {
    const s1 = "waterbottle";
    const s2 = "terbottlewa";

    expect(isSubstring2(s1, s2)).toBe(true);
  });

  it("returns false when strings are not in the same length", () => {
    const s1 = "waterbole";
    const s2 = "terbottlewa";

    expect(isSubstring2(s1, s2)).toBe(false);
  });

  it("returns true when strings are exact same", () => {
    const s1 = "waterbottle";
    const s2 = "waterbottle";

    expect(isSubstring2(s1, s2)).toBe(true);
  });

  it("returns false when the second string is empty", () => {
    const s1 = "waterbottle";
    const s2 = "";

    expect(isSubstring2(s1, s2)).toBe(false);
  });

  it("returns false when the first string is empty", () => {
    const s1 = "";
    const s2 = "waterbottle";

    expect(isSubstring2(s1, s2)).toBe(false);
  });

  it("returns false when the second string is not the rotated version of the first string", () => {
    const s1 = "terbottlewe";
    const s2 = "waterbottle";

    expect(isSubstring2(s1, s2)).toBe(false);
  });
});
