const sequelize = require(`../config/connection`);
const Appointment = require(`../models/appointment`);
const appointmentData = require(`./appointmentData.json`);

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await Appointment.bulkCreate(appointmentData, {
        individualHooks: true,
        returning: true,
    });

    process.exit(0);
};

seedAll();
