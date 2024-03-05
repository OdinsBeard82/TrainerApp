function changeSlider2() {
    var checkbox = document.querySelector('.switchPlan input[type="checkbox"]');
    var yearlyElement2 = document.getElementById("yearlyPricingplan");
    var monthlyPricing2 = document.getElementById("monthlyPricingPlan");
    var free2Element = document.getElementById("free2");
    var free3Element = document.getElementById("free3");
    var free4Element = document.getElementById('free4');





    yearlyElement2.style.fontWeight = checkbox.checked ? "bold" : "normal";
    monthlyPricing2.style.fontWeight = !checkbox.checked ? "bold" : "normal";
    monthlyPricing2.style.fontWeight = checkbox.checked ? "normal" : "bold"; 
    free2Element.textContent = checkbox.checked ? "£14.99" : "£16.99"; 
   

    if(free4Element.textContent === '£250') {
        if(checkbox.checked) {
            free4Element.textContent = '£225';
        }
    }  
    if(free4Element.textContent === '£350') {
        if(checkbox.checked) {
            free4Element.textContent = '£325';
        }
    }
    if (free3Element.textContent === '£30') {
        if (checkbox.checked) {
            free3Element.textContent = "£25";
        }
    } 
    if (free3Element.textContent === '£45') {
        if (checkbox.checked) {
            free3Element.textContent = "£40";
        }
    }  
    if (free3Element.textContent === '£70') {
        if (checkbox.checked) {
            free3Element.textContent = "£65";
        }
    } 
    if (free3Element.textContent === '£120') {
        if (checkbox.checked) {
            free3Element.textContent = "£115";
        }
    } 
    if (free3Element.textContent === '£165') {
        if (checkbox.checked) {
            free3Element.textContent = "£150";
        }
    } 
    if (free3Element.textContent === '£200') {
        if (checkbox.checked) {
            free3Element.textContent = "£190";
        }
    } 
    if (free3Element.textContent === '£225') {
        if (checkbox.checked) {
            free3Element.textContent = "£215";
        }
    } 




if (free4Element.textContent === '£225') {
    if(!checkbox.checked) {
        free4Element.textContent = '£250';
    }
}
if (free4Element.textContent === '£325') {
    if(!checkbox.checked) {
        free4Element.textContent = '£350';
    }
}

if (free3Element.textContent === '£25') {
    if(!checkbox.checked) {
        free3Element.textContent = '£30';
    }
}

if (free3Element.textContent === '£40') {
    if(!checkbox.checked) {
        free3Element.textContent = '£45';
    }
}

if (free3Element.textContent === '£65') {
    if(!checkbox.checked) {
        free3Element.textContent = '£70';
    }
}

if (free3Element.textContent === '£115') {
    if(!checkbox.checked) {
        free3Element.textContent = '£120';
    }
}

if (free3Element.textContent === '1500') {
    if(!checkbox.checked) {
        free3Element.textContent = '£165';
    }
}

if (free3Element.textContent === '£190') {
    if(!checkbox.checked) {
        free3Element.textContent = '£200';
    }
}

if (free3Element.textContent === '£215') {
    if(!checkbox.checked) {
        free3Element.textContent = '£225';
    }
}
}