const router = require(`express`).Router();
const Admin = require(`../../models/admin`);
const Appointment = require(`../../models/appointment`);

router.get(`/appointments`, async (req, res) => {
  try {
    const appointmentData = await Appointment.findAll();
    const appointments = appointmentData.map((appointment) => {
      appointment.get({ plain: true });
    });
    return res.render("admin_appointments", appointments);
  } catch (err) {
    res.status(500).send(`Sorry Something Went Wrong`);
  }
});

router.post(`/`, async (req, res) => {
  try {
    const adminData = await Admin.create(req.body);
    res.status(200).json(adminData);
  } catch (err) {
    res.status(500).send(`Sorry Something Went Wrong`);
  }
});

module.exports = router;
