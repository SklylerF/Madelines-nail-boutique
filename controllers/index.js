
const router = require('express').Router();
const homeRoutes = require('./homeRoutes');

router.use('/home', homeRoutes);

const apiRoutes = require("./api");


router.use("/api", apiRoutes);

module.exports = router;
