const router = require(`express`).Router();
const Admin = require(`../../models/admin`);
const Appointment = require(`../../models/appointment`);
const withAuth = require(`../../utils/auth`);

//for signing in to render the admin page
router.get(`/login`, async (req, res) => {
  res.render("admin_login");
});

//use to get the login info from the admin/login page andc checking the password
router.post("/login", async (req, res) => {
  try {
    const adminData = await Admin.findOne({
      where: {
        username: req.body.username,
      },
    });
    if (!adminData) {
      res.status(404).json({ message: "No Admin Found" });
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

//localhost:3001/api/admin/appoinments
//if the user is trying to access this website without being logged in it will...
//redirect them to the home page
router.get(`/appointments`, withAuth, async (req, res) => {
  try {
    const adminAppoinments = await Appointment.findAll();
    const appointments = adminAppoinments.map((appointment) => {
      appointment.get({ plain: true });
      res.render("admin_appointments", appointments);
    });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

module.exports = router;
