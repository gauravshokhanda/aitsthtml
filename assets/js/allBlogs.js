document.addEventListener("DOMContentLoaded", () => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const blogContainer = document.getElementById("blog-container-2");
  const paginationContainer = document.getElementById("pagination-container");
  let blogs = [];
  const blogsPerPage = 5;
  let currentPage = 1;

  const renderBlogs = (page) => {
    const startIndex = (page - 1) * blogsPerPage;
    const paginatedBlogs = blogs.slice(startIndex, startIndex + blogsPerPage);

    blogContainer.innerHTML = paginatedBlogs
      .map((blog) => {
        const content =
          blog.content.split(" ").slice(0, 50).join(" ") +
          (blog.content.split(" ").length > 50 ? "..." : "");
        const imageHTML = blog.image
          ? `<img src="${blog.image}" alt="Team Discussion" class="blog2-team-image">`
          : "";
        return `
          <div class="col-md-12">
          <div class="blog2-right-section">
          <div class="row align-items-center">
          <div class="col-md-6">
          <div class="blog2-left-section">
            ${imageHTML}
          </div>
          </div>
          <div class="col-md-6">
            <div class="blog2-about-container">
              <h2 class="blog2-title"> <a href="blog1.html?slug=${blog.slug}" >${blog.title} </a> </h2>
              <p class="blog2-description">
                ${content}
              </p>
              <a href="blog1.html?slug=${blog.slug}" class="details-link">Read More <i class="las la-arrow-right"></i></a>   
            </div>
          </div>
          </div>
          </div>
          </div>
        `;
      })
      .join("");
  };

  const renderPagination = () => {
    const totalPages = Math.ceil(blogs.length / blogsPerPage);
    let paginationHTML = `
      <button class="pagination-button first-button" ${
        currentPage === 1 ? "disabled" : ""
      } data-page="1">First</button>
    `;

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        i === currentPage ||
        i === currentPage - 1 ||
        i === currentPage + 1 ||
        i <= 3
      ) {
        paginationHTML += `<button class="pagination-button ${
          i === currentPage ? "active" : ""
        }" data-page="${i}">${i}</button>`;
      } else if (i === 4 && currentPage > 4) {
        paginationHTML += `<span class="dots">...</span>`;
      } else if (i === totalPages - 1 && currentPage < totalPages - 3) {
        paginationHTML += `<span class="dots">...</span>`;
      }
    }

    paginationHTML += `
      <button class="pagination-button last-button" ${
        currentPage === totalPages ? "disabled" : ""
      } data-page="${totalPages}">Last</button>
    `;

    paginationContainer.innerHTML = paginationHTML;

    document.querySelectorAll(".pagination-button").forEach((button) => {
      button.addEventListener("click", (e) => {
        currentPage = parseInt(e.target.getAttribute("data-page"), 10);
        renderBlogs(currentPage);
        renderPagination();
      });
    });
  };

  fetch(
    "https://associatedincometax.iamdeveloper.in/api/blogs/",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      if (result.success && result.data.length > 0) {
        blogs = result.data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        renderBlogs(currentPage);
        renderPagination();
      } else {
        console.error("No blogs available or an error occurred");
      }
    })
    .catch((error) => console.error("Error fetching blogs:", error));
});
