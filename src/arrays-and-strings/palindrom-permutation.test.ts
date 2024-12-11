import { palindromePerm } from "./palindrom-permutation";

describe("palindromePerm", () => {
  it("returns true for a palindrome permutation", () => {
    expect(palindromePerm("Tact Coa")).toBe(true);
    expect(palindromePerm("racecar")).toBe(true);
    expect(palindromePerm("civic")).toBe(true);
  });

  it("returns false for a non-palindrome permutation", () => {
    expect(palindromePerm("hello")).toBe(false);
    expect(palindromePerm("world")).toBe(false);
  });

  it("handles empty string", () => {
    expect(palindromePerm("")).toBe(true);
  });

  it("handles single character strings", () => {
    expect(palindromePerm("a")).toBe(true);
    expect(palindromePerm("Z")).toBe(true);
  });

  it("handles strings with spaces", () => {
    expect(palindromePerm("a a")).toBe(true);
    expect(palindromePerm("a b c b a")).toBe(true);
    expect(palindromePerm("a b c d e")).toBe(false);
  });

  it("handles strings with mixed case", () => {
    expect(palindromePerm("Aa")).toBe(true);
    expect(palindromePerm("Race Car")).toBe(true);
    expect(palindromePerm("No Lemon, No Melon")).toBe(true);
  });

  it("handles strings with special characters", () => {
    expect(palindromePerm("A man, a plan, a canal, Panama")).toBe(false);
    expect(palindromePerm("A man a plan, a canal, Panama")).toBe(true);
    expect(palindromePerm("!@#$")).toBe(false);
    expect(palindromePerm("!@#$!#@")).toBe(true);
  });
});
