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
    const appointmentData = await Appointment.create(req.body);
  } catch (err) {
    res.status(500).send({ message: "Error in creating the appointment please try again or contact administrator" });
  }
});
module.exports = router;
