const Admin = require("../models/admin");
const bcrypt = require("bcrypt");

const adminData = [
  {
    username: "LuceroGarcia2000",
    password: "Testpassword",
  },
];

const seedAdmin = () => Admin.bulkCreate(adminData);

module.exports = seedAdmin;
