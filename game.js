import random

var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
};


// Use jQuery to select the button with the same id as the randomChosenColour

for (var i=0; i < $(".btn").length; i++) {
    $(".btn")[i].on("click", function() {

    var buttonTypeo
    });
}

// Animate

function buttonAnimation(currentButton) {

    var activeButton = $('.'+currentButton);

    activeButton.classList.add("pressed");

    setTimein(function() {
        $("#green").fadeOut(500).fadeIn(500, blink);
    });
}
