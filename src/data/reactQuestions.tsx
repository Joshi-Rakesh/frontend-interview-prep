import Calculator from "../questions/react/Calculator";
import calculatorCode from "../questions/react/Calculator.tsx?raw";
import CustomDebounce from "../questions/react/customHooks/deouncehook/CustomDebounce";
import customDebounceCode from "../questions/react/customHooks/deouncehook/CustomDebounce.tsx?raw";
import useDebounce from "../questions/react/customHooks/deouncehook/useDebounce.tsx?raw";
import LocalStorageHookUsage from "../questions/react/customHooks/localStorageHook/LocalStorageHookUsage";
import localStorageHookUsageCode from "../questions/react/customHooks/localStorageHook/LocalStorageHookUsage.tsx?raw";
import useLocalStorage from "../questions/react/customHooks/localStorageHook/useLocalStorage.tsx?raw";
import InfiniteTimer from "../questions/react/InfiniteTimer";
import infiniteTimerCode from "../questions/react/InfiniteTimer.tsx?raw";
import MultipleStateUpdate from "../questions/react/MultipleStateUpdate";
import multipleStateUpdateCode from "../questions/react/multipleStateUpdate.tsx?raw";
import calculatorUtilityCode from "../utility/calculator.util.ts?raw";
import { Difficulty } from "../utility/difficultyColor";

export const reactQuestions = [
  {
    id: "infinite-timer",
    title: "Infinite Timer",
    description:
      "Build a timer that continuously increments every second. The timer should start automatically when the component mounts, update the UI in real time, and properly clean up intervals to avoid memory leaks.",
    difficulty: Difficulty.Medium,
    component: <InfiniteTimer />,
    files: [
      {
        fileName: "InfiniteTimer.tsx",
        content: infiniteTimerCode,
      },
    ],
  },
  {
    id: "simple-calculator",
    title: "Simple Calculator",
    description:
      "Build a calculator that supports basic arithmetic operations (+, -, *, /, %). Users should be able to enter numbers using on-screen buttons, evaluate expressions, clear the display, delete the last character, prevent invalid operator sequences, and handle leading zeros correctly.",
    difficulty: Difficulty.Medium,
    component: <Calculator />,
    files: [
      {
        fileName: "Calculator.tsx",
        content: calculatorCode,
      },
      {
        fileName: "calculator.util.ts",
        content: calculatorUtilityCode,
      },
    ],
  },
  {
    id: "Custom-Hook-LocalStorage",
    title: "Local Storage Hook",
    description:
      "Build a custom React hook that synchronizes component state with the browser's localStorage. The hook should initialize state from localStorage when available, fall back to a default value when no stored data exists, and automatically persist state updates so data remains available across page refreshes and browser sessions.",
    difficulty: Difficulty.Medium,
    component: <LocalStorageHookUsage />,
    files: [
      {
        fileName: "LocalStorageHookUsage.tsx",
        content: localStorageHookUsageCode,
      },
      {
        fileName: "useLocalStorage.tsx",
        content: useLocalStorage,
      },
    ],
  },
  {
    id: "multiple-state-update",
    title: "Multiple State Update",
    description:
      "Build a component that demonstrates updating individual state and multiple state variables simultaneously. The component should show how to manage and update several state values in response to user interactions.",
    difficulty: Difficulty.Easy,
    component: <MultipleStateUpdate />,
    files: [
      {
        fileName: "MultipleStateUpdate.tsx",
        content: multipleStateUpdateCode,
      },
    ],
  },
  {
    id: "custom-debounce-hook",
    title: "Debounce Hook",
    description:
      "Create a custom React hook that implements debouncing, delaying value updates until a specified period of inactivity has passed. The hook should reset the timer on every change, return the latest stable value after the delay, and help optimize performance by reducing unnecessary API calls, searches, filtering operations, or other expensive side effects triggered by rapid user input.",
    difficulty: Difficulty.Medium,
    component: <CustomDebounce />,
    files: [
      {
        fileName: "CustomDebounce.tsx",
        content: customDebounceCode,
      },
      {
        fileName: "useDebounce.tsx",
        content: useDebounce,
      },
    ],
  },
];
