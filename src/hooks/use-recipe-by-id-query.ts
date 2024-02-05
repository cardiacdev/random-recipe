import { useQuery } from "@tanstack/react-query";

import { isRecipeDetail } from "@/lib/types";

export const useRecipeByIdQuery = (id: string, enabled = false) => {
  return useQuery({
    queryKey: ["details", id],
    queryFn: () => fetchRecipeDetails(id),
    enabled: enabled,
  });
};

const fetchRecipeDetails = async (id: string) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  if (!response.ok) {
    const error = await response.json();
    if (error.message) throw new Error(error.message);
    throw new Error("Something went wrong");
  }
  const data = await response.json();

  if (!isRecipeDetail(data)) throw new Error("Something went wrong");

  return data;
};
