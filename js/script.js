document.addEventListener("DOMContentLoaded", function() {
    var buttonClicks = 0;
    var button = document.getElementById("clickButton");
    
    button.addEventListener("click", function() {
        buttonClicks++;
        var oldText = document.getElementById("hiddenMessage");
        console.log("Button clicked " + buttonClicks + " times.");
        if (buttonClicks === 3) {
            oldText.textContent = "."
        }
        if (buttonClicks === 5) {
            oldText.textContent = "Ouch."
        }
        if (buttonClicks === 10) {
            oldText.textContent = "OMO"
        }
        if (buttonClicks > 10) {
            oldText.textContent += "O";
        }
        if (buttonClicks === 100) {
            oldText.textContent = "ONO the end."
        }
    });


});
function revealMessage() {
    document.getElementById("hiddenMessage").style.display = "block";
}