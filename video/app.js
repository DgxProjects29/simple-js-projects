const btnSwitch = document.querySelector(".switch-btn");

const videoContainer = document.querySelector(".video-container");

btnSwitch.addEventListener("click", function () {
  btnSwitch.classList.toggle("slide");

  if (btnSwitch.classList.contains("slide")) {
    videoContainer.pause();
  } else {
    videoContainer.play();
  }
});

window.addEventListener("load", function () {
  document.querySelector(".preloader").classList.add("hide-preloader");
});
