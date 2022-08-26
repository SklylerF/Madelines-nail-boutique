const flatpickr = require("flatpickr");
const appointmentCalendar = document.querySelector(".flatpickr")


flatpickr(appointmentCalendar, {
    enableTime: true,
    dateFormat: "m-d-Y H:i",
    minDate: "today",
    maxDate: new Date().fp_incr(30), // 30 days from now
    minTime: "09:30",
    maxTime: "19:00",
    wrap: true
});
