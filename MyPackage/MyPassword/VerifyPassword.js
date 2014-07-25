function verifyPassword() {
    var password=prompt("Password: demo");
    if (password == "demo") {
        alert("Welcome to My Home Page2!");
		var myWindow = window.open("MyPackage/HomePage/HomePage.html", "_blank", "toolbar=yes, scrollbars=yes, resizable=yes, top=0, left=0, width=screen.availwidth, height=screen.availwidth");
		myWindow.moveTo(0, 0);
		myWindow.resizeTo(screen.availwidth, screen.availheight);
    }
    else {
        window.location = "MyPackage/MyPassword/WrongPassword.html";
    }
	return false;
}