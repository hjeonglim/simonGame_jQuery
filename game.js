var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];


// Detect click

$(".btn").click(function() {

    var userChosenColour =$(this).attr("id");
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);

    animatePress(userChosenColour);
});


// Start the game

document.addEventListener("keypress", nextSequence());

while (var level=0) {

    if (level === 0) {
        $("#level-title").innerHTML = `LEVEL ${level}`;
        nextSequence();
    }
    level++;
}

// create function to get the random color box

function nextSequence(){

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);
}





// play the sounds

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

// animate a flash to the button selected in randomChosenClour

function animatePress(currentColor) {

    $("#" + currentColor).addClass("pressed");

    setTimeout(function() {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}
