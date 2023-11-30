function setupButtonClick(buttonId) {
    document.getElementById(buttonId).onclick = newPage;
}

function newPage() {
    window.location.href = './module/getStarted.html';
}

setupButtonClick("getStartedButton");
setupButtonClick("getStartedButton2");


function trainerAppButton(buttonId) {
    document.getElementById(buttonId).onclick = homePage;
}

function homePage() {
    window.location.href = './index.html';
}

trainerAppButton("trainerApp");
trainerAppButton("trainerApp2");




