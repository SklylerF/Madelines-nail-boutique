const Employee = require(`./employee`);
const Appointment = require(`./appointment`);

Employee.hasMany(Appointment, {
    foreignKey: `employee_id`,
    onDelete: `CASCADE`,
});

Appointment.belongsTo(Employee, {
    foreignKey: `employee_id`,
});

module.exports = { Employee, Appointment };
