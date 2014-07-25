function verifyPassword() {
    var password=prompt("Password: demo");
    if (password == "demo") {
        alert("Welcome to My Home Page!");
        window.location = "MyPackage/HomePage/HomePage.html";
    }
    else {
        window.location = "MyPackage/MyPassword/WrongPassword.html";
    }
	return false;
}