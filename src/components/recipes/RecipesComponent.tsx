import { FC } from "react";
import { IRecipe } from "@/models/IRecipe";
import RecipeComponent from "@/components/recipe/RecipeComponent";

interface RecipesComponentProps {
    recipes: IRecipe[];
}

const RecipesComponent: FC<RecipesComponentProps> = ({ recipes }) => {
    if (!recipes || recipes.length === 0) {
        return <div>Рецепти відсутні</div>;
    }

    return (
        <div>
            {recipes.map((recipe) => (
                <RecipeComponent key={recipe.id} item={recipe} />
            ))}
        </div>
    );
};

export default RecipesComponent;


