function initiate()
{
    var EnterSiteButton = document.getElementById('EnterSiteImage');
    EnterSiteButton.addEventListener('click', verifyPassword);
}

function verifyPassword() {
    var password=prompt("Please Enter Password:");
    if (password == "demo") {
        alert("Welcome to My Home Page!");
        window.location = "http://khangnguyen.info/MyPackage/HomePage/HomePage.html";
    }
    else {
        window.location = "http://khangnguyen.info/MyPackage/MyPassword/WrongPassword.html";
    }
	return false;
}

addEventListener("load", initiate);