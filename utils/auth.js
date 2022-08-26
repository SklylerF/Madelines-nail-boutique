/* eslint-disable no-undef */
const managerHomePage = (req, res, next) => {
    if (req.session.logged_in) {
        document.getElementById("managerBtn").style.display = "flex";
        document.getElementById("loginBtn").style.display = "none";
        next();
    } else {
        next();
    }
};

const withAuth = (req, res, next) => {
    if (req.session.logged_in) {
        res.redirect("/admin-login");
    } else {
        next();
    }
};

module.exports = withAuth;
module.exports = managerHomePage;
