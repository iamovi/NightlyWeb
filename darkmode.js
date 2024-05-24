document.addEventListener('DOMContentLoaded', function () {
  const darkModeToggle = document.getElementById('darkModeToggle');
  const body = document.body;

  // Check user preference for dark mode from local storage
  const prefersDarkMode = localStorage.getItem('darkMode') === 'enabled';

  // Set initial dark mode state
  if (prefersDarkMode) {
    darkModeToggle.checked = true;
    enableDarkMode();
  }

  // Toggle dark mode
  darkModeToggle.addEventListener('change', function () {
    if (darkModeToggle.checked) {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  });

  // Enable dark mode
  function enableDarkMode() {
    body.classList.add('dark-mode');
    // Save user preference to local storage
    localStorage.setItem('darkMode', 'enabled');
  }

  // Disable dark mode
  function disableDarkMode() {
    body.classList.remove('dark-mode');
    // Remove user preference from local storage
    localStorage.setItem('darkMode', 'disabled');
  }
});

// code written by @tahsinzidane

// updating year on footer automatically
const currentYear = new Date().getFullYear();
console.log(currentYear);

const year = document.getElementById('year');
year.innerHTML = currentYear;