console.log("************** DELIVERABLE 03 *********************");

function isNullOrUndefined<T>(value: T): boolean {
  return value === null || value === undefined;
}

function clone(source: object): object {
  if (isNullOrUndefined(source)) {
    return {};
  }

  return { ...source };
}

function merge(source: object, target: object): object {
  if (isNullOrUndefined(source) && isNullOrUndefined(target)) {
    return {};
  }

  if (isNullOrUndefined(source)) {
    return target;
  }

  if (isNullOrUndefined(target)) {
    return source;
  }

  const clonedSource = clone(source);
  const clonedTarget = clone(target);

  return { ...clonedTarget, ...clonedSource };
}
