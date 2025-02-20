import { IRecipe } from "@/models/IRecipe";
import { FC } from "react";
import styles from '@/styles/Recipe.module.css';

interface RecipeComponentProps {
    item: IRecipe;
}

const RecipeComponent: FC<RecipeComponentProps> = ({ item }) => {
    return (
        <div className={styles.recipeContainer}>
            <h2 className={styles.title}>{item.name}</h2>
            <div className={styles.tags}>
                {item.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                ))}
            </div>
        </div>
    );
};

export default RecipeComponent;



