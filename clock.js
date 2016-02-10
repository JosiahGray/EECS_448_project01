<!-- The timer() function and the use of setInterval were modeled on the script from here:
http://www.w3schools.com/js/js_timing.asp
-->
var currentTime = new Date();
var lastTime = currentTime;
var timerInterval = setInterval(timer, 1000);
var milTime = false;
var lastTime = currentTime.toLocaleTimeString('en-US', {hour12: !(milTime)});

var options = {hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: !milTime};
var run = true;

<!-- This is a filler function to use for positioning and proof of concept -->
 function timer() {
      if (run) {
        currentTime.setSeconds((currentTime.getSeconds() + 1));
        options = {hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: !milTime};
        lastTime = currentTime.toLocaleTimeString('en-US', options);
        document.getElementById("time").innerHTML = lastTime;
      }
     else {
       document.getElementById("time").innerHTML = lastTime;
       //flashTime();
     }
 }
var toggleType = function() {
  /*FIX ME*/
}
var on = true;
/*var flashTime = function(){
    if(on){
    
        document.getElementById("time").hidden = false;
        on = false;
    } else {
    
        document.getElementById("time").hidden = true;
        on = true;
    }
    setInterval(flashTime, 350);
}*/

var incrementTime = function() {
  /*FIX ME*/
  currentTime.setHours((currentTime.getHours() + 1)%24);
  options = {hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: !milTime};
  lastTime = currentTime.toLocaleTimeString('en-US', options);
  document.getElementById("time").innerHTML = lastTime;
}

var decrementTime = function() {
  /*FIX ME*/
  currentTime.setHours((currentTime.getHours() - 1)%24);
  options = {hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: !milTime};
  lastTime = currentTime.toLocaleTimeString('en-US', options);
  document.getElementById("time").innerHTML = lastTime;
}

var set24hrs = function () {

    milTime = true;
    options = {hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: !milTime};
    lastTime = currentTime.toLocaleTimeString('en-US', options);
    document.getElementById("time").innerHTML = lastTime;

}

var set12hrs = function () {

    milTime = false;
    options = {hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: !milTime};
    lastTime = currentTime.toLocaleTimeString('en-US', options);
    document.getElementById("time").innerHTML = lastTime;
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

  var setTime = function(hours, minutes, seconds){
    currentTime.setHours(hours);
    currentTime.setMinutes(minutes);
    currentTime.setSeconds(seconds);
  }
}
