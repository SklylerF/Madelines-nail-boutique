const router = require("express").Router();
const homeRoutes = require("./homeRoutes");
const managerLogin = require("./adminRoutes");

router.use("/home", homeRoutes);
router.use("/admin-login", managerLogin);
router.use("/api", apiRoutes);

module.exports = router;
