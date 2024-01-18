import Order from "../models/orders.js";
import fetch from "node-fetch";

const readAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({}).sort({ orderDate: 1 });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createOrder = async (req, res) => {
  try {
    const timeResponse = await fetch(
      "https://worldtimeapi.org/api/timezone/Europe/Paris"
    );

    if (!timeResponse.ok) {
      throw new Error(
        `Erreur lors de la récupération de l'heure : ${timeResponse.status}`
      );
    }
    const timeData = await timeResponse.json();

    // Créer la nouvelle commande
    const newOrder = new Order({
      recipe: req.body.recipe,
      sauce: req.body.sauce,
      orderDate: new Date(timeData.datetime),
    });

    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const OrdersController = {
  readAllOrders,
  createOrder,
};

export { OrdersController };
