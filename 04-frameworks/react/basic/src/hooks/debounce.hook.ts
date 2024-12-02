import { DEFAULT_DELAY } from "constants/app.constants";
import * as React from "react";

export const useDebounce = (
  text: string,
  delayTime?: number
): { debouncedText: string } => {
  const delay = delayTime || DEFAULT_DELAY;
  const [debouncedText, setDebouncedText] = React.useState<string>(text);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedText(text);
    }, delay);

    return () => clearTimeout(timer);
  }, [text, delay]);

  return { debouncedText };
};
