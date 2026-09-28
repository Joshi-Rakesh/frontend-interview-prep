import { Input } from "antd";
import useLocalStorage from "./useLocalStorage";

const LocalStorageHookUsage = () => {
  const { inputValue, setInputValue } = useLocalStorage(
    "storage-hook-input-value",
  );

  return (
    <div>
      <Input
        placeholder="type here...."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
};

export default LocalStorageHookUsage;
