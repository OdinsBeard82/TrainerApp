document.addEventListener('DOMContentLoaded', function () {
    setupButtonClick("about0"); 
    setupButtonClick("about1"); 
    setupButtonClick("pricing0");
    setupButtonClick("pricing1");
    setupButtonClick("trainerApp");
    setupButtonClick("getStartedButton");
    setupButtonClick("getStartedButton2");
    setupButtonClick("oneToOneLink");
    setupButtonClick("nutritionLink0");
    setupButtonClick("nutritionLink");
    setupButtonClick("oneToOneLink0");
    setupButtonClick("onlineLink");
});

function setupButtonClick(buttonId) {
    document.getElementById(buttonId).onclick = function () {
        navigateToPage(buttonId);
    };
}

function navigateToPage(buttonId) {
    const pageMap = {
        pricing0: './module/pricing.html',
        about0: './module/about.html',
        about1: './module/about.html',
        pricing1: './module/pricing.html',
        trainerApp: './index.html',
        getStartedButton: './module/getStarted.html',
        getStartedButton2: './module/getStarted.html',
        oneToOneLink0: './module/One-to-One.html',
        oneToOneLink: './module/One-to-One.html',
        nutritionLink0: './module/nutritionPage.html',
        nutritionLink: './module/nutritionPage.html',
        onlineLink: './module/online.html',
    };

    const pageUrl = pageMap[buttonId];
    if (pageUrl) {
        window.location.href = pageUrl;
    } else {
        console.error(`Page URL not defined for button with ID: ${buttonId}`);
    }
}

function changeText0() {
    var headingElement = document.getElementById("heading");
    var paragraphElement = document.getElementById("paragraph");
    var outdoorPT2Element = document.getElementById("outdoorPT2");
    var imageElement = outdoorPT2Element.getElementsByTagName("img")[0];

    headingElement.textContent = "Elevate your training to new heights";
    paragraphElement.textContent = "Expand the training possibilities for your clients, both within and beyond the gym. Provide your personalized fitness and nutrition programs through your exclusive PT coaching app, enabling real-time progress tracking. Foster continuous engagement with clients directly within the app to sustain motivation and ensure long-term commitment to training with you.";
    imageElement.src = "../images/coaching.jpg";

}

function changeText1() {
    var headingElement = document.getElementById("heading");
    var paragraphElement = document.getElementById("paragraph");
    var outdoorPT2Element = document.getElementById("outdoorPT2");
    var imageElement = outdoorPT2Element.getElementsByTagName("img")[0];
    
    headingElement.textContent = "Establishing a Distinctive Brand";
    paragraphElement.textContent = "A tailor-made, branded application that distinctly represents you and your brand stands as the optimal means to captivate clients and provide unparalleled, personalized experiences.";
    imageElement.src = "../images/brand.jpg";
}

function changeText2() {
    var headingElement = document.getElementById("heading");
    var paragraphElement = document.getElementById("paragraph");
    var outdoorPT2Element = document.getElementById("outdoorPT2");
    var imageElement = outdoorPT2Element.getElementsByTagName("img")[0];
    
    headingElement.textContent = "Fitness and nutrition combined";
    paragraphElement.textContent ="Experience the convenience of seamlessly managing both workouts and nutrition. Benefit from robust features including personalized meal planning, efficient meal tracking, and effective habit coaching—loved by both you and your clients.";
    imageElement.src = "../images/trackFood.jpg";

}

function changeText3() {
    var headingElement = document.getElementById("heading");
    var paragraphElement = document.getElementById("paragraph");
    var outdoorPT2Element = document.getElementById("outdoorPT2");
    var imageElement = outdoorPT2Element.getElementsByTagName("img")[0];
    
    headingElement.textContent = "Maximize Revenue Potential";
    paragraphElement.textContent = "Create and oversee diversified revenue streams by leveraging online training, phased and on-demand programs, membership bundles, and other innovative offerings.";
    imageElement.src = "../images/profit.jpg";

}


function changeSlider() {
    var yearlyElement = document.getElementById("yearlyPricing");
    var monthlyElement = document.getElementById("monthlyPricing");
    var checkbox = document.querySelector('.switch input');
    var perMonthElement = document.getElementById("monthlyAmount");
    
    yearlyElement.style.fontWeight = checkbox.checked ? "bold" : "normal";
    monthlyElement.style.fontWeight = !checkbox.checked ? "bold" : "normal";
    monthlyElement.style.fontWeight = checkbox.checked ? "normal" : "bold"; 
    perMonthElement.textContent = checkbox.checked ? "19.99" : "25";
}
    


