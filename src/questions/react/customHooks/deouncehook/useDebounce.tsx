import { useEffect, useState } from "react";

const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    let timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearInterval(timer);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
