if (performance.navigation.type == 1)
  $("h1").text("Game Over! Try Again");

$("body").click(function() {
  simonSays();
});

// Game play listener
$(".btn").click(function() {
  var playerClick = this.id;
  playerArray.push(playerClick);
  checkMove(playerClick);
});

var gameArray = [];
var playerArray = [];
var currentLevel = 1;
var gameIsActive = false;

function simonSays() {
  $("body").off("click");
  gameIsActive = true;
  playerArray = [];
  $("h1").text("Level " + currentLevel);

  var genNum = Math.floor(Math.random() * 4) + 1;

  switch (genNum) {
    case 1:
      genNum = "blue";
      break;
    case 2:
      genNum = "green";
      break;
    case 3:
      genNum = "red";
      break;
    case 4:
      genNum = "yellow";
      break;
    default:
      console.log(genNum);
  }
  gameArray.push(genNum);
  pattern(gameArray);
}

function pattern() {
  var i = 0;

  if (i < gameArray.length) {
    setInterval(function() {
      var temp = gameArray[i];
      playSound(temp);
      buttonAnimation(temp);
      ++i;
    }, 650);
  } else {
    clearInterval();
  }
}


function buttonAnimation(keyPressed) {
  $("." + keyPressed).addClass("pressed");
  setTimeout(function() {
    $("." + keyPressed).removeClass("pressed");
  }, 100);

}

function playSound(e) {
  switch (e) {
    case "blue":
      var audioBlue = new Audio('sounds/blue.mp3');
      audioBlue.play();
      break;
    case "green":
      var audioGreen = new Audio('sounds/green.mp3');
      audioGreen.play();
      break;
    case "red":
      var audioRed = new Audio('sounds/red.mp3');
      audioRed.play();
      break;
    case "yellow":
      var audioYellow = new Audio('sounds/yellow.mp3');
      audioYellow.play();
      break;
    case "wrong":
      var audioWrong = new Audio('sounds/wrong.mp3');
      audioWrong.play();
      break;
    default:
  }
}

function checkMove(playerClick) {
  var currentIteration = playerArray.length - 1;
  if (gameArray[currentIteration] == playerArray[currentIteration]) {
    playSound(playerClick);
    buttonAnimation(playerClick);


    if (playerArray.length === gameArray.length) {
      simonSays();
      currentLevel++;
    }
  } else {
    playSound("wrong");
    buttonAnimation(playerClick);
    gameArray = [];
    playerArray = [];
    currentLevel = 1;
    setTimeout(function() {
      location.reload();
    }, 300);
  }
}
