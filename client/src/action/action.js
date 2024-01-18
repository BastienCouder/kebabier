export async function addRecipe(recipe) {
  try {
    const response = await fetch(`${"http://localhost:5000"}/recipes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recipe),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Recette ajoutée avec succès : ", data);
  } catch (error) {
    console.error("Erreur lors de l'ajout de la recette : ", error);
  }
}

export async function listRecipes() {
  try {
    const response = await fetch(`${"http://localhost:5000"}/recipes`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const recipes = await response.json();
    console.log("Recettes récupérées : ", recipes);
    return recipes;
  } catch (error) {
    console.error("Erreur lors de la récupération des recettes : ", error);
  }
}

export async function sendToKitchen(recipe) {
  try {
    const response = await fetch(`${"http://localhost:5000"}/kitchen`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recipe),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log("Recette envoyée en cuisine avec succès : ", result);
  } catch (error) {
    console.error("Erreur lors de l'envoi en cuisine : ", error);
  }
}

export async function deleteRecipe(recipeId) {
  try {
    const response = await fetch(
      `${"http://localhost:5000"}/recipes/${recipeId}`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    console.log("Recette supprimée avec succès");
  } catch (error) {
    console.error("Erreur lors de la suppression de la recette : ", error);
  }
}
