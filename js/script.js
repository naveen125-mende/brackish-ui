document.addEventListener("DOMContentLoaded", function () {
    let menuIcon = document.getElementById("hambarMenu");
    let menuContent = document.getElementById("barContent");
    let navItems = document.querySelectorAll(".hambar-container .nav-item a");

    menuIcon.addEventListener("click", function () {
        menuContent.classList.toggle("show");
        menuIcon.classList.toggle("fa-bars");
        menuIcon.classList.toggle("fa-times");
    });

    // Close menu when clicking any nav item
    navItems.forEach(item => {
        item.addEventListener("click", function () {
            menuContent.classList.remove("show");
            menuIcon.classList.remove("fa-times");
            menuIcon.classList.add("fa-bars");
        });
    });
});




const carouselContainer = document.querySelector(".carousel-container");
let index = 0;

function slideReviews() {
    index++;
    if (index > 2) { 
        index = 0; 
    }
    carouselContainer.style.transform = `translateX(-${index * 100}%)`;
}

// Auto-slide every 3 seconds
setInterval(slideReviews, 3000);
