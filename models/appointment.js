//still working on connection the appointments to the employees name

// const { UUIDV4, Model, DataTypes } = require(`sequelize`);
// const sequelize = require(`../config/connection`);

// class Appointment extends Model {}

// const randomNumber = Math.floor(Math.random() * 1000000);

// Appointment.init(
//     {
//         id: {
//             type: DataTypes.INTEGER,
//             defaultValue: randomNumber,
//             primaryKey: true,
//         },
//         customer_name: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         customer_phone: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             isNumeric: true,
//             len: [10, 10],
//         },
//         customer_email: {
//             type: DataTypes.STRING,
//             allowNull: true,
//             validate: {
//                 isEmail: true,
//             },
//         },
//         employee_id: {
//             type: DataTypes.INTEGER,
//             references: {
//                 model: `employee`,
//                 key: `id`,
//             },
//         },
//     },
//     {
//         sequelize,
//         timestamps: true,
//         freezeTableName: true,
//         underscored: true,
//         modelName: "appointment",
//     }
// );

// module.exports = Appointment;
