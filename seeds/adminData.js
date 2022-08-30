const Admin = require("../models/admin");

const adminData = [
  {
    username: "LuceroGarcia2000",
    password: "Testpassword",
  },
];

const seedAdmin = () => Admin.bulkCreate(adminData);

module.exports = seedAdmin;
