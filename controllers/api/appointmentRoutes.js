const router = require(`express`).Router();
const { Employee, Appointment } = require(`../../models`);

//GETTIN ALL APPOINMENTS
router.get(`/`, async (req, res) => {
    try {
        const appointmentData = await Appointment.findAll();
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

module.exports = router;
