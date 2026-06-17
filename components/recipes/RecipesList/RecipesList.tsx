
import styles from './RecipesList.module.css';

// Додаємо інтерфейс для пропсів
interface RecipesListProps {
  recipes: {
    _id: string;
    name: string;
    description: string;
    cookingTime: number;
    calories: number;
    recipeImage: string;
  }[];
  type: 'own' | 'favorites';
}

export const RecipesList = ({ recipes, type }: RecipesListProps) => {
  if (!recipes || recipes.length === 0) {
    return <div className={styles.empty}>Немає рецептів</div>;
  }

  // return (
  //   <div className={styles.grid}>
  //     {recipes.map((recipe) => (
  //       <RecipeCard key={recipe._id} recipe={recipe} type={type} />
  //     ))}
  //   </div>
  // );
};