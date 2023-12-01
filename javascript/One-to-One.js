function trainerAppButton(One) {
    document.getElementById(One).onclick = homePage;
}

function homePage() {
    window.location.href = '../module/One-to-One.html';
}

trainerAppButton("oneToOne");