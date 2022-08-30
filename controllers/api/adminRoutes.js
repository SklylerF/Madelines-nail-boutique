const router = require(`express`).Router();
const Admin = require(`../../models/admin`);
const Appointment = require(`../../models/appointment`);

const withAuth = require(`../../utils/auth`);

//for signing in to render the admin page
router.get(`/`, async (req, res) => {
  try {
    const adminData = await Admin.findAll();
    res.json(adminData);
  } catch (err) {
    console.log(err);
  }
});
// use to get the login info from the admin/login page andc checking the password
router.post("/login", async (req, res) => {
  try {
    const adminData = await Admin.findOne({
      where: {
        username: req.body.username,
      },
    });
    if (!adminData) {
      res.status(404).json({ message: "No Admin By That Username Found" });
    }
    const validPassword = await adminData.checkPassword(req.body.password);
    if (!validPassword) {
      res.status(404).json({ message: "Invalid Password or Email" });
    }
    req.session.save(() => {
      req.session.loggedIn = true;
      res.status(200).json({ admin: adminData, message: "Login Successful" });
    });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

//localhost:3001/api/admin/appointments
//if the user is trying to access this website without being logged in it will...
//redirect them to the home page
router.get(`/appointments`, withAuth, async (req, res) => {
  try {
    const adminAppointments = await Appointment.findAll();
    const appointments = adminAppointments.map((appointment) => {
      return appointment.get({ plain: true });
    });
    console.log(appointments);
    res.render("admin_appointments", { appointments, loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

router.post(`/`, async (req, res) => {
  try {
    const createAdmin = await Admin.create(req.body, {
      individualHooks: true,
    });
    res.status(200).json(createAdmin);
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

router.delete(`/:id`, async (req, res) => {
  try {
    const deleteAdmin = await Admin.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(deleteAdmin);
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

module.exports = router;
