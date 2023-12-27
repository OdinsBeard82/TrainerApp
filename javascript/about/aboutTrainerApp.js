document.addEventListener('DOMContentLoaded', function () {
    setupButtonClick("trainerApp5");
    setupButtonClick("oneToOneAbout");
    setupButtonClick("nutritionAbout");
    setupButtonClick("pricingAbout");
    setupButtonClick("aboutAbout");
    setupButtonClick("signInAbout");
    setupButtonClick("getStartedAbout");
});

function setupButtonClick(buttonId) {
    document.getElementById(buttonId).onclick = function () {
        navigateToPage(buttonId);
    };
}

function navigateToPage(buttonId) {
    const pageMap = {
        trainerApp5: '..//index.html',
        oneToOneAbout: '..//module/One-to-One.html',
        nutritionAbout: '..//module/nutritionPage.html',
        pricingAbout: '..//module/pricing.html',
        aboutAbout: '..//module/about.html',
        signInAbout: '..//module/signIn.html',
        getStartedAbout: '..//module/getStarted.html',
    };

    const pageUrl = pageMap[buttonId];
    if (pageUrl) {
        window.location.href = pageUrl;
    } else {
        console.error(`Page URL not defined for button with ID: ${buttonId}`);
    }
}