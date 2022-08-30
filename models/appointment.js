//still working on connection the appointments to the employees name ---------------------------------------
const { Model, DataTypes } = require(`sequelize`);
const sequelize = require("../config/connection");

class Appointment extends Model {}

const randomNumber = () => {
  return Math.floor(Math.random() * 1000000);
};

Appointment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      defaultValue: () => {
        return randomNumber();
      },
      primaryKey: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    appointment_time: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    customer_email: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isEmail: true,
      },
    },
    customer_phone: {
      type: DataTypes.NUMERIC,
      allowNull: false,
      validate: {
        notNull: true,
        isNumeric: true,
        len: [10, 10],
      },
    },
    service_requested: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    picture: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    questions: {
      type: DataTypes.STRING,
      allowNull: true,
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
