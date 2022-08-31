const router = require("express").Router();
const homeRoutes = require("./homeRoutes");
const apiRoutes = require("./api");

//all home routes are going to be available to the user
//All api routes are going to be available to the Admin
router.use("/", homeRoutes);
router.use("/api", apiRoutes);

module.exports = router;
