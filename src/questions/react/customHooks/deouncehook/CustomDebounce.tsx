import { Input } from "antd";
import { useState } from "react";
import useDebounce from "./useDebounce";

const CustomDebounce = () => {
  const [debounceHookInputValue, setDebounceHookInputValue] = useState("");
  const debouncedValue = useDebounce(debounceHookInputValue, 1000);

  return (
    <div className="flex flex-col gap-1">
      <label>Debounce hook</label>
      <Input
        placeholder="type here...."
        value={debounceHookInputValue}
        onChange={(e) => setDebounceHookInputValue(e.target.value)}
      />
      {debouncedValue && (
        <p className="text-lg">
          API call: <span className="text-3xl">🔫</span>
        </p>
      )}
    </div>
  );
};

export default CustomDebounce;
