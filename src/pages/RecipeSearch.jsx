import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import styles from './RecipeSearch.module.scss';
import sampleRecipes from '../data/sampleRecipes';

const RecipeSearch = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState(sampleRecipes);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRecipes = async () => {
    if (!query.trim()) {
      setError("Please enter a search term");
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const res = await axios.get(`https://api.spoonacular.com/recipes/complexSearch`, {
        params: {
          apiKey: import.meta.env.VITE_SPOONACULAR_API_KEY,
          query,
          number: 12,
          addRecipeInformation: true,
          fillIngredients: true,
        },
      });
      setRecipes(res.data.results);
    } catch (error) {
      setError("Failed to fetch recipes. Please try again.");
      console.error("API error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.search}>
      <motion.div 
        className={styles.search__container}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2 
          className={styles.search__title}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          🍷 Discover Dark Delights
        </motion.h2>
        
        <motion.div 
          className={styles.search__form}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <input
            type="text"
            placeholder="Search mystical recipes..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className={styles.search__input}
            onKeyPress={(e) => e.key === 'Enter' && fetchRecipes()}
          />
          <button 
            onClick={fetchRecipes} 
            className={styles.search__button}
            disabled={loading}
          >
            {loading ? (
              <>
                <span className={styles.search__loading} />
                Searching...
              </>
            ) : (
              'Search'
            )}
          </button>
        </motion.div>

        <AnimatePresence>
          {error && (
            <motion.div 
              className={styles.search__error}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {error}
            </motion.div>
          )}
        </AnimatePresence>

        <div className={styles.search__grid}>
          <AnimatePresence>
            {recipes.map((recipe, index) => (
              <motion.div
                key={recipe.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  to={`/recipe/${encodeURIComponent(recipe.id)}`}
                  state={{ recipe }}
                  className={styles.search__card}
                >
                  <div className={styles['search__card-image']}>
                    <img src={recipe.image} alt={recipe.title} loading="lazy" />
                  </div>
                  <div className={styles['search__card-content']}>
                    <h3>{recipe.title}</h3>
                    <span className={styles['search__card-arrow']}>
                      View Details →
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        <AnimatePresence>
          {!loading && recipes.length === 0 && (
            <motion.div 
              className={styles.search__empty}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              Search for recipes to begin your culinary journey...
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default RecipeSearch;
