var navBar = document.getElementById("navbar");
var menueButton = document.getElementById("menue");
var closeButton = document.getElementById("close");

function toggleFunction() {
    navBar.classList.toggle("hide-nav");
}

menueButton.addEventListener("click", () => {
    toggleFunction()
});

closeButton.addEventListener("click", () => {
    toggleFunction()
});