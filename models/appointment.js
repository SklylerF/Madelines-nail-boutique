//still working on connection the appointments to the employees name ---------------------------------------

const { UUIDV4, Model, DataTypes } = require(`sequelize`);
const sequelize = require(`../config/connection`);

class Appointment extends Model {}

const randomNumber = () => {
    return Math.floor(Math.random() * 1000000);
};

Appointment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        appointment_number: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            defaultValue: () => {
                return randomNumber();
            },
        },
        customer_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        customer_phone: {
            type: DataTypes.NUMERIC,
            allowNull: false,
            validate: {
                notNull: true,
                isNumeric: true,
            },
        },
        customer_email: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                isEmail: true,
                len: [10, 10],
            },
        },
        employee_name: {
            type: DataTypes.STRING,
            references: {
                model: `employee`,
                key: `name`,
            },
        },
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: "appointment",
    }
);

module.exports = Appointment;
