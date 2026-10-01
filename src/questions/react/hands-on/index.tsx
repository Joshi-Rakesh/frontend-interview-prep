import Calculator from "./calculator/Calculator";
import calculatorCode from "./calculator/Calculator.tsx?raw";
import calculatorUtilityCode from "./calculator/calculator.util.ts?raw";
import CustomDebounce from "./custom-hooks/debounce/CustomDebounce";
import customDebounceCode from "./custom-hooks/debounce/CustomDebounce.tsx?raw";
import useDebounce from "./custom-hooks/debounce/useDebounce.tsx?raw";
import InfiniteTimer from "./infinite-timer/InfiniteTimer";
import infiniteTimerCode from "./infinite-timer/InfiniteTimer.tsx?raw";
import LocalStorageHookUsage from "./custom-hooks/local-storage/LocalStorageHookUsage";
import localStorageHookUsageCode from "./custom-hooks/local-storage/LocalStorageHookUsage.tsx?raw";
import useLocalStorage from "./custom-hooks/local-storage/useLocalStorage.tsx?raw";
import MultipleStateUpdate from "./multiple-state-update/MultipleStateUpdate";
import multipleStateUpdateCode from "./multiple-state-update/MultipleStateUpdate.tsx?raw";
import SearchableProductList from "./searchable-product-list/SearchableProductList";
import searchableProductListCode from "./searchable-product-list/SearchableProductList.tsx?raw";
import { Difficulty } from "../../../utility/difficultyColor";
import InfiniteScroll from "./infinite-scroll/InfiniteScroll";
import infiniteScrollCode from "./infinite-scroll/InfiniteScroll.tsx?raw";
import userServiceCode from "./infinite-scroll/services/userService.ts?raw";

export const reactQuestions = [
  {
    id: "infinite-timer",
    title: "Infinite Timer",
    description:
      "Build a timer that continuously increments every second. The timer should start once you click start, update the UI in real time, and properly clean up intervals to avoid memory leaks.",
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
  {
    id: "searchable-product-list",
    title: "Searchable Product List",
    description:
      "Build a product listing page that fetches products from a remote API and displays them in a responsive card-based layout. Users should be able to search for products by title using a search input, with the displayed list updating dynamically based on the search query",
    difficulty: Difficulty.Easy,
    component: <SearchableProductList />,
    files: [
      {
        fileName: "SearchableProductList.tsx",
        content: searchableProductListCode,
      },
      {
        fileName: "CustomDebounce.tsx",
        content: customDebounceCode,
      },
    ],
  },

  {
    id: "infinite-scroll",
    title: "Infinite Scroll",
    description: "Test Infinite Scroll",
    difficulty: Difficulty.Medium,
    component: <InfiniteScroll />,
    files: [
      {
        fileName: "InfiniteScroll.tsx",
        content: infiniteScrollCode,
      },
      {
        fileName: "userService.ts",
        content: userServiceCode,
      },
    ],
  },
];
