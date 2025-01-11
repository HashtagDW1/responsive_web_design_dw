


document.addEventListener("DOMContentLoaded", () => {
    const burgerMenu = document.getElementById("burger-menu");
    const navMenu = document.getElementById("nav-menu");

    burgerMenu.addEventListener("click", () => {
        burgerMenu.classList.toggle("active");
        navMenu.classList.toggle("open");
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var parent = document.querySelector('.splitview'),
        topPanel = parent.querySelector('.top'),
        handle = parent.querySelector('.handle'),
        skewHack = 0,
        delta = 0;

    // If the parent has .skewed class, set the skewHack var.
    if (parent.className.indexOf('skewed') != -1) {
        skewHack = 1000;
    }

    parent.addEventListener('mousemove', function(event) {
        // Get the delta between the mouse position and center point.
        delta = (event.clientX - window.innerWidth / 2) * 0.5;

        // Move the handle.
        handle.style.left = event.clientX + delta + 'px';

        // Adjust the top panel width.
        topPanel.style.width = event.clientX + skewHack + delta + 'px';
    });
});

const scrollableSection = document.getElementById('scrollable-section');
const scrollRightBtn = document.getElementById('scroll-right');

scrollRightBtn.addEventListener('click', () => {
  const scrollAmount = scrollableSection.offsetWidth; // Scroll um eine Container-Breite
  scrollableSection.scrollBy({
    left: scrollAmount,
    behavior: 'smooth'
  });
});