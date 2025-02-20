import {IRecipe} from "@/models/IRecipe";

export interface IRecipeResponse {
  recipes: IRecipe[];
  total: number;
  skip: number;
  limit: number;
}