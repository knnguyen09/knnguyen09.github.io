function verifyPassword() {
    var password=prompt("Please enter 'demo' for Password:\n(Hint: Password is case sensitive)");
    if (password == "demo") {
        alert("Welcome to My Home Page!");
        window.location = "MyPackage/HomePage/HomePage.html";
    }
    else {
        window.location = "MyPackage/MyPassword/WrongPassword.html";
    }
	return false;
}