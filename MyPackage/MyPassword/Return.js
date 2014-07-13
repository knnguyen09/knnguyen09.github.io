function initiate()
{
    var returnButton = document.getElementById('Return');
    returnButton.addEventListener('click', returnToIndex);
}

function returnToIndex()
{
    window.location = "khangnguyen.info";
}

addEventListener("load", initiate);