document.addEventListener("DOMContentLoaded", function () {
    let menuIcon = document.getElementById("hambarMenu");
    let menuContent = document.getElementById("barContent");

    menuIcon.addEventListener("click", function () {
        if (menuContent.classList.contains("show")) {
            menuContent.classList.remove("show");
            menuIcon.classList.remove("fa-times");
            menuIcon.classList.add("fa-bars");  
        } else {
            menuContent.classList.add("show");
            menuIcon.classList.remove("fa-bars");
            menuIcon.classList.add("fa-times"); 
        }
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
