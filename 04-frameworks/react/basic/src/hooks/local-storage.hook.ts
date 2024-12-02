import * as React from "react";

export function useLocalStorage<V>(key: string) {
  const [value, setValue] = React.useState<V>(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue !== "undefined"
      ? (JSON.parse(storedValue) as V)
      : undefined;
  });

  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return { value, setValue };
}
