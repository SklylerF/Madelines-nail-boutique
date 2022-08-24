/* eslint-disable no-undef */
const router = require('express').Router();
const managerHomePage = require('../utils/auth')



router.get('/',managerHomePage,(req, res) => {
    try {
      res.render('homePage', { 
  logged_in: req.session.logged_in         
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;
