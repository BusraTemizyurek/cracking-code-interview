import { rotateMatrix, rotateMatrixInPlace } from "./rotate-matrix";

describe("rotateMatrixInplace", () => {
  it("returns the 90 degree rotated version of the given matrix", () => {
    const x = [
      [1, 2, 3, 4, 5, 6],
      [7, 8, 9, 10, 11, 12],
      [13, 14, 15, 16, 17, 18],
      [19, 20, 21, 22, 23, 24],
      [25, 26, 27, 28, 29, 30],
      [31, 32, 33, 34, 35, 36],
    ];

    const expectedResult = [
      [31, 25, 19, 13, 7, 1],
      [32, 26, 20, 14, 8, 2],
      [33, 27, 21, 15, 9, 3],
      [34, 28, 22, 16, 10, 4],
      [35, 29, 23, 17, 11, 5],
      [36, 30, 24, 18, 12, 6],
    ];

    const y = rotateMatrixInPlace(x);
    expect(y).toEqual(expectedResult);
  });

  it("returns the given matrix if the length of the matrix is 0", () => {
    const x: [][] = [];

    const y = rotateMatrixInPlace(x);
    expect(y).toEqual(x);
  });
});

describe("rotateMatrix", () => {
  it("returns the 90 degree rotated version of the given matrix", () => {
    const x = [
      [1, 2, 3, 4, 5, 6],
      [7, 8, 9, 10, 11, 12],
      [13, 14, 15, 16, 17, 18],
      [19, 20, 21, 22, 23, 24],
      [25, 26, 27, 28, 29, 30],
      [31, 32, 33, 34, 35, 36],
    ];

    const expectedResult = [
      [31, 25, 19, 13, 7, 1],
      [32, 26, 20, 14, 8, 2],
      [33, 27, 21, 15, 9, 3],
      [34, 28, 22, 16, 10, 4],
      [35, 29, 23, 17, 11, 5],
      [36, 30, 24, 18, 12, 6],
    ];
    expect(rotateMatrix(x)).toEqual(expectedResult);
  });

  it("returns the given matrix if the length of the matrix is 0", () => {
    const x: [][] = [];

    const y = rotateMatrix(x);
    expect(y).toEqual(x);
  });
});
