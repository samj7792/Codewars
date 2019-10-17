// write a function that returns the positions and the values of the 'peaks' (or local maxima) of a numeric array

const pickPeaks = arr => {
  const posPeaks = {
    pos: [],
    peaks: []
  };
  for (let i = 0; i < arr.length; i++) {
    if (arr[i - 1] < arr[i] && arr[i] >= arr[i + 1]) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
          posPeaks.pos.push(i);
          posPeaks.peaks.push(arr[i]);
          break;
        } else if (arr[i] < arr[j]) {
          break;
        }
      }
    }
  }
  return posPeaks;
};
