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







// login ------------->
document.addEventListener('DOMContentLoaded', function() {
  const openModalButtons = document.querySelectorAll('[data-modal-target]');
  const closeModalButtons = document.querySelectorAll('[data-close-button]');
  const overlay = document.getElementById('overlay');

  openModalButtons.forEach(button => {
      button.addEventListener('click', () => {
          const modal = document.querySelector(button.dataset.modalTarget);
          openModal(modal);
      });
  });

  overlay.addEventListener('click', () => {
      const modals = document.querySelectorAll('.log-in.active');
      modals.forEach(modal => {
          closeModal(modal);
      });
  });

  closeModalButtons.forEach(button => {
      button.addEventListener('click', () => {
          const modal = button.closest('.modal');
          closeModal(modal);
      });
  });

  function openModal(modal) {
      if (modal == null) return;
      modal.classList.add('active');
      overlay.classList.add('active');
  }

  function closeModal(modal) {
      if (modal == null) return;
      modal.classList.remove('active');
      overlay.classList.remove('active');
  }
});



// buttons------------------>

var buttons = document.getElementsByClassName("shop-m");
  for (var i = 0; i < buttons.length; i++) { 
    buttons[i].onclick = function() {
      location.href = "shopping.html";
    };
  }


  // product card lightbox

//   function openLightbox() {
//     var lightbox = document.getElementById('lightbox');
//     var lightboxImg = document.getElementById('lightbox-img');
//     var initialImgSrc = document.getElementById('initial-img').src;
//     var newImgSrc = "images/passion-productcard-desk.png"; // Change this to the desired image source
//     lightbox.style.display = 'flex';
//     lightboxImg.src = newImgSrc;
// }

// function closeLightbox() {
//     document.getElementById('lightbox').style.display = 'none';
// }




function openLightbox() {
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightbox-img');
  var newImgSrc = "images/passion-productcard-desk.png"; // Change this to the desired image source
  lightbox.style.display = 'flex';
  lightboxImg.src = newImgSrc;
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}
