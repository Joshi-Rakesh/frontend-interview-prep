export const Difficulty = {
  Easy: "Easy",
  Medium: "Medium",
  Hard: "Hard",
} as const;

export type DifficultyType = (typeof Difficulty)[keyof typeof Difficulty];

export const DifficultyColor = {
  Easy: "#10B981",
  Medium: "#F59E0B",
  Hard: "#EF4444",
};

export const DEFAULT_DIFFICULTIES = Object.values(Difficulty);
