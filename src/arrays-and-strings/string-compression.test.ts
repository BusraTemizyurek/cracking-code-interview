import { compressString } from "./string-compression";

describe("compressString", () => {
  it("compress string when compressed version is smaller then the original", () => {
    const s = "aabbbbbc"; // len = 8
    const t = "a2b5c1"; //ln = 6
    expect(compressString(s)).toBe(t); // t
  });

  it("doesn't change the string when compressed version is bigger then the original", () => {
    const x = "ac"; // len = 2
    const t = "a1c1"; //ln = 4
    expect(compressString(x)).toBe(x); // x
  });

  it("returns the original string when string is empty", () => {
    const x = ""; // len = 2
    expect(compressString(x)).toBe(x); // x
  });

  it("returns the original string when string length is 1", () => {
    const x = "a"; // len = 2
    const t = "a1"; //ln = 4
    expect(compressString(x)).toBe(x); // x
  });
});
