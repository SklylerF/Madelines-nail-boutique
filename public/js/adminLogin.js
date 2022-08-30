const adminLogin = async (event) => {
  event.preventDefault();
  // Collect values from the login form
  const username = document.querySelector("#username").value.trim();
  const password = document.querySelector("#password").value.trim();

  if (username && password) {
    const response = await fetch("api/admin/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, redirect the browser to the home page
      document.location.replace("/api/admin/appointments");
    } else {
      alert(response.statusText);
    }
  }
};

const logout = async () => {
  const response = await fetch("api/admin/", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/home");
  } else {
    alert(response.statusText);
  }
};

document.querySelector(".input_container").addEventListener("submit", adminLogin);

document.querySelector("#logoutBtn").addEventListener("click", adminLogout());
