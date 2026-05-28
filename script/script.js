window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    const heroSection = document.querySelector('.hero'); // Select the hero section
    const menuIcon = document.getElementById('menu-icon'); // Select the menu icon

    setTimeout(() => {
        preloader.style.opacity = '0'; // Fade out the preloader
        setTimeout(() => {
            preloader.style.display = 'none'; // Hide preloader after fade out
            heroSection.classList.add('hero-loaded'); // Add class for big text animation
            heroSection.classList.add('hero-visible'); // Add class for fade-in effect
            
            // Show the toggle menu icon
            menuIcon.classList.add('visible'); // Add the class for sliding effect
        }, 1000); // Keep preloader visible for 1 second after fading out
    }, 500); // Initial delay before fade out starts
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





// Scroll event listener for About section
window.addEventListener('scroll', function() {
    const aboutSection = document.querySelector('#about');
    const aboutPosition = aboutSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.8; // Adjust this value as needed

    if (aboutPosition < screenPosition) {
        aboutSection.classList.add('about-visible'); // Add the class when scrolled into view
    }
});

// PH timezone
function updateTime() {
    const timeElement = document.getElementById('time');
    
    // Get the current time in Philippine Time (PHT)
    const options = {
      timeZone: 'Asia/Manila', // Specify the Philippine timezone
      hour: '2-digit',
      minute: '2-digit',
      hour12: true, // Use 12-hour format with AM/PM
    };
    
    // Format the time using toLocaleString with the specified timezone
    const localTime = new Date().toLocaleString('en-US', options);
    
    // Update the time display
    timeElement.textContent = localTime;
}

// Update the time every minute (since we only need the hour and minute)
setInterval(updateTime, 60000); // Update every 60 seconds
updateTime(); // Initial call to display time immediately





// Select all project links in the Work section
const projectLinks = document.querySelectorAll('.work-section .card a');

projectLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Add the fade-blur class to the body
        document.body.classList.add('fade-blur');

        // Use setTimeout to navigate after the fade and blur transition
        setTimeout(() => {
            const href = this.getAttribute('href');
            window.location.href = href;
        }, 500); // Match this time with the CSS transition duration
    });
});





// Scroll event listener for Work section
window.addEventListener('scroll', function() {
    const workSection = document.querySelector('#work');
    const workPosition = workSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.8; // Adjust this value as needed

    if (workPosition < screenPosition) {
        workSection.classList.add('work-visible'); // Add the class when scrolled into view
    }
});





// Scroll event listener for Services section
window.addEventListener('scroll', function() {
    const servicesSection = document.querySelector('#services');
    const servicesPosition = servicesSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.8; // Adjust this value as needed

    if (servicesPosition < screenPosition) {
        servicesSection.classList.add('service-visible'); // Add the class when scrolled into view
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





window.addEventListener('pageshow', function(event) {
    if (event.persisted) {
        // Reload the page to reset hidden elements if loaded from cache
        window.location.reload();
    } else {
        // Manually trigger scroll event listener when navigating back
        triggerScrollBasedVisibility();
    }
});

// Function to manually trigger the scroll logic
function triggerScrollBasedVisibility() {
    const sections = ['about', 'work', 'services', 'contacts'];
    
    sections.forEach(sectionId => {
        const section = document.querySelector(`#${sectionId}`);
        const position = section.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.8;

        if (position < screenPosition) {
            section.classList.add(`${sectionId}-visible`); // Add visibility class
        }
    });
}