// KEY POINTS FOR INPLACE

// We are doing the placement layer by layer.
// First the outer rectangle then one inside and so on.
// That's why we calculate length by dividing matrix length by 2

// Second for loop starts with outer loop's value (i).
// So that we will not repeat the replacement for the ones replaced before
// For example:
// [   [1,  2,  3,  4,  5,  6],
//     [7,  8,  9,  10, 11, 12],
//     [13, 14, 15, 16, 17, 18],
//     [19, 20, 21, 22, 23, 24],
//     [25, 26, 27, 28, 29, 30],
//     [31, 32, 33, 34, 35, 36],
// ];
// while we are in first cycle (i = 0 and j is increased) we will do placement for 7.
// so , for the next round (i=1) we shouldn't do replacement for 7 (i=1,j=0). That's why
// we should make j start with i (j = i (e.g. j=1 which points number 8))

// Second loop's length should be changed by changing value i.
// It shouldn't point the last item of the current array of the matrix
// as that would be replaced when doing placement for the first item.
// example: for the very first replacement for the previous matrix give above, number 1
// will be replaced wit number 6. if we do replacement for 6 (i=0,j=5) we will affect the
// first replacement done for 1.
// In addition to this the length should be decreased by i as each time (when going to the
// inner layer/rectangle) we should loose the i number of item from the end.
//example: looking at matrix given above: if i = 1 we will start from number 8 which is the part
// of inner layer/rectangle whihc has a an edge of (8,9,10,11). In order to have this edge we need to
// substract the i from the length of the array of the matrix.
// as a summary we will subtract 1 to not repeat the replacement whihc is done for the first item of
// the array and subtract i to get the right edge of the current rectangle/layer

export const rotateMatrixInPlace = (m: number[][]): number[][] => {
  if (m.length === 0) {
    return m;
  }
  const length = Math.floor(m.length / 2);
  for (let i = 0; i < length; i++) {
    for (let j = i; j < m[i].length - 1 - i; j++) {
      const temp = m[i][j];
      m[i][j] = m[m.length - 1 - j][i];
      m[m.length - 1 - j][i] = m[m.length - 1 - i][m.length - 1 - j];
      m[m.length - 1 - i][m.length - 1 - j] = m[j][m.length - 1 - i];
      m[j][m.length - 1 - i] = temp;
    }
  }
  return m;
};

export const rotateMatrix = (m: number[][]): number[][] => {
  if (m.length === 0) {
    return m;
  }
  const newM: number[][] = [];
  for (let i = m.length - 1; i >= 0; i--) {
    for (let j = 0; j < m[i].length; j++) {
      if (newM[j] == undefined) {
        newM.push([]);
      }

      newM[j].push(m[i][j]);
    }
  }
  return newM;
};
