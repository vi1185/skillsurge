document.addEventListener('DOMContentLoaded', function() {
    // Basic interaction, e.g., alert when clicking on a course
    const courses = document.querySelectorAll('h2');
    courses.forEach(course => {
        course.addEventListener('click', function() {
            alert('Course Clicked!');
        });
    });
});
function callNow() {
    // Add your code here to handle the click event
    // For example, you can initiate a phone cal
    window.Location.href = "about.html"
  }
