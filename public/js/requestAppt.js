const appointmentCalendar = document.querySelector(".flatpickr");

flatpickr(appointmentCalendar, {
  enableTime: true,
  dateFormat: "m-d-Y H:i",
  minDate: "today",
  maxDate: new Date().fp_incr(30), // 30 days from now
  minTime: "09:30",
  maxTime: "19:00",
  wrap: true,
});

const requestAppointmentFormHandler = async (event) => {
  event.preventDefault();

  const first_name = document.querySelector("#Fname").value.trim();
  const last_name = document.querySelector("#Lname").value.trim();
  const customer_email = document.querySelector("#email").value.trim();
  const customer_phone = document.querySelector("#Phone").value.trim();
  const appointment_time = document.querySelector("#date-time").value.trim();
  const picture = document.querySelector("#Pictures").value.trim();
  const questions = document.querySelector("#Description").value.trim();

  if (first_name && last_name && customer_email && customer_phone && appointment_time) {
    const response = await fetch("/requestappt", {
      method: "POST",
      body: JSON.stringify({ first_name, last_name, customer_email, customer_phone, appointment_time, picture, questions }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/");
      alert("Thank your for requesting an appointment.Please make sure to check your emails and text messages. We will contact you shortly.");
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector(".requestApptForm").addEventListener("submit", requestAppointmentFormHandler);
