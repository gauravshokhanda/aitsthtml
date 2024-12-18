document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("contactForm")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission

      const form = document.getElementById("contactForm");

      // Get the values from the form inputs
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;
      const source = document.getElementById("source").value;
      const message = document.getElementById("message").value;
      const newsletter = document.getElementById("newsletter").checked;

      if (!name || !email || !phone || !source || !message || !newsletter) {
        alert("All fields are required. Please fill in all the fields.");
        return;
      }

      if (!validatePhone(phone)) {
        alert("Please enter a valid phone number.");
        return;
      }

      // Prepare the data to send
      const raw = JSON.stringify({
        email: email,
        message: message,
        name: name,
        number: phone,
        resolved: false,
        find_us: source,
        newsletter: newsletter ? "true" : "false",
      });

      // Set up the request options
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: raw,
        redirect: "follow",
      };

      // Make the API request
      fetch(
        "https://associatedincometax.iamdeveloper.in/api/contacts",
        requestOptions
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Failed to submit form");
          }
        })
        .then((result) => {
          console.log(result);
          alert("Form submitted successfully!");
          form.reset()
        })
        .catch((error) => {
          console.error(error);
          alert("Please fill the required fields to submit the form.");
        });
    });
  function validatePhone(phone) {
    const phoneRegex = /^[0-9()\- ]+$/;
    return phoneRegex.test(phone);
  }
});
