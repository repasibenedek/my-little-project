function checkCookie() {
    if (localStorage.getItem("cookieAccepted") !== "true") {
        document.getElementById("cookie-alert").style.display = "block";
    }
}

function acceptCookie() {
    localStorage.setItem("cookieAccepted", "true");
    document.getElementById("cookie-alert").style.display = "none";
}