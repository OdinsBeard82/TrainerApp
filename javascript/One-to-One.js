
document.addEventListener('DOMContentLoaded', function () {
    setupButtonClick("trainerApp2");
    setupButtonClick("getStartedButton3");
    setupButtonClick("getStartedButton4");
    setupButtonClick("getStartedButton5");
    setupButtonClick("getStartedButton6");
    setupButtonClick("getStartedButton7");
});

function setupButtonClick(buttonId) {
    document.getElementById(buttonId).onclick = function () {
        navigateToPage(buttonId);
    };
}

function navigateToPage(buttonId) {
    const pageMap = {
        trainerApp2: '../index.html',
        getStartedButton3: '../module/getStarted.html',
        getStartedButton4: '../module/getStarted.html',
        getStartedButton5: '../module/getStarted.html',
        getStartedButton6: '../module/getStarted.html',
        getStartedButton7: '../module/getStarted.html'
    };

    const pageUrl = pageMap[buttonId];
    if (pageUrl) {
        window.location.href = pageUrl;
    } else {
        console.error(`Page URL not defined for button with ID: ${buttonId}`);
    }
}