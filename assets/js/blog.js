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

        const blogContainer = document.getElementById("blog-container");
        blogContainer.innerHTML = latestBlogs
          .map((blog) => {
            return `
                <div class="about-content-wrap pr-60">
                  <div class="section-title mb-1">
                    <div class="blog-meta">
                      <span>${new Date(blog.createdAt).toDateString()}</span>
                    </div>
                    <h2><a href="#">${blog.title}</a></h2>
                  </div>
                  <p class="mt-0">${blog.content}</p>
                  <a href="#" class="details-link">Read More <i class="las la-arrow-right"></i></a>
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
