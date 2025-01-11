


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

let isDown = false;
let startX;
let scrollLeft;

scrollableSection.addEventListener('mousedown', (e) => {
  isDown = true;
  scrollableSection.classList.add('active');
  startX = e.pageX - scrollableSection.offsetLeft;
  scrollLeft = scrollableSection.scrollLeft;
});

scrollableSection.addEventListener('mouseleave', () => {
  isDown = false;
  scrollableSection.classList.remove('active');
});

scrollableSection.addEventListener('mouseup', () => {
  isDown = false;
  scrollableSection.classList.remove('active');
});

scrollableSection.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - scrollableSection.offsetLeft;
  const walk = (x - startX) * 1.5; // Scroll-Geschwindigkeit
  scrollableSection.scrollLeft = scrollLeft - walk;
});

// Für Touch-Events auf Mobilgeräten
scrollableSection.addEventListener('touchstart', (e) => {
  const touch = e.touches[0];
  isDown = true;
  startX = touch.pageX - scrollableSection.offsetLeft;
  scrollLeft = scrollableSection.scrollLeft;
});

scrollableSection.addEventListener('touchend', () => {
  isDown = false;
});

scrollableSection.addEventListener('touchmove', (e) => {
  if (!isDown) return;
  const touch = e.touches[0];
  const x = touch.pageX - scrollableSection.offsetLeft;
  const walk = (x - startX) * 1.5;
  scrollableSection.scrollLeft = scrollLeft - walk;
});