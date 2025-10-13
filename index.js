// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Set up button click event listeners
    const getStartedButton = document.getElementById('getStartedButton');
    const getStartedButton2 = document.getElementById('getStartedButton2');

    // Check if buttons exist to avoid errors
    if (getStartedButton) {
        getStartedButton.onclick = function () {
            alert('Get Started Button 1 clicked!');
        };
    }

    if (getStartedButton2) {
        getStartedButton2.onclick = function () {
            alert('Get Started Button 2 clicked!');
        };
    }

    // Additional button event listeners can be set up similarly
    // For example, for the Coaching button
    const coachingButton = document.getElementById('coachingButton');
    if (coachingButton) {
        coachingButton.onclick = function () {
            alert('Coaching Button clicked!');
        };
    }
});
