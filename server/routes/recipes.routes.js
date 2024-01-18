import express from "express";
import { RecipesController } from "../controllers/RecipesController.js";

const router = express.Router();

//Recipes
router.get("/", RecipesController.readAllRecipes);
router.post("/", RecipesController.addRecipe);
router.delete("/:id", RecipesController.deleteRecipe);

// ✅ export the router
export default router;
