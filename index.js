const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const navLinkItems = document.querySelectorAll('.nav-links li a');

// Toggle the active class to open/close the menu
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close the menu when a link is clicked
navLinkItems.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});
