import {IRecipe} from '@/models/IRecipe';
import Link from 'next/link';
import styles from '@/styles/RecipeDetailPage.module.css';


async function fetchRecipe(id: string): Promise<IRecipe> {
    const res = await fetch(`https://dummyjson.com/recipes/${id}`);
    if (!res.ok) {
        throw new Error(`Не вдалося завантажити рецепт: ${res.status}`);
    }
    return res.json();
}

const RecipeDetailPage = async ({ params }: { params: { id: string } }) => {
    const awaitedParams = await params;
    const { id } = awaitedParams;

    try {
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
                        <Link key={tag} href={`/recipes?tag=${tag}`}>
                            <span className={styles.tag}>{tag}</span>
                        </Link>
                    ))}
                </div>
                <Link href={`/users/${recipe.userId}`} className={styles.author}>
                    <p>Автор: {recipe.userId}</p>
                </Link>
            </div>
        );
    } catch (error) {
        const errorMessage = (error as Error).message;

        return (
            <div className={styles.container}>
                <h1>Помилка завантаження рецепта</h1>
                <p>{errorMessage}</p>
            </div>
        );
    }
};

export default RecipeDetailPage;









