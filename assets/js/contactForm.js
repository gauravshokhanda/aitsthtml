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
          console.log(result); // Log the server response for debugging
          alert("Form submitted successfully!");
          form.reset()
        })
        .catch((error) => {
          console.error(error);
          alert("There was an error submitting the form. Please try again.");
        });
    });
});
