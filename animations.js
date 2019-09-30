

var identifierBlue = '.' + "blue";
var identifierRed = '.' + "red";
var identifierGreen = '.' + "green";
var identifierYellow = '.' + "yellow";


animateBoxes();

  function animateBoxes(){
    moveRed(identifierRed);
    moveBlue(identifierBlue);
    moveYellow(identifierYellow);
    moveGreen(identifierGreen);
    animateBoxes();
  }

function moveRed(identifier) {
  $(identifier).animate({
    top: '275px'
  }, 1700, 'linear');
  $(identifier).animate({
    right: '275px'
  }, 1700, 'linear');
  $(identifier).animate({
    top: '0'
  }, 1700, 'linear');
  $(identifier).animate({
    right: '0'
  }, 1700, 'linear');
}

function moveBlue(identifier) {
  $(identifier).animate({
    right: '275px'
  }, 1700, 'linear');
  $(identifier).animate({
    top: '-275px'
  }, 1700, 'linear');
  $(identifier).animate({
    right: '0'
  }, 1700, 'linear');
  $(identifier).animate({
    top: '0'
  }, 1700, 'linear');
}

function moveGreen(identifier) {
  $(identifier).animate({
    left: '275px'
  }, 1700, 'linear');
  $(identifier).animate({
    top: '275px'
  }, 1700, 'linear');
  $(identifier).animate({
    left: '0'
  }, 1700, 'linear');
  $(identifier).animate({
    top: '0'
  }, 1700, 'linear');
}

function moveYellow(identifier) {
  $(identifier).animate({
    top: '-275px'
  }, 1700, 'linear');
  $(identifier).animate({
    left: '275px'
  }, 1700, 'linear');
  $(identifier).animate({
    top: '0'
  }, 1700, 'linear');
  $(identifier).animate({
    left: '0'
  }, 1700, 'linear');
}
