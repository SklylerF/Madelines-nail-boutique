const sequelize = require(`../config/connection`);
const Employee = require(`../models/employee`);
// const seedAppointment = require(`./appointmentData`);
const employeeData = require(`./employeeData.json`);
const seedAll = async () => {
    await sequelize.sync({ force: true });

    await Employee.bulkCreate(employeeData, {
        individualHooks: true,
        returning: true,
    });

    process.exit(1);
};

seedAll();
