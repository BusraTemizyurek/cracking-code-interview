import { checkPermutation } from "./check-permutation";

describe("checkPerm", () => {
  it("returns false if the two strings are not permutations of each other", () => {
    const s = "ala";
    const t = "alt";

    expect(checkPermutation(s, t)).toBe(false);
  });

  it("returns false if the two strings are not permutations of each other due to different lengths", () => {
    const s = "ala";
    const t = "alta";

    expect(checkPermutation(s, t)).toBe(false);
  });

  it("returns false when one of the strings is empty", () => {
    const s = "ala";
    const t = "";

    expect(checkPermutation(s, t)).toBe(false);
  });

  it("returns true when both strings are empty", () => {
    const s = "";
    const t = "";

    expect(checkPermutation(s, t)).toBe(true);
  });

  it("returns true if the two strings are permutations of each other", () => {
    const s = "print";
    const t = "trpin";

    expect(checkPermutation(s, t)).toBe(true);
  });

  it("returns false if the two strings are not permutations of each other due to case sensitivity", () => {
    const s = "Print";
    const t = "trpin";

    expect(checkPermutation(s, t)).toBe(false);
  });
});
