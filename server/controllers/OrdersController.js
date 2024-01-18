import Order from "../models/orders.js";
import fetch from "node-fetch";

const readAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({ isValidated: false })
      .sort({ orderDate: 1 })
      .populate("recipe", "name ingredients");
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

    const { recipe, sauce } = req.body;
    const newOrder = new Order({
      recipe,
      sauce,
      orderDate: new Date(timeData.datetime),
    });

    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateOrder = async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      { isValidated: true },
      { new: true }
    );
    if (!updatedOrder) {
      return res.status(404).json({ message: "Commande non trouvée" });
    }
    res.status(200).json(updatedOrder);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const OrdersController = {
  readAllOrders,
  createOrder,
  updateOrder,
};

export { OrdersController };
