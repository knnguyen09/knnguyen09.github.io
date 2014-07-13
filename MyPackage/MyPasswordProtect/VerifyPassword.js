function initiate()
{
    var EnterSiteButton = document.getElementById('EnterSiteImage');
    EnterSiteButton.addEventListener('click', verifyPassword);
}

function verifyPassword() {
    var password=prompt("Please Enter Password:");
    if (password == "demo") {
        alert("Welcome to My Home Page!");
        window.location = "location.host/MyPackage/HomePage/HomePage.html";
    }
    else {
        window.location = "location.host/MyPackage/MyPasswordProtect/WrongPassword.html";
    }
}

addEventListener("load", initiate);