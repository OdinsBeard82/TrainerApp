document.addEventListener('DOMContentLoaded', function () {
    setupButtonClick("oneToOneLink10");
    setupButtonClick("nutritionLink10");
    setupButtonClick('pricing10');
    setupButtonClick('about10');
    setupButtonClick('signIn10');
    setupButtonClick('trainerApp10');
});

function setupButtonClick(buttonId) {
    document.getElementById(buttonId).onclick = function () {
        navigateToPage(buttonId);
    };
}

function navigateToPage(buttonId) {
    const pageMap = {
        oneToOneLink10: '..//module/One-to-One.html',
        nutritionLink10: '..//module/nutritionPage.html',
        pricing10: '..//module/pricing.html',
        about10: '..//module/about.html',
        signIn10: '..//module/signIn.html',
        trainerApp10: '..//index.html',
    };

    const pageUrl = pageMap[buttonId];
    if (pageUrl) {
        window.location.href = pageUrl;
    } else {
        console.error(`Page URL not defined for button with ID: ${buttonId}`);
    }
}
