import React, { useState } from "react";
import { deleteRecipe, sendToKitchen } from "../action/action";

function RecipeList({ recipes }) {
  const [selectedSauces, setSelectedSauces] = useState({});

  const handleSauceChange = (recipeId, sauce) => {
    setSelectedSauces({ ...selectedSauces, [recipeId]: sauce });
  };

  const handleSendToKitchen = async (recipeId) => {
    const sauce = selectedSauces[recipeId];
    if (!sauce) {
      alert("Veuillez sélectionner une sauce.");
      return;
    }
    await sendToKitchen(recipeId, sauce);
  };

  const handleDeleteRecipe = async (recipeId) => {
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
              <span className="font-semibold">Ingrédients :</span>{" "}
              {recipe.ingredients}
            </p>
            <select
              onChange={(e) => handleSauceChange(recipe._id, e.target.value)}
              className="p-2 border border-gray-300 rounded"
            >
              <option value="">Choisir une sauce</option>
              <option value="mayonnaise">Mayonnaise</option>
              <option value="ketchup">Ketchup</option>
              <option value="samouraï">samouraï</option>
              <option value="algérienne">algérienne</option>
              <option value="fromagère">fromagère</option>
              <option value="barbecue">barbecue</option>
              <option value="harissa">Harissa</option>
              <option value="sauce blanche">Sauce blanche</option>
              <option value="sauce tahini">Sauce tahini</option>
              <option value="sauce tartare">Sauce tartare</option>
              <option value="sauce vegan">Sauce vegan</option>
              <option value="sauce yaourt à la menthe">
                Sauce yaourt à la menthe
              </option>
            </select>
            <div className="flex gap-4">
              <button
                className="bg-zinc-700 px-4 py-2 rounded-md text-white"
                onClick={() => handleSendToKitchen(recipe._id)}
              >
                Envoyer en cuisine
              </button>
              <button
                className="bg-red-700 px-4 py-2 rounded-md text-white"
                onClick={() => handleDeleteRecipe(recipe._id)}
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
