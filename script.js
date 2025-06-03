
document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.querySelector(".theme-toggle");
  const toggleIcon = themeToggle.querySelector("i");

  (function () {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const isDarkTheme = savedTheme === "dark" || (!savedTheme && systemPrefersDark);
    document.body.classList.toggle("dark-theme", isDarkTheme);
    toggleIcon.className = isDarkTheme ? "fa-solid fa-sun" : "fa-solid fa-moon";
  })();

  const toggleTheme = () => {
    const isDarkTheme = document.body.classList.toggle("dark-theme");
    localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
    toggleIcon.className = isDarkTheme ? "fa-solid fa-sun" : "fa-solid fa-moon";
  };

  themeToggle.addEventListener("click", toggleTheme);
});

