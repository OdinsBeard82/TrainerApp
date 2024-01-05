function changeDrpDwn500() {
    var checkbox = document.querySelector('.switchPlan input[type="checkbox"]');

    if (checkbox.checked) {
    var priceChangeElement = document.getElementById("free4");
    priceChangeElement.textContent = "£225";

    var drpMenuElement = document.getElementById("dropbtn4");
    drpMenuElement.textContent = "Up to 500 Clients";
    } else  {    
    var priceChangeElement = document.getElementById("free4");
    priceChangeElement.textContent = "£250";
    
    var drpMenuElement = document.getElementById("dropbtn4");
    drpMenuElement.textContent = "Up to 500 Clients";
    }

}

function changeDrpDwn5000() {
    var checkbox = document.querySelector('.switchPlan input[type="checkbox"]');

    if (checkbox.checked) {
        var priceChangeElement = document.getElementById("free4");
        priceChangeElement.textContent = "£315";

        var drpMenuElement = document.getElementById("dropbtn4");
        drpMenuElement.textContent = "Up to 5000 Clients";
    } else {
        var priceChangeElement = document.getElementById("free4");
        priceChangeElement.textContent = "£350";

        var drpMenuElement = document.getElementById("dropbtn4");
        drpMenuElement.textContent = "Up to 5000 Clients";
        
    }
}



