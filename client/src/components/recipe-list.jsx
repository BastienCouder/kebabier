import React from "react";
import { deleteRecipe, sendToKitchen } from "../action/action";

function RecipeList({ recipes }) {
  const handleSendToKitchen = async (recipe) => {
    await sendToKitchen(recipe);
  };

  const handleDeleteRecipe = async (recipeId) => {
    console.log(recipeId);
    await deleteRecipe(recipeId);
  };

  return (
    <>
      <h2 className="text-2xl font-bold">Liste des recettes</h2>
      <ul className="flex w-full gap-8 flex-wrap">
        {recipes.map((recipe, index) => (
          <li
            key={recipe.id || index}
            className="w-full lg:w-1/4 space-y-4 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
          >
            <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              {recipe.name}
            </h3>
            <p className="font-normal text-gray-700">
              Ingrédients : {recipe.ingredients}
            </p>
            <div className="flex gap-4">
              <button onClick={() => handleSendToKitchen(recipe)}>
                Envoyer en cuisine
              </button>
              <button
                onClick={() => {
                  handleDeleteRecipe(recipe._id);
                }}
              >
                Supprimer
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default RecipeList;
