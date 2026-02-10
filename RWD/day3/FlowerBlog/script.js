const toggle = document.getElementById("theme-toggle");
    const html = document.documentElement;

    toggle.addEventListener("click", () => {
      const current = html.getAttribute("data-bs-theme");
      const next = current === "light" ? "dark" : "light";

      html.setAttribute("data-bs-theme", next);
      toggle.classList.toggle("bi-moon-stars-fill");
      toggle.classList.toggle("bi-sun-fill");
    });