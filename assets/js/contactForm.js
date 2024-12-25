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
          form.reset();
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

// document.addEventListener("DOMContentLoaded", function () {
//   document
//     .getElementById("contactForm")
//     .addEventListener("submit", async function (event) {
//       event.preventDefault(); // Prevent form submission

//       const form = document.getElementById("contactForm");

//       // Get the values from the form inputs
//       const name = document.getElementById("name").value;
//       const email = document.getElementById("email").value;
//       const phone = document.getElementById("phone").value;
//       const source = document.getElementById("source").value;
//       const message = document.getElementById("message").value;
//       const newsletter = document.getElementById("newsletter").checked;

//       if (!name || !email || !phone || !source || !message) {
//         alert("All fields are required. Please fill in all the fields.");
//         return;
//       }

//       if (!validatePhone(phone)) {
//         alert("Please enter a valid phone number.");
//         return;
//       }

//       // Prepare the data to send
//       const payload = JSON.stringify({
//         email: email,
//         message: message,
//         name: name,
//         number: phone,
//         resolved: false,
//         find_us: source,
//         newsletter: newsletter ? "true" : "false",
//       });

//       // Set up the request options
//       const requestOptions = {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: payload,
//       };

//       try {
//         // Send to the first API
//         const response1 = await fetch(
//           "https://associatedincometax.iamdeveloper.in/api/contacts",
//           requestOptions
//         );

//         if (!response1.ok) {
//           throw new Error("Failed to submit to the first API");
//         }

//         const result1 = await response1.json();
//         console.log("First API Response:", result1);

//         // Send to the second API
//         const response2 = await fetch(
//           "https://associatedincometax.iamdeveloper.in/api/add-lead",
//           requestOptions
//         );

//         if (!response2.ok) {
//           throw new Error("Failed to submit to the second API");
//         }

//         const result2 = await response2.json();
//         console.log("Second API Response:", result2);

//         alert("Form submitted successfully to both APIs!");
//         form.reset(); // Reset the form
//       } catch (error) {
//         console.error(error);
//         alert("An error occurred while submitting the form. Please try again.");
//       }
//     });

//   function validatePhone(phone) {
//     const phoneRegex = /^[0-9()\- ]+$/;
//     return phoneRegex.test(phone);
//   }
// });
