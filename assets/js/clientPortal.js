document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector(".up-contact form")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the default form submission

      // Get the values from the form inputs
      const firstName = document.querySelector(
        '.up-contact input[placeholder="First Name"]'
      ).value;
      const lastName = document.querySelector(
        '.up-contact input[placeholder="Last Name"]'
      ).value;
      const email = document.querySelector(
        '.up-contact input[placeholder="Email"]'
      ).value;
      const phoneNumber = document.querySelector(
        '.up-contact input[placeholder="Phone Number"]'
      ).value;

      // Prepare the data to send in the request
      const raw = JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
      });

      // Set up the request options
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      // Make the API request
      fetch(
        "https://associatedincometax.iamdeveloper.in/api/clients",
        requestOptions
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Failed to submit data.");
          }
        })
        .then((result) => {
          console.log(result); // Log the server response
          alert("Request submitted successfully!");
        })
        .catch((error) => {
          console.error(error);
          alert(
            "An error occurred while submitting your request. Please try again."
          );
        });
    });
});
