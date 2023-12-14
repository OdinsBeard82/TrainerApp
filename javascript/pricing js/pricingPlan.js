function changeSlider2() {
    var checkbox = document.querySelector('.switchPlan input[type="checkbox"]');
    var yearlyElement2 = document.getElementById("yearlyPricingplan");
    var monthlyPricing2 = document.getElementById("monthlyPricingPlan");

    yearlyElement2.style.fontWeight = checkbox.checked ? "bold" : "normal";
    monthlyPricing2.style.fontWeight = !checkbox.checked ? "bold" : "normal";
    monthlyPricing2.style.fontWeight = checkbox.checked ? "normal" : "bold"; 
}