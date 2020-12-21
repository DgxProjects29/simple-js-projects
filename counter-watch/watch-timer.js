Number.prototype.pad = function (size) {
  var s = String(this);
  while (s.length < (size || 2)) {
    s = "0" + s;
  }
  return s;
};

const timerSlider = document.getElementById("timer-slider");
const timerDisplay = document.getElementById("timer-display");
let timeInSeconds = 0;
let myCounDonwInterval;

function updateTimerDisplay(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;

  timerDisplay.innerHTML = `${mins.pad(2)} : ${secs.pad(2)}`;
}

function countDown() {
  if (timeInSeconds <= 0) {
    stopCounDown();
  } else {
    timeInSeconds--;
    updateTimerDisplay(timeInSeconds);
  }
}

function stopCounDown() {
  clearInterval(myCounDonwInterval);
  timeInSeconds = 0;
  timerDisplay.style.color = "#e63946"
  setTimeout(function () {
    timerDisplay.style.color = "#ffffff"
  }, 1000);
  updateTimerDisplay(timeInSeconds);
  timerSlider.value = 0;
}

timerSlider.oninput = function () {
  timeInSeconds = timerSlider.value;
  updateTimerDisplay(timeInSeconds);
};

document.getElementById("start-timer").addEventListener("click", function () {
  myCounDonwInterval = setInterval(countDown, 1000);
});

document.getElementById("stop-timer").addEventListener("click", stopCounDown);
