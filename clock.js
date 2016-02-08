var currentTime = new Date();
var timerInterval = setInterval(timer, 1000);
var lastTime = currentTime.toLocaleTimeString()

function timer() {
    currentTime = new Date();
    lastTime = currentTime.toLocaleTimeString()
    document.getElementById("time").innerHTML = lastTime;
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
  /*FIX ME*/
}
