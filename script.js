// Smooth scroll functionality
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact form submission handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple form validation
    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent.`);
    } else {
        alert('Please fill out all fields.');
    }
});

// Button interaction on home section
document.getElementById('learnMore').addEventListener('click', function() {
    document.querySelector('#about').scrollIntoView({
        behavior: 'smooth'
    });
});

