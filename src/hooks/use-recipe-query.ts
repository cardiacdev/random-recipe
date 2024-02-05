import { useQuery } from "@tanstack/react-query";

import { isRecipes, SearchParams } from "@/lib/types";
import { URLSearchParamsToObj } from "@/lib/utils";

const fetchAllRecipes = async (params: SearchParams) => {
  const searchParams = new URLSearchParams(params);

  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php${searchParams.toString()}`,
  );
  if (!response.ok) {
    const error = await response.json();
    if (error.message) throw new Error(error.message);
    throw new Error("Something went wrong");
  }
  const data = await response.json();
  const recipes = data.meals;
  if (!isRecipes(recipes)) throw new Error("Something went wrong");
  return recipes;
};

export const useRecipeQuery = (params: SearchParams) => {
  return useQuery({
    queryKey: ["all", { params: URLSearchParamsToObj(params) }],
    queryFn: () => fetchAllRecipes(params),
  });
};
