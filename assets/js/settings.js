document.addEventListener("DOMContentLoaded", function () {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(
    "https://associatedincometax.iamdeveloper.in/api/settings/",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      if (result && result.length > 0) {
        const settings = result[0]; // Assuming the first item contains the settings data

        // Update the logo
        const logoElement = document.querySelector(".logo a.navbar-brand img");
        if (logoElement && settings.logo) {
          logoElement.src = settings.logo;
        }

        // Update the address
        const addressElement = document.querySelector(
          ".footer-contact-info .address"
        );
        if (addressElement && settings.address) {
          addressElement.textContent = settings.address;
        }

        // Update the contact numbers
        const contactNumberElements = document.querySelectorAll(
          ".footer-contact-info .number a"
        );
        if (contactNumberElements.length > 0 && settings.contactNumber) {
          // Assuming the first number is the main contact
          contactNumberElements[0].textContent = settings.contactNumber;
          contactNumberElements[0].href = `tel:${settings.contactNumber}`;

          // If there is a secondary number, update it or leave it unchanged
          if (contactNumberElements.length > 1) {
            contactNumberElements[1].textContent = settings.contactNumber;
            contactNumberElements[1].href = `tel:${settings.contactNumber}`;
          }
        }

        // Update the email
        const emailElement = document.querySelector(
          ".footer-contact-info .email a"
        );
        if (emailElement && settings.email) {
          emailElement.textContent = settings.email;
          emailElement.href = `mailto:${settings.email}`;
        }

        // Dynamically add the script tag
        if (settings.script) {
          const scriptElement = document.createElement("script");
          scriptElement.type = "text/javascript";
          scriptElement.innerHTML = settings.script;
          document.body.appendChild(scriptElement);
        }
      }
    })
    .catch((error) => console.error("Error fetching settings:", error));
});
