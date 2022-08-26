const router = require("express").Router();
const homeRoutes = require("./homeRoutes");
const adminRoutes = require("./api/adminRoutes");

router.use("/home", homeRoutes);
router.use("/manager-login", adminRoutes);

const apiRoutes = require("./api");

router.use("/api", apiRoutes);

module.exports = router;
