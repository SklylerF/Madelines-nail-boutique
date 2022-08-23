// const sequelize = require(`../config/connection`);
// const Employee = require(`../models/employee`);
// const Appointment = require(`../models/appointment`);
// // const seedAppointment = require(`./appointmentData`);
// const employeeData = require(`./employeeData.json`);
// const appointmentData = require(`./appointmentData.json`);

// const seedAll = async () => {
//     await sequelize.sync({ force: true });

//     await Employee.bulkCreate(employeeData, {
//         individualHooks: true,
//         returning: true,
//     });

//     await Appointment.bulkCreate(appointmentData, {
//         individualHooks: true,
//         returning: true,
//     });

//     process.exit(1);
// };

// seedAll();

//--------WE DONT NEED THIS CODE YET UNTIL WE HAVE ACTUAL APPOINTMENTS
