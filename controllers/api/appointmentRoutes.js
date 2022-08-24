const router = require(`express`).Router();
const { Employee, Appointment } = require(`../../models`);

//GETTIN ALL APPOINMENTS
router.get(`/`, async (req, res) => {
    try {
        const appointmentData = await Appointment.findAll({
            include: {
                model: Employee,
            },
        });
        if (!appointmentData) {
            res.status(404).json(`No Appoinments Found`);
            return;
        }
        res.status(200).json(appointmentData);
    } catch (err) {
        res.status(500).json(err);
    }
});

//GETTING APPOINMENTS BY APPOINMENT NUMBER
router.get(`/:id`, async (req, res) => {
    try {
        const appointmentNumber = await Appointment.findByPk(req.params.id);
        if (!appointmentNumber) {
            res.status(404).json(`No Appointment Found`);
        }
        res.status(200).json(appointmentNumber);
    } catch (err) {
        res.status(500).json(err);
    }
});

//POSTING APPOINMENTS TO THE DATABASE
router.post(`/`, async (req, res) => {
    try {
        const addAppoinment = await Appointment.create(req.body);
        res.status(200).json(addAppoinment);
    } catch (err) {
        res.status(500).json(err);
    }
});

//EDITING AN APPOINTMENT DATE SERVICES AND ANY OTHER QUESTIONS
router.put(`/:id`, async (req, res) => {
    try {
        const updateAppointment = await Appointment.update(
            { appointment_date: req.body.appointment_date, service_requested: req.body.service_requested, questions: req.body.questions },
            {
                where: {
                    id: req.params.id,
                },
            }
        );
        if (!updateAppointment) {
            res.status(404).json(`No Appointment Found By That ID`);
        }
        res.status(200).json(updateAppointment);
    } catch (err) {
        res.status(500).json(err);
    }
});

//DELETING APPOINTMENTS
router.delete(`/:id`, async (req, res) => {
    try {
        const deletedAppointment = await Appointment.destroy({
            where: {
                id: req.params.id,
            },
        });
        if (!deletedAppointment) {
            res.status(404).json(`No Appointment Found By That ID`);
            return;
        }
        res.status(200).json(deletedAppointment);
    } catch (err) {
        res.status(500).json(err);
    }
});
module.exports = router;
