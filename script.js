// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Get all read status elements
    const readStatusElements = document.querySelectorAll('.mainContentReadStatus p');
    
    readStatusElements.forEach(function(element) {
        element.addEventListener('click', function() {
            // Toggle the 'read-toggle' class
            this.classList.toggle('read-toggle');
        });
    });
});