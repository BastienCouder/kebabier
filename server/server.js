import express from "express";
import dotenv from "dotenv";
import http from "http";
import cors from "cors";
import RecipeRouter from "./routes/recipes.routes.js";

const app = express();
const server = http.createServer(app);
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Cors
const corsOptions = {
  origin: [process.env.CLIENT_URL],
  credentials: true,
};
app.use(cors(corsOptions));

//Routes
app.use("/recipes", RecipeRouter);

// Launch the server
const PORT = process.env.PORT;
server.listen(process.env.PORT, () => {
  console.log("Le serveur a démarré au port " + PORT);
});
