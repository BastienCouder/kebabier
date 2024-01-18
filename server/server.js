import express from "express";
import dotenv from "dotenv";
import http from "http";
import cors from "cors";
import { connectDB } from "./config/db.js";
import RecipeRouter from "./routes/recipes.routes.js";
import OrderRouter from "./routes/orders.routes.js";

// Connexion à la DB
connectDB();

const app = express();
const server = http.createServer(app);
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Cors
const corsOptions = {
  origin: [
    process.env.CLIENT_URL,
    "https://worldtimeapi.org/api/timezone/Europe/Paris",
  ],
  credentials: true,
};
app.use(cors(corsOptions));

//Routes
app.use("/orders", OrderRouter);
app.use("/recipes", RecipeRouter);

// Launch the server
const PORT = process.env.PORT;
server.listen(process.env.PORT, () => {
  console.log("Le serveur a démarré au port " + PORT);
});
