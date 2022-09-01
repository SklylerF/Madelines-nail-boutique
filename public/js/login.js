const login = async (event) => {
  event.preventDefault();
  // Collect values from the login form
  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;
  if (username && password) {
    const response = await fetch("/api/admin/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, redirect the browser to the home page
      document.location.replace("/api/admin/appointments");
    } else {
      alert("Either the Username or Password field is incorrect");
      return;
    }
  }
};

document.querySelector("#adminEnterBtn").addEventListener("click", login);
