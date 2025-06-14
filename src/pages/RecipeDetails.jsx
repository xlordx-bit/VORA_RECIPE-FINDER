import { useLocation, useNavigate } from 'react-router-dom';
import styles from './RecipeDetails.module.scss';

function RecipeDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const recipe = location.state?.recipe;

  if (!recipe) {
    return navigate('/search');
  }

  return (
    <div className={styles['recipe-details']}>
      <div className={styles['recipe-details__container']}>
        <div className={styles['recipe-details__header']}>
          <button
            onClick={() => navigate(-1)}
            className={styles['recipe-details__back-button']}
          >
            ← Back to Search
          </button>
          <h1 className={styles['recipe-details__title']}>{recipe.title}</h1>
        </div>

        <div className={styles['recipe-details__content']}>
          <div className={styles['recipe-details__image']}>
            <img src={recipe.image} alt={recipe.title} />
          </div>

          <div className={styles['recipe-details__info']}>
            <div className={styles['recipe-details__section']}>
              <h3>Overview</h3>
              <div className={styles['recipe-details__labels']}>
                {recipe.diets?.map((diet, index) => (
                  <span key={index}>{diet}</span>
                ))}
              </div>
              <p>Servings: {recipe.servings}</p>
              <p>Ready in {recipe.readyInMinutes} minutes</p>
              {recipe.pricePerServing && (
                <p>Price per serving: ${(recipe.pricePerServing / 100).toFixed(2)}</p>
              )}
            </div>

            <div className={styles['recipe-details__section']}>
              <h3>Ingredients</h3>
              <ul className={styles['recipe-details__ingredients']}>
                {recipe.extendedIngredients?.map((ingredient, index) => (
                  <li key={index}>{ingredient.original}</li>
                ))}
              </ul>
            </div>

            {recipe.nutrition && (
              <div className={styles['recipe-details__section']}>
                <h3>Nutrition Facts</h3>
                <p>Calories: {recipe.nutrition.calories}</p>
                <p>Protein: {recipe.nutrition.protein}g</p>
                <p>Carbohydrates: {recipe.nutrition.carbs}g</p>
                <p>Fat: {recipe.nutrition.fat}g</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetails;
