import Calculator from "../questions/react/Calculator";
import calculatorCode from "../questions/react/Calculator.tsx?raw";
import InfiniteTimer from "../questions/react/InfiniteTimer";
import infiniteTimerCode from "../questions/react/InfiniteTimer.tsx?raw";
import calculatorUtilityCode from "../utility/calculator.util.ts?raw";

export const reactQuestions = [
  {
    id: "infinite-timer",
    title: "Infinite Timer",
    description:
      "Build a timer that continuously increments every second. The timer should start automatically when the component mounts, update the UI in real time, and properly clean up intervals to avoid memory leaks.",
    difficulty: "Medium",
    component: <InfiniteTimer />,
    code: infiniteTimerCode,
  },
  {
    id: "simple-calculator",
    title: "Simple Calculator",
    description:
      "Build a calculator that supports basic arithmetic operations (+, -, *, /, %). Users should be able to enter numbers using on-screen buttons, evaluate expressions, clear the display, delete the last character, prevent invalid operator sequences, and handle leading zeros correctly.",
    difficulty: "Medium",
    component: <Calculator />,
    code: calculatorCode,
    utilityCode: calculatorUtilityCode,
  },
];
