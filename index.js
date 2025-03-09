import cors from "cors";
import "dotenv/config";
import express from "express";
import helmet from "helmet";
import path from "path";
import { fileURLToPath } from "url";
import workingHoursCheck from "./middleware/workingHoursCheck.js";
import pagesRoutes from "./routes/page.js";
const app = express();
const PORT = process.env.PORT; // Valeur par défaut au cas où PORT n'est pas défini
// Middlewares de sécurité et configuration
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.static("./public"));
// Configuration du moteur de template Pug
app.set("view engine", "pug");
app.set("views", "./views");
// Middleware pour vérifier les heures ouvrables
app.use(workingHoursCheck);
// Routes des pages
app.use("/", pagesRoutes);
// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
