/* eslint-disable no-undef */
const router = require("express").Router();
const Appointment = require("../models/appointment");
const Gallery = require("../models/gallery");

router.get("/", async (req, res) => {
  try {
    const galleryData = await Gallery.findAll();
    const galleries = galleryData.map((gallery) => {
      gallery.get({ plain: true });
    });
    res.render("homepage", galleries);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get(`/requestappt`, (req, res) => {
  try {
    res.render("requestappt");
  } catch (err) {
    res.status(500).send(`Sorry Something Went Wrong`);
  }
});
router.get(`/appointment`, async (req, res) => {
  return res.render(`make_appointment`);
});

//get the login page with /admin/login
router.get(`/admin/login`, (req, res) => {
  return res.render(`admin_login`);
});

module.exports = router;
