function changeSlider2() {
    var checkbox = document.querySelector('.switchPlan input[type="checkbox"]');
    var yearlyElement2 = document.getElementById("yearlyPricingplan");
    var monthlyPricing2 = document.getElementById("monthlyPricingPlan");
    var free2Element = document.getElementById("free2");
    var free3Element = document.getElementById("free3");

    var list1 = document.getElementById(free3.textContent);
    var list2 = document.getElementById("client15");
    var list3 = document.getElementById("client30");
    var list4 = document.getElementById("client50");
    var list5 = document.getElementById("client75");
    var list6 = document.getElementById("client100");
    var list7 = document.getElementById("client200");



    yearlyElement2.style.fontWeight = checkbox.checked ? "bold" : "normal";
    monthlyPricing2.style.fontWeight = !checkbox.checked ? "bold" : "normal";
    monthlyPricing2.style.fontWeight = checkbox.checked ? "normal" : "bold"; 
    free2Element.textContent = checkbox.checked ? "£14.99" : "£16.99"; 

    var list4Value = "£115"; 
    if (free3.textContent === list4Value) {
        if (checkbox.checked) {
            free3Element.textContent = "£120";
        }
    }
    
    console.log(free3.textContent = "900");

    let i = 0;

do {
    console.log(free3.textContent[i]);
    i++;
} while (i < dropList.length);
}



/*
    var free3Element = document.getElementById("free3");
    var thisOneDropdown = document.getElementById("thisOne");
    var list1 = document.getElementById("client5");
    var list2 = document.getElementById("client15");
    var list3 = document.getElementById("client30");
    var list4 = document.getElementById("client50");
    var list5 = document.getElementById("client75");
    var list6 = document.getElementById("client100");
    var list7 = document.getElementById("client200");
    
    list1.textContent = checkbox.checked ? "£25" : "£30"; 
    list2.textContent = checkbox.checked ? "£25" : "£30"; 
    list3.textContent = checkbox.checked ? "£25" : "£30"; 
    list4.textContent = checkbox.checked ? "£25" : "£30"; 
    list5.textContent = checkbox.checked ? "£25" : "£30"; 
    list6.textContent = checkbox.checked ? "£25" : "£30"; 
    list7.textContent = checkbox.checked ? "£25" : "£30"; 

    //if input of free3 is £25
    //then free3 textcontent = "£30"

    //if input of free3 is £30
    //then free3 textcontent = "£25"






    var dropList = [list1, list2, list3,, list4, list5, list6, list7];


let i = 0;

do {
    console.log(dropList.textContent[i]);
    i++;
} while (i < dropList.length);
}


 

} */
