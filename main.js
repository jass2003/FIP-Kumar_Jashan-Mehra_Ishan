document.getElementById("scrollToTop").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default anchor behavior

    // Scroll to the top of the page smoothly
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });





});

document.addEventListener("DOMContentLoaded", function() {
    const thumbnails = document.querySelectorAll("[href^='#lightbox']");
    thumbnails.forEach(function(thumbnail) {
      thumbnail.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default anchor behavior
        const lightboxId = thumbnail.getAttribute("href").substring(1); // Get the corresponding lightbox ID
        const lightbox = document.getElementById(lightboxId);
        if (lightbox) {
          lightbox.style.display = "block"; // Display the lightbox
        }
      });
    });

    // Function to close the lightbox when clicking outside the image
    const lightboxes = document.querySelectorAll(".lightbox");
    lightboxes.forEach(function(lightbox) {
      lightbox.addEventListener("click", function(event) {
        if (event.target === this) {
          this.style.display = "none"; // Hide the lightbox when clicking outside the image
        }
      });
    });
  });







  document.getElementById("hamburger-img").addEventListener("click", function() {
    this.style.transform = "rotate(10deg)";
});
