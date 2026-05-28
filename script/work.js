// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const workTitle = document.querySelector('.work-title');
    const workContent = document.querySelector('.work-content');
    const workDescription = document.querySelector('.work-description');
    const imageContainers = document.querySelectorAll('.image-container');

    // Add animation classes to trigger animations
    workTitle.classList.add('animate');
    workContent.classList.add('animate');
    workDescription.classList.add('animate')
    imageContainers.forEach((imgContainer, index) => {
        imgContainer.classList.add('animate');
        // Optional: add specific delays if needed
    });
});

// Select elements
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');
const overlay = document.getElementById('overlay'); // Select the overlay
const body = document.body; // Select the body element

// Function to prevent scrolling
function preventScroll(event) {
    event.preventDefault();
    event.stopPropagation();
}

// Toggle menu
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('active');
    navLinks.classList.toggle('nav-open');

    // Toggle overlay visibility
    overlay.classList.toggle('active'); 

    // If the menu is open, add the event listener to prevent scrolling
    if (navLinks.classList.contains('nav-open')) {
        window.addEventListener('wheel', preventScroll, { passive: false });
        window.addEventListener('touchmove', preventScroll, { passive: false });
    } else {
        // Remove the event listener when the menu is closed
        window.removeEventListener('wheel', preventScroll);
        window.removeEventListener('touchmove', preventScroll);
    }
});

// Close menu on outside click
document.addEventListener('click', (event) => {
    if (!menuIcon.contains(event.target) && !navLinks.contains(event.target)) {
        menuIcon.classList.remove('active');
        navLinks.classList.remove('nav-open');
        overlay.classList.remove('active');

        // Remove the event listener when the menu is closed
        window.removeEventListener('wheel', preventScroll);
        window.removeEventListener('touchmove', preventScroll);
    }
});

// Scroll event listener for Footer
window.addEventListener('scroll', function() {
    const contactsSection = document.querySelector('#contacts');
    const contactsPosition = contactsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.8; // Adjust this value as needed

    if (contactsPosition < screenPosition) {
        contactsSection.classList.add('contact-visible'); // Add the class when scrolled into view
    }
});


