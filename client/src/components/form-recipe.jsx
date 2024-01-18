import React, { useState } from "react";
import { addRecipe } from "../action/action";

function AddRecipeForm() {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!name || !ingredients) {
      alert("Veuillez remplir tous les champs.");
      return;
    }
    const recipe = { name, ingredients };
    console.log(recipe);
    await addRecipe(recipe);

    setName("");
    setIngredients("");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto space-y-4">
      <div className="max-w-sm mx-auto">
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Nom de la recette:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </div>
      <div className="max-w-sm mx-auto">
        <label
          htmlFor="ingredients"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Ingrédients:
        </label>
        <textarea
          id="ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          required
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <button type="submit">Ajouter la recette</button>
    </form>
  );
}

export default AddRecipeForm;
