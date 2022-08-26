const router = require(`express`).Router();

// Gets admin log in page
router.get(`/adminlog`, async (req,res) => {
    try {
        res.render('admin-login');
    } catch (err) {
        res.status(500).json('Sever error');
    }
});

module.exports = router;