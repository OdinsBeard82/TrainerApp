document.addEventListener('DOMContentLoaded', function () {
    setupButtonClick("getStartedButton");
    setupButtonClick("getStartedButton2");
    trainerAppButton("trainerApp");
    OneToOneButton("oneToOneLink"); 
});

function setupButtonClick(buttonId) {
    document.getElementById(buttonId).onclick = newPage;
}

function newPage() {
    window.location.href = './module/getStarted.html';
}

function trainerAppButton(buttonId) {
    document.getElementById(buttonId).onclick = homePage;
}

function homePage() {
    window.location.href = './index.html';
}

function OneToOneButton(buttonId) {
    document.getElementById(buttonId).onclick = OneToOne;
}

function OneToOne() {
    window.location.href = './module/One-to-One.html';
}







