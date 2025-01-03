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
            const content =
              blog.content.split(" ").slice(0, 50).join(" ") +
              (blog.content.split(" ").length > 0 ? "..." : "");
            return `
                <div class="about-content-wrap pr-60">
                  <div class="section-title mb-1">
                    <div class="blog-meta">
                      <span>${new Date(blog.createdAt).toDateString()}</span>
                    </div>
                    <h2><a  href="blog1.html?slug=${blog.slug}" >${
              blog.title
            }</a></h2> 
                  </div>
                  <p class="mt-0">${content}</p>
                  <a href="blog1.html?slug=${
                    blog.slug
                  }" class="details-link">Read More <i class="las la-arrow-right"></i></a>
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

document.addEventListener("DOMContentLoaded", () => {
  // Get the blog ID from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const blogSlug = urlParams.get("slug");

  if (!blogSlug) {
    console.error("No blog Slug provided in URL");
    return;
  }

  // Fetch blog details
  fetch(
    `https://associatedincometax.iamdeveloper.in/api/blogs/slug/${blogSlug}`,
    {
      method: "GET",
      redirect: "follow",
    }
  )
    .then((response) => response.json())
    .then((result) => {
      if (result.success && result.data) {
        const blog = result.data;
        // Populate the blog details page
        if (blog.image) {
          document.querySelector(".blog-feature-img img").src = blog.image;
        }
        document.querySelector(".blog-content-wrap p").innerHTML = blog.content;
        document.querySelector(".tax-title h2").innerHTML = blog.title;
        document.querySelector(".blog-quote-text p").textContent =
          blog.quote || "";

        document.querySelector(".blog-quote-text h6").textContent = `${
          blog.author || "Associated Income Tax Services"
        }`;
      } else {
        console.error("Failed to fetch blog details");
      }
    })
    .catch((error) => console.error("Error fetching blog details:", error));
});
