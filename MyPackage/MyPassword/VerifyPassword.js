function verifyPassword() {
    var password=prompt("Password: demo");
    if (password == "demo") {
        alert("Welcome to My Home Page!");
		var myWindow = window.open("MyPackage/HomePage/HomePage.html", "_blank", "toolbar=yes, scrollbars=yes, resizable=yes, top=0, left=0, width=100px, height=100px");
		myWindow.moveTo(0, 0);
		myWindow.resizeTo(screen.width, screen.height);
    }
    else {
        window.location = "MyPackage/MyPassword/WrongPassword.html";
    }
	return false;
}