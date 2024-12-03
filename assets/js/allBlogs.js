document.addEventListener("DOMContentLoaded", () => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(
    "https://associatedincometax.iamdeveloper.in/api/blogs/",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      if (result.success && result.data.length > 0) {
        // Sort blogs by `createdAt` in descending order and take the latest 3
        const latestBlogs = result.data
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .slice(0, 3);

        const blogContainer = document.getElementById("blog-container-2");

        blogContainer.innerHTML = latestBlogs
          .map((blog) => {
            const content =
              blog.content.split(" ").slice(0, 50).join(" ") +
              (blog.content.split(" ").length > 0 ? "..." : "");
            return `
                   <div class="blog2-left-section">
           
            <img src=${blog.image} alt="Team Discussion"
                class="blog2-team-image">
        </div>

        <!-- Right Section -->
        <div class="blog2-right-section">
            <div class="blog2-about-container">
               
                <h1 class="blog2-title">${blog.title}</h1>
                <p class="blog2-description">
                ${content}
                </p>
                <a href="blog1.html?id=${blog._id}" class="details-link">Read More <i class="las la-arrow-right"></i></a>
               
            </div>
        </div>
                `;
          })
          .join("");
      } else {
        console.error("No blogs available or an error occurred");
      }
    })
    .catch((error) => console.error("Error fetching blogs:", error));
});
