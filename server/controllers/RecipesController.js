import Order from "../models/orders.js";
import Recipe from "../models/recipes.js";

// Fonction pour lire toutes les recettes
const readAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find({});
    res.status(200).json(recipes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Fonction pour ajouter une nouvelle recette
const addRecipe = async (req, res) => {
  try {
    const newRecipe = new Recipe({
      name: req.body.name,
      ingredients: req.body.ingredients,
    });
    await newRecipe.save();
    res.status(201).json(newRecipe);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Fonction pour supprimer une recette
const deleteRecipe = async (req, res) => {
  try {
    const recipeId = req.params.id;

    // Vérifier si la recette existe
    const recipe = await Recipe.findById(recipeId);
    if (!recipe) {
      return res.status(404).json({ message: "Recette non trouvée" });
    }

    // Supprimer la recette
    await recipe.deleteOne();

    // Supprimer toutes les commandes associées à cette recette
    await Order.deleteMany({ recipe: recipeId });

    res.status(200).json({
      message: "Recette et commandes associées supprimées avec succès",
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const RecipesController = {
  readAllRecipes,
  addRecipe,
  deleteRecipe,
};

export { RecipesController };
