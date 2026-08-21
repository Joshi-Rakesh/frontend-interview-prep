import { Button, Tag } from "antd";
import { useState } from "react";

const MultipleStateUpdate = () => {
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
      <h1 className="text-center text-lg border p-2 rounded-md">
        Total: {totalNumbersHandler}
      </h1>
    </div>
  );
};

export default MultipleStateUpdate;
