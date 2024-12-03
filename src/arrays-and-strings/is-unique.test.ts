import { isUnique, checkIfUnique } from "./is-unique";

describe("isUnique", () => {
  it("returns false if the string contains duplicate characters, including spaces", () => {
    const str = "Bu sr aB";
    expect(isUnique(str)).toBe(false);
  });

  it("returns true if the string contains duplicate characters, regardless of case", () => {
    const str2 = "Busrb";
    expect(isUnique(str2)).toBe(true);
  });

  it("returns true if all characters in the string are unique", () => {
    const str3 = "Busra";
    expect(isUnique(str3)).toBe(true);
  });
});

describe("checkIfUnique", () => {
  it("returns false if the string contains duplicate characters, including spaces", () => {
    const str = "Bu sr aB";
    expect(checkIfUnique(str)).toBe(false);
  });

  it("returns false if the string contains duplicate characters, regardless of case", () => {
    const str2 = "Busrb";
    expect(checkIfUnique(str2)).toBe(true);
  });

  it("returns true if all characters in the string are unique", () => {
    const str3 = "Busra";
    expect(checkIfUnique(str3)).toBe(true);
  });
});
