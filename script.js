// JavaScript code goes here
// You can add interactivity and dynamic functionality to your website using JavaScript

// Example: Changing the text color of the CTA button on hover
const ctaButton = document.querySelector('.cta-button');

ctaButton.addEventListener('mouseover', function() {
  this.style.color = '#ff0000'; // Change the text color to red
});

ctaButton.addEventListener('mouseout', function() {
  this.style.color = '#fff'; // Change the text color back to white
});

// Example: Displaying an alert when the contact form is submitted
const contactForm = document.querySelector('#contact-form');

contactForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get the values from the form fields
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const message = document.querySelector('#message').value;

  // Display an alert with the form data
  alert(`Thank you, ${name}! Your message has been sent.`);
});