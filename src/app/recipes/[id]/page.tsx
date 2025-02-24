import {IRecipe} from '@/models/IRecipe';
import Link from 'next/link';
import styles from '@/styles/RecipePage.module.css';


async function fetchRecipe(id: string): Promise<IRecipe> {
    const res = await fetch(`https://dummyjson.com/recipes/${id}`);
    const recipe = await res.json();
    return recipe;
}

const RecipePage = async ({params}: {params: {id: string}}) => {
        const {id} = await params;
        const recipe = await fetchRecipe(id);

        return (
            <div className={styles.container}>
                <h1 className={styles.title}>{recipe.name}</h1>
                <p className={styles.ingredients}>Інгредієнти: {Array.isArray(recipe.ingredients) ? recipe.ingredients.join(', ') : recipe.ingredients}</p>
                <p className={styles.instructions}>Інструкції: {Array.isArray(recipe.instructions) ? recipe.instructions.join('. ') : recipe.instructions}</p>
                <p className={styles.cuisine}>Кухня: {recipe.cuisine}</p>
                <p className={styles.cookTimeMinutes}>Час приготування: {recipe.cookTimeMinutes} хвилин</p>
                <p className={styles.caloriesPerServing}>Калорійність: {recipe.caloriesPerServing} калорій на порцію</p>
                {recipe.image && <img src={recipe.image} alt={recipe.name} className={styles.image} />}

                <div>
                      {recipe.tags.map((tag) => (
                       <span key={tag} className={styles.tag}>{tag}</span>
                       ))}
                </div>
                <Link href={`/users/${recipe.userId}`} className={styles.author}>
                    <p>Автор: {recipe.userId}</p>
                </Link>
            </div>
        );
};

export default RecipePage;












