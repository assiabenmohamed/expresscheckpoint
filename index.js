import cors from "cors";
import "dotenv/config";
import express from "express";
import helmet from "helmet";
import path from "path";
import { fileURLToPath } from "url";
import workingHoursCheck from "./middleware/workingHoursCheck.js";
import pagesRoutes from "./routes/page.js";

// Configuration des chemins avec ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT; // Valeur par défaut au cas où PORT n'est pas défini

// Middlewares de sécurité et configuration
app.use(helmet());
app.use(cors());
app.use(express.json());

// Configuration des fichiers statiques (une seule définition)
app.use(express.static(path.join(__dirname, "public")));

// Configuration du moteur de template Pug
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Middleware pour vérifier les heures ouvrables
//app.use(workingHoursCheck);

// Routes des pages
app.use("/", pagesRoutes);

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
