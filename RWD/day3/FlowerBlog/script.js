const toggleBtn = document.getElementById("theme-icon");
const themeElement = document.body;

  toggleBtn.addEventListener("click", () => {
    const currentTheme = themeElement.getAttribute("data-bs-theme");
    
    const newTheme = currentTheme === "light" ? "dark" : "light";
    themeElement.setAttribute("data-bs-theme", newTheme);

    if (newTheme === "dark") {
      toggleBtn.classList.remove("bi-moon-stars-fill");
      toggleBtn.classList.add("bi-sun-fill");
      toggleBtn.classList.replace('text-light', 'text-warning');
    } else {
      toggleBtn.classList.remove("bi-sun-fill");
      toggleBtn.classList.add("bi-moon-stars-fill");
      toggleBtn.classList.replace('text-warning', 'text-light');
    }
  });