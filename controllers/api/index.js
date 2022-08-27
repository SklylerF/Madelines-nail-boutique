const router = require("express").Router();
const appointmentRoutes = require(`./appointmentRoutes`);
const adminRoutes = require(`./adminRoutes`);

router.use(`/appointments`, appointmentRoutes);
router.use(`/admin`, adminRoutes);

module.exports = router;
