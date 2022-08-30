const sequelize = require("../config/connection");
const seedAppointment = require("./appointmentData");
const seedAdmin = require("./adminData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedAppointment();

  await seedAdmin();

  process.exit(0);
};

seedAll();
