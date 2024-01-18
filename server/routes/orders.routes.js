import express from "express";
import { OrdersController } from "../controllers/OrdersController.js";

const router = express.Router();

//Orders
router.get("/", OrdersController.readAllOrders);
router.post("/", OrdersController.createOrder);
router.put("/:id/complete", OrdersController.updateOrder);

// ✅ export the router
export default router;
