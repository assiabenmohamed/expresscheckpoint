import { Router } from "express";

const router = Router();

// Route pour la page d'accueil
router.get("/", (req, res) => {
  res.render("accueil", {
    title: "Accueil - Notre Entreprise",
    active: "accueil",
  });
});

// Route pour la page de services
router.get("/services", (req, res) => {
  res.render("services", {
    title: "Nos Services - Notre Entreprise",
    active: "services",
  });
});

// Route pour la page de contact
router.get("/contact", (req, res) => {
  res.render("contact", {
    title: "Contactez-nous - Notre Entreprise",
    active: "contact",
  });
});

export default router;
