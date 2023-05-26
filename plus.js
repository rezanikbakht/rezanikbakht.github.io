let number
let secnumber

document.getElementById("plusForm").addEventListener("submit", function (event) {
    secnumber = Number(document.getElementById("secnumber").value);
    number = Number(document.getElementById("number").value);
    document.getElementById("total").value=number + secnumber
    event.preventDefault()
})