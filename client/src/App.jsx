import { useEffect, useState } from "react";
import AddRecipeForm from "./components/form-recipe";
import { listRecipes } from "./action/action";
import RecipeList from "./components/recipe-list";

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function fetchRecipes() {
      const fetchedRecipes = await listRecipes();
      setRecipes(fetchedRecipes);
    }

    fetchRecipes();
  }, []);

  return (
    <main className="px-4 py-6 lg:px-12 space-y-8">
      <header>
        <h1 className="text-3xl font-bold underline text-center">Kebab</h1>
      </header>

      <section>
        <AddRecipeForm />
      </section>
      <section className="space-y-4">
        <RecipeList recipes={recipes} />
      </section>
    </main>
  );
}

export default App;
