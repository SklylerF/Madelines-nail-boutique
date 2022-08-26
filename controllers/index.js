const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const managerLogin = require('./loginRoutes')

router.use('/home', homeRoutes);
router.use('/manager-login', managerLogin);


const apiRoutes = require("./api");

router.use("/api", apiRoutes);

module.exports = router;
