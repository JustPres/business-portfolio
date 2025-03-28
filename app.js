// app.js

document.addEventListener("DOMContentLoaded", function () {
    // Navbar Scroll Effect
    const navbar = document.getElementById("navbar");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navbar.classList.add("nav-scrolled");
      } else {
        navbar.classList.remove("nav-scrolled");
      }
    });
  
    // Portfolio Filtering & Modal
    const filterButtons = document.querySelectorAll(".filter-btn");
    const portfolioItems = document.querySelectorAll(".portfolio-item");
    const modal = document.getElementById("portfolioModal");
    const closeModal = document.getElementById("closeModal");
    const modalContent = document.getElementById("modalContent");
  
    filterButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const filter = btn.getAttribute("data-filter");
        portfolioItems.forEach(item => {
          item.style.display = (filter === "all" || item.getAttribute("data-category") === filter) ? "block" : "none";
        });
      });
    });
  
    portfolioItems.forEach(item => {
      item.addEventListener("click", () => {
        const title = item.querySelector("h3").innerText;
        const description = item.querySelector("p").innerText;
        const imgSrc = item.querySelector("img").src;
        modalContent.innerHTML = `
          <h3 class="text-3xl font-bold mb-4">${title}</h3>
          <img src="${imgSrc}" alt="${title}" class="w-full rounded mb-4" />
          <p class="mb-4">${description} - Detailed project description goes here.</p>
          <a href="#" class="neumorphic-btn py-2 px-4 rounded">Learn More</a>
        `;
        modal.classList.remove("hidden");
      });
    });
  
    closeModal.addEventListener("click", () => {
      modal.classList.add("hidden");
    });
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.add("hidden");
    });
  
    // Dynamic Blog Posts Loading
    const blogPosts = [
      {
        title: "Innovative Design Trends",
        excerpt: "Discover the latest trends in modern freelance web design that are reshaping digital experiences.",
        date: "March 15, 2025"
      },
      {
        title: "Maximizing User Engagement",
        excerpt: "Learn how interactive UI components can elevate your freelance projects and captivate audiences.",
        date: "February 10, 2025"
      },
      {
        title: "The Power of Minimalism",
        excerpt: "Explore why minimalistic design is at the forefront of modern web aesthetics.",
        date: "January 5, 2025"
      }
    ];
  
    const blogContainer = document.getElementById("blogContainer");
    blogPosts.forEach(post => {
      const postEl = document.createElement("div");
      postEl.classList.add("neumorphic-card", "p-6", "rounded-xl");
      postEl.innerHTML = `
        <h3 class="text-2xl font-bold mb-2">${post.title}</h3>
        <p class="mb-2">${post.excerpt}</p>
        <span class="text-sm text-gray-500">${post.date}</span>
      `;
      blogContainer.appendChild(postEl);
    });
  
    // Simulated Contact Form Submission (AJAX)
    const contactForm = document.getElementById("contactForm");
    const contactResponse = document.getElementById("contactResponse");
  
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      setTimeout(() => {
        contactResponse.innerHTML = `<p class="text-gold font-bold">Thank you for your message! I will get back to you shortly.</p>`;
        contactForm.reset();
      }, 1000);
    });
  });
  