function initiate()
{
    var EnterSiteButton = document.getElementById('EnterSiteImage');
    EnterSiteButton.addEventListener('click', verifyPassword);
}

function verifyPassword() {
    var password=prompt("Please Enter Password:");
	var MyLocation = location.pathname;
    if (password == "demo") {
        alert("Welcome to My Home Page!");
        window.location = "MyLocation/MyPackage/HomePage/HomePage.html";
    }
    else {
        window.location = "MyLocation/MyPackage/MyPasswordProtect/WrongPassword.html";
    }
}

addEventListener("load", initiate);