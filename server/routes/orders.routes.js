import express from "express";
import { OrdersController } from "../controllers/OrdersController.js";

const router = express.Router();

//Orders
router.get("/orders", OrdersController.readAllOrders);
router.post("/", OrdersController.createOrder);

// ✅ export the router
export default router;
