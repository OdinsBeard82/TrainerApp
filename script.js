document.addEventListener('DOMContentLoaded', function () {
    setupButtonClick("trainerApp");
    setupButtonClick("getStartedButton");
    setupButtonClick("getStartedButton2");
    setupButtonClick("oneToOneLink");
    setupButtonClick("nutritionLink");
    setupButtonClick("onlineLink");
    setupButtonClick("pricing");
    setupButtonClick("about"); 
    setupButtonClick("signIn");  
});

function setupButtonClick(buttonId) {
    document.getElementById(buttonId).onclick = function () {
        navigateToPage(buttonId);
    };
}

function navigateToPage(buttonId) {
    const pageMap = {
        trainerApp: './index.html',
        getStartedButton: './module/getStarted.html',
        getStartedButton2: './module/getStarted.html',
        oneToOneLink: './module/One-to-One.html',
        nutritionLink: './module/nutritionPage.html',
        onlineLink: './module/online.html',
        pricing: './module/pricing.html',
        about: './module/about.html',
        signIn: './module/signIn.html'
    };

    const pageUrl = pageMap[buttonId];
    if (pageUrl) {
        window.location.href = pageUrl;
    } else {
        console.error(`Page URL not defined for button with ID: ${buttonId}`);
    }
}
