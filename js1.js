let menuIsHidden = true
const menu = document.getElementById("menu")
function toggleMenu() {
    if (menuIsHidden) {
        menu.style.display = "block"
    } else {
        menu.style.display = "none"
    }
    menuIsHidden = !menuIsHidden
}