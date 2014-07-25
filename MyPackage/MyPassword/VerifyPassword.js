function verifyPassword() {
    var password=prompt("Password: demo");
    if (password == "demo") {
        alert("Welcome to My Home Page!");
		var myWindow = window.open("MyPackage/HomePage/HomePage.html", "_blank", "toolbar=yes, scrollbars=yes, resizable=yes, top=0, left=0, width=100px, height=100px");
		self.moveTo(0, 0);
		self.resizeTo(screen.availwidth, screen.availheight);
    }
    else {
        window.location = "MyPackage/MyPassword/WrongPassword.html";
    }
	return false;
}