// Select the image element
const image = document.getElementById("zoom-image");

// Add a scroll event listener
window.addEventListener("scroll", () => {
  // Calculate the scroll percentage
  const scrollTop = window.scrollY; // Current scroll position
  const docHeight = document.documentElement.scrollHeight - window.innerHeight; // Total scrollable height
  const scrollPercent = scrollTop / docHeight;

  // Scale the image based on scroll percentage
  const scale = 1 + scrollPercent * 2; // Adjust the multiplier (2) for more/less zoom
  image.style.transform = `scale(${scale})`;
});