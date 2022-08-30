const router = require("express").Router();
const Appointment = require("../models/appointment");

router.get("/", async (req, res) => {
  res.render("homePage");
});

router.get("/requestappt", async (req, res) => {
  res.render("requestappt");
});

router.post(`/requestappt`, async (req, res) => {
  try {
    const createAppointment = await Appointment.create(req.body);
    res.status(200).json(createAppointment);
  } catch (err) {
    res.status(500).send({ message: "Error in creating the appointment please try again or contact administrator" });
  }
});

router.get(`/requestappt/:id`, async (req, res) => {
  try {
    const appointmentData = await Appointment.findByPk(req.params.id);
    res.status(200).json(appointmentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get(`/login`, (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/api/admin/appointments");
    return;
  }
  res.render("admin_login");
});

module.exports = router;
