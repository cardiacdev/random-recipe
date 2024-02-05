import { z } from "zod";

export type SearchParams = ConstructorParameters<typeof URLSearchParams>[0];

export const RecipeSchema = z.object({
  idMeal: z.string(),
  strMeal: z.string(),
  strMealThumb: z.string().url(),
});

export type Recipe = z.infer<typeof RecipeSchema>;

export const isRecipe = (recipe: unknown): recipe is Recipe => {
  if (!RecipeSchema.safeParse(recipe).success) return false;
  return true;
};

export const isRecipes = (recipes: unknown): recipes is Array<Recipe> => {
  if (!RecipeSchema.array().nullable().safeParse(recipes).success) return false;
  return true;
};

export const RecipeDetailSchema = z.object({
  meals: z.array(
    z.object({
      idMeal: z.string(),
      strMeal: z.string(),
      strDrinkAlternate: z.string().nullish(),
      strCategory: z.string(),
      strArea: z.string(),
      strInstructions: z.string(),
      strCreativeCommonsConfirmed: z.string().nullish(),
      strMealThumb: z.string().url(),
      strTags: z.string().nullish(),
      strYoutube: z.string().url(),
      strSource: z.string().url().nullish(),
      strIngredient1: z.string().nullish(),
      strIngredient2: z.string().nullish(),
      strIngredient3: z.string().nullish(),
      strIngredient4: z.string().nullish(),
      strIngredient5: z.string().nullish(),
      strIngredient6: z.string().nullish(),
      strIngredient7: z.string().nullish(),
      strIngredient8: z.string().nullish(),
      strIngredient9: z.string().nullish(),
      strIngredient10: z.string().nullish(),
      strIngredient11: z.string().nullish(),
      strIngredient12: z.string().nullish(),
      strIngredient13: z.string().nullish(),
      strIngredient14: z.string().nullish(),
      strIngredient15: z.string().nullish(),
      strIngredient16: z.string().nullish(),
      strIngredient17: z.string().nullish(),
      strIngredient18: z.string().nullish(),
      strIngredient19: z.string().nullish(),
      strIngredient20: z.string().nullish(),
      strMeasure1: z.string().nullish(),
      strMeasure2: z.string().nullish(),
      strMeasure3: z.string().nullish(),
      strMeasure4: z.string().nullish(),
      strMeasure5: z.string().nullish(),
      strMeasure6: z.string().nullish(),
      strMeasure7: z.string().nullish(),
      strMeasure8: z.string().nullish(),
      strMeasure9: z.string().nullish(),
      strMeasure10: z.string().nullish(),
      strMeasure11: z.string().nullish(),
      strMeasure12: z.string().nullish(),
      strMeasure13: z.string().nullish(),
      strMeasure14: z.string().nullish(),
      strMeasure15: z.string().nullish(),
      strMeasure16: z.string().nullish(),
      strMeasure17: z.string().nullish(),
      strMeasure18: z.string().nullish(),
      strMeasure19: z.string().nullish(),
      strMeasure20: z.string().nullish(),
    }),
  ),
});

export type RecipeDetail = z.infer<typeof RecipeDetailSchema>;

export const isRecipeDetail = (recipeDetail: unknown): recipeDetail is RecipeDetail => {
  if (!RecipeDetailSchema.safeParse(recipeDetail).success) return false;
  return true;
};
