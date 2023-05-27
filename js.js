var initUsername = "Reza"
var initPassword = "Nikbakht"
var inputUsername
var inputPassword

document.getElementById("loginForm").addEventListener("submit", function (event) {
    inputPassword = document.getElementById("password").value
    inputUsername = document.getElementById("Username").value
    if (inputUsername == initUsername && inputPassword == initPassword) {
        const url = "./about.html"
        location.href = url;
    } else {
        document.getElementById("wrong").style.display="block"
    }
    event.preventDefault()
});

function clearwrong() {
    document.getElementById("wrong").style.display="none"

} 