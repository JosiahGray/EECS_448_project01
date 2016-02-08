var currentTime = new Date();
var timerInterval = setInterval(timer, 1000);
var lastTime = currentTime.toLocaleTimeString()

function timer() {
    currentTime = new Date();
    lastTime = currentTime.toLocaleTimeString()
    document.getElementById("time").innerHTML = lastTime;
}
