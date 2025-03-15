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
