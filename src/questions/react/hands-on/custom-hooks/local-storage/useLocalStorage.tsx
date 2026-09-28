import { useEffect, useState } from "react";

const useLocalStorage = (key: string) => {
  const [inputValue, setInputValue] = useState(() => {
    const exisitingValue = localStorage.getItem(key);
    return exisitingValue !== null ? exisitingValue : "";
  });

  useEffect(() => {
    localStorage.setItem(key, inputValue);
  }, [key, inputValue]);

  return {
    inputValue,
    setInputValue,
  };
};

export default useLocalStorage;
