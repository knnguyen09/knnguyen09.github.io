function initiate()
{
    var returnButton = document.getElementById('Return');
    returnButton.addEventListener('click', returnToIndex);
}

function returnToIndex()
{
    window.location = "../../index.html";
}

addEventListener("load", initiate);