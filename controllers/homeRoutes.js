const router = require("express").Router();
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
    try {
        res.render(`homePage`);
    } catch (err) {}
});

module.exports = router;
