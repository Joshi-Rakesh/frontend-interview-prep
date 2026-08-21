export const Difficulty = {
  Easy: "Easy",
  Medium: "Medium",
  Hard: "Hard",
} as const;

export type DifficultyType = (typeof Difficulty)[keyof typeof Difficulty];

export const DifficultyColor: Record<DifficultyType, string> = {
  Easy: "green",
  Medium: "gold",
  Hard: "volcano",
};
