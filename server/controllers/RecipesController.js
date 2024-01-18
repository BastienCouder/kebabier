const readAllRecipes = async (req, res) => {
  try {
    ///** */
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Erreur lors de la récupération des données :", error);
  }
};

const RecipesController = {
  readAllRecipes,
};

export { RecipesController };
