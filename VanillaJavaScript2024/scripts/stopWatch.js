// Access the HTML elements using DOM Selector Methods.

let hoursTime = document.getElementById("hoursTimeId");
let minutesTime = document.getElementById("minutesTimeId");
let secondsTime = document.getElementById("secondsTimeId");
let startButton = document.getElementById("startButtonId");
let pauseButton = document.getElementById("pauseButtonId");
let resetButton = document.getElementById("resetButtonId");

startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
resetButton.addEventListener("click", resetTimer);

let clock;

function startTimer() {
  let currentTime = Math.floor(new Date().getTime() / 1000);
  clock = setInterval(function () {
    let newTime = Math.floor(new Date().getTime() / 1000);
    let timeDiff = newTime - currentTime;
    let hours = Math.floor(timeDiff / 3600);
    let minutes = Math.floor((timeDiff % 3600) / 60);
    let seconds = Math.floor((timeDiff % 3600) % 60);
    hoursTime.innerHTML = hours;
    minutesTime.innerHTML = minutes;
    secondsTime.innerHTML = seconds;
  }, 1000);
}

function pauseTimer() {
  clearInterval(clock);
  pauseButton.innerText = "Resume";
}

function resetTimer() {
  clearInterval(clock);
  hoursTime.innerHTML = "00";
  minutesTime.innerHTML = "00";
  secondsTime.innerHTML = "00";
}
