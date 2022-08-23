const router = require(`express`).Router();
const { Employee, Appointment } = require(`../../models`);

//Getting ALL currrent Employees
router.get(`/`, async (req, res) => {
    try {
        const employeeData = await Employee.findAll({
            include: {
                model: Appointment,
            },
        });
        if (!employeeData) {
            res.status(404).json(`No Employees Found`);
            return;
        }
        res.status(200).json(employeeData);
    } catch (err) {
        res.status(500).json(`Server Error: ${err}`);
    }
});

//FINDING ONE EMPLOYEE BY THEIR ID AND ASSOCIATED APPOINTMENTS

router.get(`/:id`, async (req, res) => {
    try {
        const employeeData = await Employee.findByPk(req.params.id, {
            include: {
                model: Appointment,
            },
        });
        if (!employeeData) {
            res.status(404).json(`No Employee Found, Please Check Employee Number`);
        }
        res.status(200).json(employeeData);
    } catch (err) {
        res.status(500).json(`Server Error: ${err}`);
    }
});

//ADDING AN EMPLOYEE
router.post(`/`, async (req, res) => {
    try {
        const addEmployee = await Employee.create(req.body);
        res.status(200).json(addEmployee);
    } catch (err) {
        res.status(500).json(`Server error: ${err}`);
    }
});

//UPDATING AN EMPLOYEE DATA BASED ON THEIR EMPLOYEE ID
router.put(`/:id`, async (req, res) => {
    try {
        const updatedEmployee = await Employee.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        if (!updatedEmployee) {
            res.status(404).json({ message: `No Employee Found, Try A Different Employee Name` });
            return;
        }
        res.status(200).json(updatedEmployee);
    } catch (err) {
        res.status(500).json(`Couldn't Update Employee, Please try again later`);
    }
});

//DELETING AN EMPLOYEE OFF THE DATABASE
router.delete(`/:id`, async (req, res) => {
    try {
        const deleteEmployee = await Employee.destroy({
            where: {
                id: req.params.id,
            },
        });
        if (!deleteEmployee) {
            res.status(404).json({ message: `No Employee Found, Please Check your Employee Name` });
        }
        res.status(200).json(deleteEmployee);
    } catch (err) {
        res.status(500).json(`Server error: ${err}`);
    }
});

module.exports = router;
