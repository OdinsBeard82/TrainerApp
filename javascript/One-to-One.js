
document.addEventListener('DOMContentLoaded', function () {
    setupButtonClick("trainerApp2");
    setupButtonClick("getStartedButton4");

});

function setupButtonClick(buttonId) {
    document.getElementById(buttonId).onclick = function () {
        navigateToPage(buttonId);
    };
}

function navigateToPage(buttonId) {
    const pageMap = {
        trainerApp2: '../index.html',
        getStartedButton4: '../module/getStarted.html'
    };

    const pageUrl = pageMap[buttonId];
    if (pageUrl) {
        window.location.href = pageUrl;
    } else {
        console.error(`Page URL not defined for button with ID: ${buttonId}`);
    }
}