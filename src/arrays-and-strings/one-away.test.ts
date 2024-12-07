import { oneAway } from "./one-away";

describe("oneAway", () => {
  it("should return true for strings that are one insert away", () => {
    expect(oneAway("pale", "ple")).toBe(true); // Insert 'a' in 'ple' to make 'pale'
    expect(oneAway("abc", "ab")).toBe(true); // Insert 'c' in 'ab' to make 'abc'
  });

  it("should handle case sensitivity", () => {
    expect(oneAway("Pale", "pale")).toBe(true); // Different cases
    expect(oneAway("Pale", "pales")).toBe(false); // Different cases
    expect(oneAway("pale", "Pale")).toBe(true); // Different cases
  });

  it("should return true for strings that are one removal away", () => {
    expect(oneAway("pales", "pale")).toBe(true); // Remove 's' from 'pales' to make 'pale'
    expect(oneAway("hello", "helo")).toBe(true); // Remove 'l' from 'hello' to make 'helo'
  });

  it("should return true for strings that are one replacement away", () => {
    expect(oneAway("pale", "bale")).toBe(true); // Replace 'p' with 'b' to make 'bale'
    expect(oneAway("apple", "apble")).toBe(true); // Replace 'p' with 'b'
  });

  it("should return false for strings that require more than one edit", () => {
    expect(oneAway("pale", "bake")).toBe(false); // Requires two edits
    expect(oneAway("hello", "world")).toBe(false); // Requires multiple edits
    expect(oneAway("abc", "defgh")).toBe(false); // Length difference > 1
  });

  it("should return true for identical strings", () => {
    expect(oneAway("pale", "pale")).toBe(true); // No edits needed
    expect(oneAway("", "")).toBe(true); // Both strings are empty
  });

  it("should handle edge cases with empty strings", () => {
    expect(oneAway("", "a")).toBe(true); // Insert 'a' to make identical
    expect(oneAway("a", "")).toBe(true); // Remove 'a' to make identical
    expect(oneAway("", "abc")).toBe(false); // Length difference > 1
  });

  it("should return false for completely different strings of the same length", () => {
    expect(oneAway("abc", "xyz")).toBe(false); // Requires three edits
  });

  it("should handle strings with length difference greater than 1", () => {
    expect(oneAway("short", "longer")).toBe(false); // Length difference > 1
    expect(oneAway("a", "abcde")).toBe(false); // Length difference > 1
  });
});
