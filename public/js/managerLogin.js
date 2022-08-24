const loginFormHandler = async (event) => {
    event.preventDefault();
    // Collect values from the login form
    const username = document.querySelector("#username").value.trim();
    const password = document.querySelector("#password").value.trim();
  
    if (username && password) {
      const response = await fetch("/manager-login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" }
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the home page
        document.location.replace("/home");
      } else {
        alert(response.statusText);
      }
    }
  };

  const logout = async () => {
    const response = await fetch("/manager-login", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
    });
  
    if (response.ok) {
      document.location.replace("/home");
    } else {
      alert(response.statusText);
    }
  };
  
  document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);

  document.querySelector("#logoutBtn").addEventListener("click", logout);
