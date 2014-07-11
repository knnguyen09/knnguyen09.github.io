function initiate()
{
    var EnterSiteButton = document.getElementById('EnterSiteImage');
    EnterSiteButton.addEventListener('click', verifyPassword);
}

function verifyPassword() {
    var password=prompt("Enter password:");
    if (password == "demo") {
        alert("Welcome to my site!");
        window.location = "HomePage.html";
    }
    else {
        window.location = "WrongPassword.html";
    }
}

function allowDrop(ev)
{
    ev.preventDefault();
}

function drag(ev)
{
    ev.dataTransfer.setData("Text", ev.target.id);
    var dragIcon = document.createElement('img');
    dragIcon.src = "images/Pointer.jpg";
    dragIcon.width = 100;
    ev.dataTransfer.setDragImage(dragIcon, -10, -10);
}

function drop(ev)
{
    ev.preventDefault();
    var data=ev.dataTransfer.getData("Text");
    ev.target.appendChild(document.getElementById(data));
    verifyPassword();
}

addEventListener("load", initiate);