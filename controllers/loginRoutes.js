/* eslint-disable no-undef */
const router = require('express').Router();


router.get("/", (req, res) => {
    if (req.session.logged_in) {
      res.redirect("/home");
      return;
    }
  
    res.render("loginPage");
  });
  

  router.post("/login", async (req, res) => {
    try {
      const userData = await Employee.findOne({
        where: { username: req.body.username }
      });
  
      if (!userData) {
        res
          .status(400)
          .json({ message: "Incorrect username or password, please try again" });
        return;
      }
  
      const validPassword = await userData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: "Incorrect email or password, please try again" });
        return;
      }
  
      req.session.save(() => {
        req.session.employee_id = userData.id;
        req.session.logged_in = true;
  
        res.json({ employee: userData, message: "You are now logged in!" });
      });
    } catch (err) {
      res.status(400).json(err);
    }
  });

  module.exports = router;
