import { Button, Input } from "antd";
import { useState } from "react";
import { calculatorFunctions, operators } from "../../utility/calculator.util";

const Calculator = () => {
  const [inputValue, setInputValue] = useState("");

  const evalHandler = () => {
    const updatedValue = eval(inputValue);
    setInputValue(String(updatedValue));
  };

  const funcHandler = (e: string) => {
    if (!e) return;

    if (e === "C") {
      setInputValue("");
      return;
    }

    if (e === "Del") {
      setInputValue((prev) => prev.substring(0, prev.length - 1));
      return;
    }

    if (e === "=") {
      evalHandler();
      return;
    }

    const lastChar = inputValue.slice(-1);
    if (operators.includes(lastChar) && operators.includes(e)) {
      setInputValue((prev) => {
        const currentInput = prev.substring(0, prev.length - 1);
        return currentInput.concat(e);
      });
      return;
    }

    setInputValue((prev) => {
      const parts = prev.split(/([+\-*/%])/);
      const lastPart = parts[parts.length - 1];

      if (lastPart === "0" && /\d/.test(e)) {
        return prev.slice(0, -1) + e;
      }
      return prev + e;
    });
  };

  return (
    <div className="flex flex-col gap-3 p-8 border rounded-md">
      <div className="flex justify-between items-center">
        <label className="text-start">CASIO</label>
        <label className="text-start underline">2nd Edition</label>
      </div>

      <Input
        size="large"
        className="h-20 text-4xl! tracking-[0.2rem]!"
        value={inputValue}
        readOnly
      />

      <div className="grid grid-cols-4 gap-4">
        {calculatorFunctions.map((func) => {
          return (
            <Button size="large" onClick={() => funcHandler(func)}>
              {func}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default Calculator;
