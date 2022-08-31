const Appointment = require("../../models/appointment");
const router = require("express").Router();

router.post(`/`, async (req, res) => {
  try {
    const addAppointment = await Appointment.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      appointment_time: req.body.appointment_time,
      customer_email: req.body.customer_email,
      customer_phone: req.body.customer_phone,
      service_requested: req.body.service_requested,
      picture: req.body.picture,
      questions: req.body.questions,
    });
    res.status(200).json(addAppointment);
  } catch (err) {
    res.status(500).json({ message: "Something Couldn't Create Appointment" });
  }
});

module.exports = router;
