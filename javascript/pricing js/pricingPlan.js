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


function changeSlider2() {
    var checkbox = document.querySelector('.switchPlan input[type="checkbox"]');
    var yearlyElement2 = document.getElementById("yearlyPricingplan");
    var monthlyPricing2 = document.getElementById("monthlyPricingPlan");
    var free2Element = document.getElementById("free2");
    var free3Element = document.getElementById("free3");



    yearlyElement2.style.fontWeight = checkbox.checked ? "bold" : "normal";
    monthlyPricing2.style.fontWeight = !checkbox.checked ? "bold" : "normal";
    monthlyPricing2.style.fontWeight = checkbox.checked ? "normal" : "bold"; 
    free2Element.textContent = checkbox.checked ? "£14.99" : "£16.99";
    free3Element.textContent = checkbox.checked ? "£26.99" : "£29.99";



}

