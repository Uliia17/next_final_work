import {FC} from 'react';
import {IRecipe} from "@/models/IRecipe";
import RecipeComponent from "@/components/recipe/RecipeComponent";

interface RecipesComponentProps {
    recipes: IRecipe[];
}

const RecipesComponent: FC<RecipesComponentProps> = ({recipes}) => {
    return (
        <div>
            {recipes.map((recipe) => (
                <RecipeComponent key={recipe.id} item={recipe}/>
            ))}
        </div>
    );
};

export default RecipesComponent;




