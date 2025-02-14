document.getElementById("menu-toggle").addEventListener("click", function() {
    let navbar = document.getElementById("navbar");
    if (navbar.style.display === "none" || navbar.style.display === "") {
        navbar.style.display = "flex";
    } else {
        navbar.style.display = "none";
    }
});
