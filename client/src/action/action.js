import { apiUrl } from "../lib/utils";

export async function addRecipe(recipe) {
  try {
    const response = await fetch(`${apiUrl}/recipes`, {
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
    window.location.reload();
    console.log("Recette ajoutée avec succès : ", data);
  } catch (error) {
    console.error("Erreur lors de l'ajout de la recette : ", error);
  }
}

export async function listRecipes() {
  try {
    const response = await fetch(`${apiUrl}/recipes`, {
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

export async function listOrders() {
  try {
    const response = await fetch(`${apiUrl}/orders`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Erreur lors de la récupération des commandes : ", error);
  }
}

export async function sendToKitchen(recipeId, sauce) {
  try {
    const orderData = {
      recipe: recipeId,
      sauce: sauce,
    };

    const response = await fetch(`${apiUrl}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    window.location.reload();
    console.log("Commande créée avec succès : ", result);
  } catch (error) {
    console.error("Erreur lors de la création de la commande : ", error);
  }
}

export async function deleteRecipe(recipeId) {
  try {
    const response = await fetch(`${apiUrl}/recipes/${recipeId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    window.location.reload();
    console.log("Recette supprimée avec succès");
  } catch (error) {
    console.error("Erreur lors de la suppression de la recette : ", error);
  }
}

export async function handleCompleteOrder(orderId) {
  try {
    const response = await fetch(
      `http://localhost:5000/orders/${orderId}/complete`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    window.location.reload();
  } catch (error) {
    console.error("Erreur lors de la mise à jour de la commande : ", error);
  }
}
