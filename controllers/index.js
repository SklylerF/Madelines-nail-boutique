const router = require("express").Router();
const homeRoutes = require("./homeRoutes");
const adminRoutes = require("./api/adminRoutes");
const apiRoutes = require("./api");

router.use("/home", homeRoutes);
router.use("/manager-login", adminRoutes);
router.use("/api", apiRoutes);

module.exports = router;
