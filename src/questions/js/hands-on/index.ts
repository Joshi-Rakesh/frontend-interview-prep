import { Difficulty } from "../../../utility/difficultyColor";
import debounceCode from "./debounce/debounce.js?raw";
import call_apply_bindCode from "./call_apply_bind/call_apply_bind.js?raw";

export const jsQuestions = [
  {
    id: "debounce-function",
    title: "Build a Debounce Function",
    description:
      "Write a debounce function that delays a callback until calls stop for the specified wait time. Run the example to see how rapid search terms collapse into one final callback.",
    difficulty: Difficulty.Medium,
    component: null,
    runnable: true,
    files: [
      {
        fileName: "debounce.js",
        content: debounceCode,
      },
    ],
  },

  {
    id: "call-apply-bind",
    title: "Implementing call, apply and bind methods",
    description: "Write call apply and bind methods",
    difficulty: Difficulty.Medium,
    component: null,
    runnable: true,
    files: [
      {
        fileName: "call_apply_bind.js",
        content: call_apply_bindCode,
      },
    ],
  },
];
