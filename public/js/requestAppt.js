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

  const first_name = document.querySelector("#Fname").value;
  const last_name = document.querySelector("#Lname").value;
  const customer_email = document.querySelector("#email").value;
  const customer_phone = document.querySelector("#Phone").value;
  const appointment_time = document.querySelector("#date-time").value;
  const picture = document.querySelector("#Pictures").value;
  const service_requested = document.querySelector("#service_requested").value;
  const questions = document.querySelector("#questions").value;

  console.log(first_name, last_name, customer_email, customer_phone, appointment_time, picture, service_requested, questions);

  if (first_name && last_name && customer_email && customer_phone && appointment_time && service_requested) {
    const response = await fetch("/api/appointments/", {
      method: "POST",
      body: JSON.stringify({ first_name, last_name, appointment_time, customer_email, customer_phone, service_requested }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/");
      alert("Thank your for requesting an appointment.Please make sure to check your emails and text messages. We will contact you shortly.");
    } else {
      alert("Couldn't Create Appointment, Please Try Again");
    }
  }
};

document.querySelector("#submitApptBtn").addEventListener("click", requestAppointmentFormHandler);
