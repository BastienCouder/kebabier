import express from "express";
import { RecipesController } from "../controllers/RecipesController.js";

const router = express.Router();

//Recipes
router.get("/", RecipesController.readAllRecipes);

// ✅ export the router
export default router;
