import { useEffect, useState } from "react";

export const useDebounce = (text: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(text);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(text);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay, text]);

  return debouncedValue;
};
