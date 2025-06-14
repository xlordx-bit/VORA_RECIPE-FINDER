const sampleRecipes = [
  {
    id: 1001,
    title: "Dark Chocolate Lava Cake",
    image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&w=800&q=80",
    servings: 2,
    readyInMinutes: 25,
    pricePerServing: 350, // $3.50
    diets: ["vegetarian"],
    extendedIngredients: [
      { original: "4 oz dark chocolate (70% cocoa)" },
      { original: "1/2 cup unsalted butter" },
      { original: "2 large eggs" },
      { original: "2 egg yolks" },
      { original: "1/4 cup granulated sugar" },
      { original: "2 tbsp all-purpose flour" },
      { original: "1 tsp vanilla extract" },
      { original: "Pinch of salt" }
    ],
    nutrition: {
      calories: "420",
      protein: "6g",
      carbs: "32g",
      fat: "28g"
    }
  },
  {
    id: 1002,
    title: "Midnight Forest Mushroom Risotto",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=800&q=80",
    servings: 4,
    readyInMinutes: 45,
    pricePerServing: 450, // $4.50
    diets: ["vegetarian", "gluten-free"],
    extendedIngredients: [
      { original: "1.5 cups Arborio rice" },
      { original: "4 cups mushroom broth" },
      { original: "1 cup mixed wild mushrooms" },
      { original: "1/2 cup dried porcini mushrooms" },
      { original: "1 shallot, finely chopped" },
      { original: "2 cloves garlic, minced" },
      { original: "1/2 cup white wine" },
      { original: "1/3 cup grated Parmesan cheese" },
      { original: "2 tbsp butter" },
      { original: "2 tbsp olive oil" },
      { original: "Fresh thyme and black pepper" }
    ],
    nutrition: {
      calories: "380",
      protein: "12g",
      carbs: "45g",
      fat: "18g"
    }
  },
  {
    id: 1003,
    title: "Blackberry Glazed Duck Breast",
    image: "https://images.unsplash.com/photo-1572448862527-d3c904757de6?auto=format&fit=crop&w=800&q=80",
    servings: 2,
    readyInMinutes: 40,
    pricePerServing: 950, // $9.50
    diets: ["gluten-free", "dairy-free"],
    extendedIngredients: [
      { original: "2 duck breasts" },
      { original: "1 cup fresh blackberries" },
      { original: "1/4 cup balsamic vinegar" },
      { original: "2 tbsp honey" },
      { original: "1 sprig rosemary" },
      { original: "2 cloves garlic" },
      { original: "Salt and black pepper" }
    ],
    nutrition: {
      calories: "520",
      protein: "32g",
      carbs: "18g",
      fat: "35g"
    }
  },
  {
    id: 1004,
    title: "Shadow Squid Ink Pasta",
    image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=800&q=80",
    servings: 4,
    readyInMinutes: 35,
    pricePerServing: 550, // $5.50
    diets: ["pescatarian"],
    extendedIngredients: [
      { original: "400g squid ink pasta" },
      { original: "300g mixed seafood (shrimp, calamari, mussels)" },
      { original: "4 cloves garlic, minced" },
      { original: "1/2 cup white wine" },
      { original: "2 tbsp olive oil" },
      { original: "Red pepper flakes" },
      { original: "Fresh parsley" },
      { original: "Lemon zest" }
    ],
    nutrition: {
      calories: "450",
      protein: "28g",
      carbs: "52g",
      fat: "15g"
    }
  },
  {
    id: 1005,
    title: "Mystic Purple Cauliflower Soup",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
    servings: 6,
    readyInMinutes: 40,
    pricePerServing: 250, // $2.50
    diets: ["vegan", "gluten-free"],
    extendedIngredients: [
      { original: "2 heads purple cauliflower" },
      { original: "1 onion, chopped" },
      { original: "4 cups vegetable broth" },
      { original: "1 cup coconut milk" },
      { original: "2 tbsp olive oil" },
      { original: "1 tsp cumin" },
      { original: "1/2 tsp turmeric" },
      { original: "Salt and black pepper" }
    ],
    nutrition: {
      calories: "180",
      protein: "5g",
      carbs: "15g",
      fat: "12g"
    }
  },
  {
    id: 1006,
    title: "Charcoal Sourdough with Black Sesame",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    servings: 8,
    readyInMinutes: 180,
    pricePerServing: 150, // $1.50
    diets: ["vegan"],
    extendedIngredients: [
      { original: "500g bread flour" },
      { original: "100g whole wheat flour" },
      { original: "2 tbsp activated charcoal powder" },
      { original: "150g sourdough starter" },
      { original: "350ml water" },
      { original: "10g salt" },
      { original: "2 tbsp black sesame seeds" }
    ],
    nutrition: {
      calories: "220",
      protein: "7g",
      carbs: "42g",
      fat: "2g"
    }
  },
  {
    id: 1007,
    title: "Dark Night Berry Pavlova",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80",
    servings: 8,
    readyInMinutes: 120,
    pricePerServing: 300, // $3.00
    diets: ["vegetarian", "gluten-free"],
    extendedIngredients: [
      { original: "4 large egg whites" },
      { original: "1 cup sugar" },
      { original: "1 tsp vanilla extract" },
      { original: "1 tsp cornstarch" },
      { original: "1 tsp white vinegar" },
      { original: "2 cups mixed berries (blackberries, blueberries)" },
      { original: "1 cup heavy cream" },
      { original: "2 tbsp powdered sugar" }
    ],
    nutrition: {
      calories: "280",
      protein: "4g",
      carbs: "35g",
      fat: "15g"
    }
  },
  {
    id: 1008,
    title: "Black Sesame Ice Cream",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80",
    servings: 6,
    readyInMinutes: 240,
    pricePerServing: 280, // $2.80
    diets: ["vegetarian", "gluten-free"],
    extendedIngredients: [
      { original: "2 cups heavy cream" },
      { original: "1 cup whole milk" },
      { original: "1/2 cup black sesame paste" },
      { original: "2/3 cup sugar" },
      { original: "4 egg yolks" },
      { original: "1 tsp vanilla extract" },
      { original: "Pinch of salt" }
    ],
    nutrition: {
      calories: "320",
      protein: "5g",
      carbs: "22g",
      fat: "25g"
    }
  },
  {
    id: 1009,
    title: "Forbidden Black Rice with Grilled Squid",
    image: "https://images.unsplash.com/photo-1539755530862-00f623c00f52?auto=format&fit=crop&w=800&q=80",
    servings: 4,
    readyInMinutes: 50,
    pricePerServing: 650, // $6.50
    diets: ["gluten-free", "dairy-free"],
    extendedIngredients: [
      { original: "2 cups forbidden black rice" },
      { original: "4 medium squid, cleaned and scored" },
      { original: "4 cups chicken or seafood broth" },
      { original: "2 tbsp sesame oil" },
      { original: "2 cloves garlic, minced" },
      { original: "1 thumb ginger, julienned" },
      { original: "2 green onions, sliced" },
      { original: "Lime wedges for serving" }
    ],
    nutrition: {
      calories: "380",
      protein: "22g",
      carbs: "48g",
      fat: "14g"
    }
  },
  {
    id: 1010,
    title: "Dark Chocolate and Blackout Coffee Truffles",
    image: "https://images.unsplash.com/photo-1548907040-4d5c3e2104b4?auto=format&fit=crop&w=800&q=80",
    servings: 24,
    readyInMinutes: 180,
    pricePerServing: 120, // $1.20
    diets: ["vegetarian", "gluten-free"],
    extendedIngredients: [
      { original: "12 oz dark chocolate (85% cocoa)" },
      { original: "1/2 cup heavy cream" },
      { original: "2 tbsp strong espresso" },
      { original: "2 tbsp coffee liqueur" },
      { original: "1/4 cup cocoa powder for dusting" },
      { original: "Pinch of sea salt" }
    ],
    nutrition: {
      calories: "120",
      protein: "2g",
      carbs: "8g",
      fat: "9g"
    }
  }
];

export default sampleRecipes;
