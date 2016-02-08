<!-- The timer() function and the use of setInterval were modeled on the script from here:
http://www.w3schools.com/js/js_timing.asp
-->
var currentTime = new Date();
var timerInterval = setInterval(timer, 1000);
var lastTime = currentTime.toLocaleTimeString()

var run = true;

<!-- This is a filler function to use for positioning and proof of concept -->
function timer() {
    if (run) {
      currentTime = new Date();
      lastTime = currentTime.toLocaleTimeString()
      document.getElementById("time").innerHTML = lastTime;
    }
    else {
      document.getElementById("time").innerHTML = lastTime;
    }
}
var toggleType = function() {
  /*FIX ME*/
}

var incrementTime = function() {
  /*FIX ME*/
}

var decrementTime = function() {
  /*FIX ME*/
}

var set24hrs = function () {
  /*FIX ME*/
}

var set12hrs = function () {
  /*FIX ME*/
}

var toggleSet = function(){
  if (!run) {
    run = true;
    document.getElementById("clock-picture").src="clock-base.png";
    document.getElementById('minbtn').hidden = true;
    document.getElementById('minbtn').onclick = '';
    document.getElementById('addbtn').hidden = true;
    document.getElementById('addbtn').onclick = '';
    document.getElementById('typebtn').hidden = true;
    document.getElementById('typebtn').onclick = '';

    }
  else {
    run = false;
    document.getElementById("clock-picture").src="clock-set.png";
    document.getElementById('minbtn').hidden = false;
    document.getElementById('minbtn').onclick = decrementTime;
    document.getElementById('addbtn').hidden = false;
    document.getElementById('addbtn').onclick = incrementTime;
    document.getElementById('typebtn').hidden = false;
    document.getElementById('typebtn').onclick = toggleType;
  }
}
