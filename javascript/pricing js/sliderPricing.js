function changeSlider2() {
    var checkbox = document.querySelector('.switchPlan input[type="checkbox"]');
    var yearlyElement2 = document.getElementById("yearlyPricingplan");
    var monthlyPricing2 = document.getElementById("monthlyPricingPlan");
    var free2Element = document.getElementById("free2");
    var free4Element = document.getElementById("free4");

    yearlyElement2.style.fontWeight = checkbox.checked ? "bold" : "normal";
    monthlyPricing2.style.fontWeight = !checkbox.checked ? "bold" : "normal";
    monthlyPricing2.style.fontWeight = checkbox.checked ? "normal" : "bold"; 
    free2Element.textContent = checkbox.checked ? "£14.99" : "£16.99";
    free4Element.textContent = checkbox.checked ? "£225" : "£249";
 
}