var array=[ "red" , "yellow" , "green" , "blue"];
var start=false;
var level =0;
$(document).Keypress(function () {
  if(!start){
    $("p").text=("Level "+level);
  }
})
function nextSequence() {
  userClickedPattern = [];
  level++;
  $("p").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}
function playSound(name) {
  var sound = new Audio("sounds/"+name+".mp3");
  audio.play();
}
function gameover() {
  level=0;
  start=false;
  gamePattern=[];
}
function animation(currentcolor) {
  $("#"+currentcolor).addcClass("press");
  setTimeout(function () {
    $("#"+currentcolor).removeClass("press");
  },1000);
}
