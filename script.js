let index = 0;

function showSlide(newIndex) {
  const slides = document.querySelector('.slides');
  const totalSlides = slides.children.length;

  if (newIndex >= totalSlides) {
    index = 0; // Loop back to the first slide
  } else if (newIndex < 0) {
    index = totalSlides - 1; // Go to the last slide
  } else {
    index = newIndex;
  }

  slides.style.transform = `translateX(${-index * 100}%)`;
}

function nextSlide() {
  showSlide(index + 1);
}

function prevSlide() {
  showSlide(index - 1);
}

// Automatic slide change every 5 seconds
setInterval(nextSlide, 5000);



// Toggle Navbar for Small Screens with Smooth Transition
function toggleNavbar() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}
