import { useRecipeDetails } from "@/hooks/use-recipe-details";

import { Recipe } from "@/lib/types";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import { Badge } from "./ui/badge";

export const RecipeContainer = () => {
  const recipeDetails = useRecipeDetails();

  if (!recipeDetails) return null;
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">{recipeDetails?.strMeal}</CardTitle>
        <CardDescription>
          <div className="flex flex-wrap gap-2 py-3">
            <Badge>{recipeDetails.strCategory}</Badge>
            <Badge>{recipeDetails.strArea}</Badge>
            <Badge>{recipeDetails.strTags}</Badge>
          </div>
          <img src={recipeDetails.strMealThumb} className="w-52" alt={recipeDetails.strMeal} />
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col">
        <h2 className="font-bold">Ingredients</h2>
        <ul>
          {Object.entries(recipeDetails)
            .filter(([key, value]) => key.includes("strIngredient") && value)
            .map(([key, value]) => (
              <li key={key}>
                - {value} {recipeDetails[`strMeasure${key.slice(-1)}` as keyof Recipe]}
              </li>
            ))}
        </ul>
      </CardContent>
      <CardFooter className="flex flex-col items-start">
        <h2 className="font-bold">Instructions</h2>
        <p className="max-w-[60rem]">{recipeDetails.strInstructions}</p>
      </CardFooter>
    </Card>
  );
};
