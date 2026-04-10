
  const form = document.getElementById("loginForm");
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const checkbox = document.getElementById("checkbox");
    const existingBtn = document.getElementById("existing");


    window.onload = function () {
      const savedUser = localStorage.getItem("username");
      const savedPass = localStorage.getItem("password");

      if (savedUser && savedPass) {
        existingBtn.style.display = "block";
      } else {
        existingBtn.style.display = "none";
      }
    };

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const user = username.value;
      const pass = password.value;

      alert(`Logged in as ${user}`);

      if (checkbox.checked) {
        // Save to localStorage
        localStorage.setItem("username", user);
        localStorage.setItem("password", pass);
      } else {
        // Remove stored data
        localStorage.removeItem("username");
        localStorage.removeItem("password");
      }

      // Update button visibility
      if (localStorage.getItem("username")) {
        existingBtn.style.display = "block";
      } else {
        existingBtn.style.display = "none";
      }
    });

    // 🔹 Existing User Login
    existingBtn.addEventListener("click", function () {
      const savedUser = localStorage.getItem("username");

      if (savedUser) {
        alert(`Logged in as ${savedUser}`);
      }
    });