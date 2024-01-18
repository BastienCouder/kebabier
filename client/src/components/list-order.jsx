import { useEffect, useState } from "react";
import { elapsedTime } from "../lib/utils";
import { handleCompleteOrder } from "../action/action";

function OrdersList({ orders }) {
  const [timers, setTimers] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedTimers = orders
        .filter((order) => !order.isValidated)
        .map((order) => elapsedTime(order.orderDate));
      setTimers(updatedTimers);
    }, 1000);

    return () => clearInterval(interval);
  }, [orders]);

  return (
    <>
      <h2 className="text-2xl font-bold">Commandes en Cuisine</h2>
      <ul className="flex w-full gap-8 flex-wrap">
        {orders.map((order, index) => (
          <li
            className="w-full lg:w-1/4 space-y-4 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
            key={index}
          >
            <div className="flex w-full justify-between gap-4">
              <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                <span>Recette: </span>
                {order.recipe.name}
              </h3>
              <p className="h-8 font-normal text-sm flex items-center text-white rounded-lg px-2 py-px bg-zinc-700">
                {timers[index]}
              </p>
            </div>
            <p className="font-normal text-gray-700">
              <span className="font-semibold">Ingredients :</span>
              {order.recipe.ingredients}
            </p>
            <p className="font-normal text-gray-700">
              {" "}
              <span className="font-semibold">Sauce :</span> {order.sauce}
            </p>

            <button
              className="bg-green-700 px-4 py-2 rounded-md text-white"
              onClick={() => handleCompleteOrder(order._id)}
            >
              Valider la commande
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default OrdersList;
