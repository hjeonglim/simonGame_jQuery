var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

// Keep track of whether if the game has started or not
var started = false;

// Level set it 0 to started and call nextSequence() when a keyboard key has been pressed
var level = 0;

$(document).keypress(function(){
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});

// Identify button clicked
$(".btn").click(function() {

    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length-1);
});

// Check answers
function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length){
            setTimeout(function() {
                nextSequence();
            }, 1000);
        }
    } else {
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text(`Game Over, You got to level ${level}. Press Any Key to Restart`);

        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 200);

        startOver();
    }
}

// Create nextSequence() using random
function nextSequence(){
    userClickedPattern = [];

    // Increase the level by 1 every time nextSequence() is called and update h1 as the level is increased
    level++;

    $("#level-title").text("Level " + level);

    // Increased
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}

// Play sound
function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

// Show the sequence to the user with animations and sounds
function animatePress(currentColour){
    $("#" + currentColour).addClass("pressed");

    setTimeout(function(){
        $("#" + currentColour).removeClass("pressed")
    }, 100);
}

// Play again
function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
}
