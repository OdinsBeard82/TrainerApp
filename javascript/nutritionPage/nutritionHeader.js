document.addEventListener('DOMContentLoaded', function () {
    setupButtonClick("newgetStartedButton");
    setupButtonClick("newgetStartedButton2");
    setupButtonClick('newtrainerApp');
    setupButtonClick('newoneToOneLink');
    setupButtonClick('nutritionPricing');
    setupButtonClick('nutritionAbout');
    setupButtonClick('nutritionSignIn');
    setupButtonClick('newgetStartedButton3');
});

function setupButtonClick(buttonId) {
    document.getElementById(buttonId).onclick = function () {
        navigateToPage(buttonId);
    };
}

function navigateToPage(buttonId) {
    const pageMap = {
        newgetStartedButton: '..//module/getStarted.html',
        newgetStartedButton2: '..//module/getStarted.html',
        newgetStartedButton3: '..//module/getStarted.html',
        newtrainerApp: '..//index.html',
        newoneToOneLink: '..//module/One-to-One.html',
        nutritionPricing: '..//module/pricing.html',
        nutritionAbout: '..//module/about.html',
        nutritionSignIn: '..//module/signIn.html',
    };

    const pageUrl = pageMap[buttonId];
    if (pageUrl) {
        window.location.href = pageUrl;
    } else {
        console.error(`Page URL not defined for button with ID: ${buttonId}`);
    }
}


