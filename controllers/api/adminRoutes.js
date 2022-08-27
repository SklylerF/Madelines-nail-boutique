const router = require(`express`).Router();
const { response } = require("express");
const Admin = require(`../../models/admin`);

router.get(`/`, async (req, res) => {
  try {
    const adminData = await Admin.findAll();
    if (!adminData) {
      res.status(404).send("404");
      return;
    }
    res.status(200).json(adminData);
  } catch (err) {
    res.status(500).send(`Sorry Something Went Wrong`);
  }
});

//getting an admin data with their admin_id
router.get(`/:id`, async (req, res) => {
  try {
    const adminData = await Admin.findByPk(req.params.id);
    if (!adminData) {
      res.status(404).send("No admin by that ID found");
      return;
    }
    res.status(200).json(adminData);
  } catch (err) {
    res.status(500).send(`Sorry Something Went Wrong`);
  }
});

//creating an admin
router.post(`/`, async (req, res) => {
  try {
    const createAdmin = await Admin.create(req.body);
    res.status(200).json(createAdmin);
  } catch (err) {
    res.status(500).send(`Sorry Something Went Wrong`);
  }
});

router.put(`/:id`, async (req, res) => {
  try {
    const updateAdmin = await Admin.update(
      {
        username: req.body.username,
        password: req.body.password,
      },
      {
        where: {
          id: req.params.id,
        },
        individualHooks: true,
      }
    );
    if (!updateAdmin) {
      res.status(404).send("No admin by that ID found");
      return;
    }
    res.status(200).json(updateAdmin);
  } catch (err) {
    res.status(500).send(`Sorry Something Went Wrong`);
  }
});

router.delete(`/:id`, async (req, res) => {
  try {
    const deleteAdmin = await Admin.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!deleteAdmin) {
      res.status(404).send("No admin by that ID found");
      return;
    }
    res.status(200).json(deleteAdmin);
  } catch (err) {
    res.status(500).send(`Sorry Something Went Wrong`);
  }
});
module.exports = router;
