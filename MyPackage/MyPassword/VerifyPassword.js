function verifyPassword() {
    var password=prompt("Password: demo");
    if (password == "demo") {
        alert("Welcome to My Home Page!");
		var myWindow = window.open("MyPackage/HomePage/HomePage.html", "", "width=screen.availwidth, height=screen.availheight");
    }
    else {
        window.location = "MyPackage/MyPassword/WrongPassword.html";
    }
	return false;
}