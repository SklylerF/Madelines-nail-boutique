const router = require("express").Router();
const adminRoutes = require(`./adminRoutes`);
const appointmentRoutes = require(`./appointmentRoutes`);

router.use(`/admin`, adminRoutes);
router.use(`/appointments`, appointmentRoutes);

module.exports = router;
