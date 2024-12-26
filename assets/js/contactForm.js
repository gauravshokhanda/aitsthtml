document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("contactForm")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission

      const form = document.getElementById("contactForm");

      // Get the values from the form inputs
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const source = document.getElementById("source").value.trim();
      const message = document.getElementById("message").value.trim();
      const newsletter = document.getElementById("newsletter").checked;

      // Validate the inputs
      if (!name || !email || !phone || !source || !message) {
        alert("All fields are required. Please fill in all the fields.");
        return;
      }

      if (!validatePhone(phone)) {
        alert("Please enter a valid phone number.");
        return;
      }

      // Prepare the data to send
      const data = JSON.stringify({
        email: email,
        message: message,
        name: name,
        phone: phone,
        source: "website",
        find_us: source,
        newsletter: newsletter ? "true" : "false",
      });

      // Set up the request options
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
        redirect: "follow",
      };

      // Make the API request
      fetch(
        "https://associatedincometax.iamdeveloper.in/api/zoho/add-lead",
        requestOptions
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            return response.json().then((error) => {
              throw new Error(error.message || "Failed to submit form");
            });
          }
        })
        .then((result) => {
          console.log(result);
          alert("Form submitted successfully!");
          form.reset();
        })
        .catch((error) => {
          console.error(error);
          alert(`Error: ${error.message}`);
        });
    });

  // Phone validation function
  function validatePhone(phone) {
    const phoneRegex = /^\d{10}$/; // Ensures a 10-digit phone number
    return phoneRegex.test(phone);
  }
});
