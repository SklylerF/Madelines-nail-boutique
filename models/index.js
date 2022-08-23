const Employee = require(`./employee`);
const Appointment = require(`./appointment`);

Employee.hasOne(Appointment, {
    foreignKey: `employee_name`,
    onDelete: `CASCADE`,
});

Appointment.belongsTo(Employee, {
    foreignKey: `employee_name`,
});

module.exports = { Employee, Appointment };
