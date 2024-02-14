console.log("************** DELIVERABLE 01 *********************");

const head = <T>(array: T[]): T => {
  if (!Array.isArray(array)) {
    return undefined;
  }

  const [first] = array;
  return first;
};

const tail = <T>(array: T[]): T[] => {
  if (!Array.isArray(array) || array.length === 1) {
    return [];
  }

  const [, ...rest] = array;
  return rest;
};

const init = <T>(array: T[]): T[] => {
  if (!Array.isArray(array) || array.length === 1) {
    return [];
  }

  const indexLastItem = array.length - 1;
  return array.slice(0, indexLastItem);
};

const last = <T>(array: T[]): T => {
  if (!Array.isArray(array)) {
    return undefined;
  }

  return array[array.length - 1];
};
