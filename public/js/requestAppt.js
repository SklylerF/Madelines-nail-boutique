import flatpickr from "flatpickr";
const calendar = document.querySelector(".calendar_input");

flatpickr(calendar, {
  enableTime: true,
  dateFormat: "m-d-Y H:i",
  minDate: "today",
  maxDate: new Date().fp_incr(30), // 30 days from now
  minTime: "09:30",
  maxTime: "19:00",
  wrap: true,
});

// const requestAppointmentFormHandeler = async (event) => {
//   event.preventDefault();

//   const fName = document.querySelector("#Fname");
//   const lName = document.querySelector("#Lname");
//   const email = document.querySelector("#email");
//   const phone = document.querySelector("#Phone");
//   const apptTimeDate = document.querySelector("#date-time");
//   const pictures = document.querySelector("#Pictures");
//   const textArea = document.querySelector("#Description");
// };

// document.querySelector(".requestApptForm").addEventListener("submit", requestAppointmentFormHandeler);
