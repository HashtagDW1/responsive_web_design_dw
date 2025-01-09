


document.addEventListener("DOMContentLoaded", () => {
    const burgerMenu = document.getElementById("burger-menu");
    const navMenu = document.getElementById("nav-menu");

    burgerMenu.addEventListener("click", () => {
        burgerMenu.classList.toggle("active");
        navMenu.classList.toggle("open");
    });
});