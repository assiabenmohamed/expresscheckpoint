/**
 * Middleware pour vérifier si la requête est faite pendant les heures ouvrables
 * (du lundi au vendredi, de 9h à 17h)
 */
function workingHoursCheck(req, res, next) {
  const now = new Date();
  const dayOfWeek = now.getDay(); // 0 = dimanche, 1 = lundi, ..., 6 = samedi
  const hour = now.getHours();
  // Vérification que nous sommes en semaine (1-5 = lundi à vendredi)
  // et entre 9h et 17h (inclus)
  const isWorkingDay = dayOfWeek >= 1 && dayOfWeek <= 5;
  const isWorkingHour = hour >= 9 && hour < 17;

  if (isWorkingDay && isWorkingHour) {
    // Si nous sommes pendant les heures ouvrables, continuez
    next();
  } else {
    // Sinon, redirigez vers la page "hors service"
    res.render("hors-service", {
      title: "Hors Service - Notre Entreprise",
    });
  }
}
export default workingHoursCheck;
