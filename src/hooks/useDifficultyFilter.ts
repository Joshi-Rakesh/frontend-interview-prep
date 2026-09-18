import { useSearchParams } from "react-router-dom";
import {
  DEFAULT_DIFFICULTIES,
  type DifficultyType,
} from "../utility/difficultyColor";
import { useEffect } from "react";

export function useDifficultyFilter() {
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedDifficulties = (searchParams.get("difficulty")?.split(",") ??
    DEFAULT_DIFFICULTIES) as DifficultyType[];

  const setSelectedDifficulties = (values: DifficultyType[]) => {
    if (!values.length) {
      return;
    }
    const params = new URLSearchParams(searchParams);
    params.set("difficulty", values.join(","));
    setSearchParams(params);
  };

  useEffect(() => {
    if (searchParams.has("difficulty")) {
      return;
    }
    const params = new URLSearchParams(searchParams);
    params.set("difficulty", DEFAULT_DIFFICULTIES.join(","));
    setSearchParams(params, {
      replace: true,
    });
  }, [searchParams, setSearchParams]);

  return {
    selectedDifficulties,
    setSelectedDifficulties,
  };
}
