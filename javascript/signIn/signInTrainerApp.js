document.addEventListener('DOMContentLoaded', function () {
    setupButtonClick('aboutSignIn1');
    setupButtonClick("trainerApp6");
    setupButtonClick('oneToOneSignin');
    setupButtonClick('nutritionSignIn');
    setupButtonClick('pricingSignIn');
    setupButtonClick('signInSignIn');
    setupButtonClick('getStartedSignIn');

});

function setupButtonClick(buttonId) {
    document.getElementById(buttonId).onclick = function () {
        navigateToPage(buttonId);
    };
}

function navigateToPage(buttonId) {
    const pageMap = {
        aboutSignIn1: '..//module/about.html',
        trainerApp6: '..//index.html',
        oneToOneSignin: '..//module/One-to-One.html',
        nutritionSignIn: '..//module/nutritionPage.html',
        pricingSignIn: '..//module/pricing.html',
        signInSignIn: '..//module/signIn.html',
        getStartedSignIn: '..//module/getStarted.html',
    };

    const pageUrl = pageMap[buttonId];
    if (pageUrl) {
        window.location.href = pageUrl;
    } else {
        console.error(`Page URL not defined for button with ID: ${buttonId}`);
    }
}