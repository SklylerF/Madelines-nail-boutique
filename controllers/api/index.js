const router = require("express").Router();
const employeeRoutes = require(`./employeeRoutes`);
const appointmentRoutes = require(`./appointmentRoutes`);

router.use(`/employees`, employeeRoutes);
router.use(`/appointments`, appointmentRoutes);

module.exports = router;
