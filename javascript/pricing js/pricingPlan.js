document.addEventListener('DOMContentLoaded', function () {
    setupButtonClick("getStartedPricing1");
    setupButtonClick("getStartedPricing2");
    setupButtonClick("getStartedPricing3");
    setupButtonClick("getStartedPricing4");
    setupButtonClick("getStartedPricing5");
    setupButtonClick('trainerPricing');
    setupButtonClick('oneToOnePricing');
    setupButtonClick('nutritionPricing');
    setupButtonClick('aboutPricing');
    setupButtonClick('signInPricing');

 
});

function setupButtonClick(buttonId) {
    document.getElementById(buttonId).onclick = function () {
        navigateToPage(buttonId);
    };
}

function navigateToPage(buttonId) {
    const pageMap = {
        getStartedPricing1: '..//module/getStarted.html',
        getStartedPricing2: '..//module/getStarted.html',
        getStartedPricing3: '..//module/getStarted.html',
        getStartedPricing4: '..//module/getStarted.html',
        getStartedPricing5: '..//module/getStarted.html',
        trainerPricing: '../index.html',
        oneToOnePricing: '../module/One-to-One.html',
        nutritionPricing: '../module/nutritionPage.html',
        aboutPricing: '../module/about.html',
        signInPricing: '../module/signIn.html',
 
    };

    const pageUrl = pageMap[buttonId];
    if (pageUrl) {
        window.location.href = pageUrl;
    } else {
        console.error(`Page URL not defined for button with ID: ${buttonId}`);
    }
}


