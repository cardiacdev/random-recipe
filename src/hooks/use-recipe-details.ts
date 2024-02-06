import { useContext, useMemo } from "react";

import { FilterContext } from "@/components/filter-context";

import { useRecipeByIdQuery } from "./use-recipe-by-id-query";
import { useRecipeQuery } from "./use-recipe-query";

export const useRecipeDetails = () => {
  const { area, category, randomNumber } = useContext(FilterContext);
  const searchParams = new URLSearchParams();
  searchParams.append("a", area);
  if (category) searchParams.append("c", category);
  const { data: recipeList } = useRecipeQuery(searchParams);

  const randomRecipe = useMemo(
    () => recipeList?.[Math.floor(randomNumber * recipeList.length)],
    [recipeList, randomNumber],
  );

  const { data: recipe } = useRecipeByIdQuery(randomRecipe?.idMeal || "", !!randomRecipe);
  const recipeDetails = useMemo(() => recipe?.meals?.[0], [recipe]);
  return recipeDetails;
};
