const withAuth = (req, res, next) => {
  if (!req.session.loggedIn) {
    res.redirect("/api/admin/login");
  } else {
    next();
  }
};
module.exports = withAuth;
