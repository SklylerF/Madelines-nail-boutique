const appointmentCalendar = document.querySelector(".flatpickr");

flatpickr(appointmentCalendar, {
    enableTime: true,
    dateFormat: "Y-m-d H:i",
    minDate: "today",
    maxDate: new Date().fp_incr(30), // 30 days from now
    minTime: "09:30",
    maxTime: "19:00",
    wrap: true
});

const requestAppointmentFormHandeler = async (event) => {
  event.preventDefault();

  const first_name = document.querySelector("#Fname").value;
  const last_name = document.querySelector("#Lname").value;
  const customer_email = document.querySelector("#email").value;
  const customer_phone = document.querySelector("#Phone").value;
  const appointment_time = document.querySelector("#date-time").value;
  const picture = document.querySelector("#Pictures").value;
  const questions = document.querySelector("#Description").value;
  
  if (first_name && last_name  && customer_email && customer_phone && appointment_time) {
    const response = await fetch('/api/appointments', {
      method: 'POST',
      body: JSON.stringify({ first_name, last_name, customer_email, customer_phone, appointment_time, questions, picture }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace("/home");
      alert('Thank your for requesting an appointment.Please make sure to check your emails and text messages. We will contact you shortly.')
    } else {
      alert(response.statusText);
    }
}};

document.querySelector(".requestApptForm").addEventListener("submit", requestAppointmentFormHandeler);
