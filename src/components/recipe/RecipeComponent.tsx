import { IRecipe } from "@/models/IRecipe";
import { FC } from "react";
import styles from '@/styles/Recipe.module.css';
import Link from "next/link";

interface RecipeComponentProps {
    item: IRecipe;
}

const RecipeComponent: FC<RecipeComponentProps> = ({ item }) => {
    return (
        <div className={styles.recipeContainer}>
            <Link href={`/recipes/${item.id}`}>
                <h2 className={styles.title}>{item.name}</h2>
            </Link>
            <div className={styles.tags}>
                {item.tags.map((tag) => (
                    <Link key={tag} href={`/recipes?tag=${tag}`} passHref>
                        <span className={styles.tag}>{tag}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default RecipeComponent;






