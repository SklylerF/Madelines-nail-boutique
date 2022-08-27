/* eslint-disable no-undef */
const router = require("express").Router();
const { withAuth, managerHomePage } = require("../utils/auth");
const Appointment = require("../models/appointment");

router.get("/", withAuth, async (req, res) => {
  res.render(`homepage`);
});

router.get(`/appointment`, async (req, res) => {
  return res.render(`make_appointment`);
});

//get the login page with /admin/login
router.get(`/admin/login`, (req, res) => {
  return res.render(`admin_login`);
});

module.exports = router;
