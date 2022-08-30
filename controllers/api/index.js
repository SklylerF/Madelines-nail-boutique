const router = require("express").Router();
const adminRoutes = require(`./adminRoutes`);

router.get(`/login`, (req, res) => {
  res.render("requestappt");
});

router.use(`/admin`, adminRoutes);

module.exports = router;
