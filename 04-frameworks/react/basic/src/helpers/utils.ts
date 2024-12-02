export const isNullOrUndefined = (value: unknown): boolean => {
  return value === null || value === undefined;
};

export const hasText = (value: string): boolean => {
  return !isNullOrUndefined(value) && typeof value === 'string' && value.trim().length > 0;
};
