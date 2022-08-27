const router = require(`express`).Router();
const Appointment = require("../../models/appointment");

//GETTIN ALL APPOINMENTS
router.get(`/`, async (req, res) => {
  try {
    const appointmentData = await Appointment.findAll();
    if (!appointmentData) {
      res.status(404).json(`No Appoinments Found`);
      return;
    }
    res.status(200).json(appointmentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GETTING APPOINMENTS BY APPOINMENT NUMBER
router.get(`/:id`, async (req, res) => {
  try {
    const appointmentNumber = await Appointment.findByPk(req.params.id);
    if (!appointmentNumber) {
      res.status(404).json(`No Appointment Found`);
    }
    res.status(200).json(appointmentNumber);
  } catch (err) {
    res.status(500).json(err);
  }
});

//POSTING APPOINMENTS TO THE DATABASE
router.post(`/`, async (req, res) => {
  try {
    const addAppoinment = await Appointment.create(req.body);
    res.status(200).json(addAppoinment);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Send a request yo update an appointment
router.put(`/:id`, async (req, res) => {
  try {
    const updateAppointment = await Appointment.update(
      {
        username: req.body.username,
        password: req.body.password,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    if (!updateAppointment) {
      res.status(404).json({ message: `Couldn't Update Appointment` });
      return;
    }
    res.status(200).json(updateAppointment);
  } catch (err) {
    res.status(500).json(err);
  }
});

//delete your apppoinmet
router.delete(`/:id`, async (req, res) => {
  try {
    const deleteAppointment = await Appointment.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!deleteAppointment) {
      res.status(404).json({ message: `Couldn't Delete Appointment` });
      return;
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get(`/admin/appointment`, async (req, res) => {
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

module.exports = router;
