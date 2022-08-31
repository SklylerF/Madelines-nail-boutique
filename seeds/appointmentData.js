const Appointment = require(`../models/appointment`);

const appointments = [
  {
    first_name: "Cruz",
    last_name: "Cordero",
    appointment_time: "08/02/3000",
    customer_email: "corderoleoncruzp@gmail.com",
    customer_phone: "9512617553",
    service_requested: "Manicure",
    questions: "none",
  },
];
const seedAppointment = () => Appointment.bulkCreate(appointments);

module.exports = seedAppointment;
