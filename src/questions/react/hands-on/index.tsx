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
import InvokeModal from "./modal/InvokeModal";
import invokeModalCode from "./modal/InvokeModal.tsx?raw";
import modalCode from "./modal/Modal.tsx?raw";
import PaginationUsage from "./pagination/PaginationUsage";
import paginationUsageCode from "./pagination/PaginationUsage.tsx?raw";
import paginationCode from "./pagination/Pagination.tsx?raw";
import paginationUtileCode from "./pagination/utils/paginationUtils.ts?raw";
import paginationInterface from "./pagination/interface.ts?raw";
import breadcrumbsCode from "./breadcrumbs/Breadcrumbs.tsx?raw";
import breadcrumbsLayoutCode from "./breadcrumbs/BreadCrumbsLayout.tsx?raw";
import productCategoriesCode from "./breadcrumbs/products/ProductCategories.tsx?raw";
import productsCode from "./breadcrumbs/products/Products.tsx?raw";
import productDetailsCode from "./breadcrumbs/products/ProductDetails.tsx?raw";
import routesCode from "../../../routes.tsx?raw";
import { Outlet } from "react-router-dom";

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
    description:
      "Build a user list that loads additional users as the user scrolls. Fetch users in batches of 50, use an IntersectionObserver to detect when the loading sentinel enters the viewport, append each batch without duplicates, show a loading indicator while a batch is being fetched, and stop requesting users after 10 pages. Clean up the observer when the component unmounts.",
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

  {
    id: "modal-portal",
    title: "Modal / React-Portal",
    description:
      "Build a reusable modal rendered with a React portal. It should open and close through its controls, close when the backdrop is clicked or Escape is pressed, keep clicks inside the modal from closing it, and prevent background scrolling while open. Clean up the event listener and restore scrolling when the modal closes or unmounts.",
    difficulty: Difficulty.Medium,
    component: <InvokeModal />,
    files: [
      {
        fileName: "Modal.tsx",
        content: modalCode,
      },
      {
        fileName: "InvokeModal.tsx",
        content: invokeModalCode,
      },
    ],
  },

  {
    id: "pagination",
    title: "Pagination",
    description: "Pagination Component",
    difficulty: Difficulty.Easy,
    component: <PaginationUsage />,
    files: [
      {
        fileName: "Pagination.tsx",
        content: paginationCode,
      },
      {
        fileName: "PaginationUsage.tsx",
        content: paginationUsageCode,
      },
      {
        fileName: "paginationUtils.ts",
        content: paginationUtileCode,
      },
      {
        fileName: "interface.ts",
        content: paginationInterface,
      },
    ],
  },
  {
    id: "breadcrumbs",
    title: "BreadCrumbs",
    description: "BreadCrumb Component",
    difficulty: Difficulty.Medium,
    component: <Outlet />,
    files: [
      {
        fileName: "Breadcrumbs.tsx",
        content: breadcrumbsCode,
      },
      {
        fileName: "BreadCrumbsLayout.tsx",
        content: breadcrumbsLayoutCode,
      },
      {
        fileName: "ProductCategories.tsx",
        content: productCategoriesCode,
      },
      {
        fileName: "Products.tsx",
        content: productsCode,
      },
      {
        fileName: "ProductDetails.tsx",
        content: productDetailsCode,
      },
      {
        fileName: "routes.tsx",
        content: routesCode,
      },
    ],
  },
];
