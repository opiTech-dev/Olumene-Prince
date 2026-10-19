
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const menuIcon = menuToggle?.querySelector("i");

    // Stop if the required HTML elements are missing
    if (!menuToggle || !navLinks || !menuIcon) {
        console.error("Navbar elements were not found.");
        return;
    }

    // Open and close the mobile menu
    menuToggle.addEventListener("click", function () {
        const isOpen = navLinks.classList.toggle("active");

        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );

        menuIcon.classList.toggle("fa-bars", !isOpen);
        menuIcon.classList.toggle("fa-xmark", isOpen);
    });

    // Close the menu after clicking a navigation link
    document.querySelectorAll(".nav-link").forEach(function (navItem) {
        navItem.addEventListener("click", function () {
            navLinks.classList.remove("active");
            menuIcon.classList.replace("fa-xmark", "fa-bars");

            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation menu");
        });
    });

    // Close the mobile menu when returning to desktop width
    window.addEventListener("resize", function () {
        if (window.innerWidth > 767) {
            navLinks.classList.remove("active");
            menuIcon.classList.replace("fa-xmark", "fa-bars");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation menu");
        }
    });
});