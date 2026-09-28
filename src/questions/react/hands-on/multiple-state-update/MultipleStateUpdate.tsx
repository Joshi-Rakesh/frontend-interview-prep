import { Button } from "antd";
import { useState } from "react";
import { useAppTheme } from "../../../../themeProvider/useAppTheme";

const MultipleStateUpdate = () => {
  const { darkMode } = useAppTheme();
  const [numbersArray, setNumbersArray] = useState<number[]>([
    ...Array(4).fill(0),
  ]);

  const additionhandler = (index: number) => {
    setNumbersArray((prevValues) => {
      const currentNumber = prevValues[index];
      const updatedValues = prevValues.map((value, i) =>
        i === index ? currentNumber + 1 : value,
      );
      return updatedValues;
    });
  };

  const subtractionHandler = (index: number) => {
    setNumbersArray((prevValues) => {
      const currentNumber = prevValues[index];
      const updatedValues = prevValues.map((value, i) =>
        i === index ? currentNumber - 1 : value,
      );
      return updatedValues;
    });
  };

  const totalNumbersHandler = numbersArray.reduce((acc, curr) => {
    return acc + curr;
  }, 0);

  return (
    <div className="flex flex-col gap-4">
      {numbersArray?.map((number, index) => {
        return (
          <div className="flex gap-4 items-center" key={index}>
            <Button onClick={() => additionhandler(index)}>Add</Button>
            <p className="text-md font-semibold">{number}</p>
            <Button onClick={() => subtractionHandler(index)}>Subtract</Button>
          </div>
        );
      })}
      <h1
        className={`text-center text-lg border p-2 rounded-md ${
          darkMode ? "border-gray-700" : "border-gray-300"
        }`}
      >
        {totalNumbersHandler}
      </h1>
    </div>
  );
};

export default MultipleStateUpdate;
