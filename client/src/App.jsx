import { useEffect, useState } from "react";
import AddRecipeForm from "./components/form-recipe";
import { listOrders, listRecipes } from "./action/action";
import RecipeList from "./components/recipe-list";
import OrdersList from "./components/list-order";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchRecipes() {
      const fetchedRecipes = await listRecipes();
      setRecipes(fetchedRecipes);
    }

    async function fetchOrders() {
      const fetchedOrders = await listOrders();
      setOrders(fetchedOrders);
    }

    fetchRecipes();
    fetchOrders();
  }, []);

  return (
    <main className="px-4 py-6 lg:px-12 space-y-8">
      <header>
        <h1 className="text-3xl font-bold underline text-center">
          Kebab express
        </h1>
      </header>
      <section>
        <AddRecipeForm />
      </section>
      <div class="my-4 h-0 border-t border-gray-300"></div>
      <section className="space-y-4">
        <RecipeList recipes={recipes} />
      </section>
      <div class="my-4 h-0 border-t border-gray-300"></div>
      <section className="space-y-4">
        <OrdersList orders={orders} />
      </section>
    </main>
  );
}

export default App;
