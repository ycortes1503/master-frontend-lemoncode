console.log("************** DELIVERABLE 02 *********************");

// concat two arrays
const concatTwoArrays = <T>(a: T[], b: T[]): T[] => {
  if (!Array.isArray(a) && !Array.isArray(b)) {
    return [];
  }

  if (!Array.isArray(a)) {
    return b;
  }

  if (!Array.isArray(b)) {
    return a;
  }

  return [...a, ...b];
};

// concat multiple arrays
const concatMultipleArrays = <T>(...arrays: T[][]): T[] => {
  return arrays.reduce((acc, current) => {
    return concatTwoArrays(acc, current);
  }, []);
};
