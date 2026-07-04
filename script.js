document.addEventListener("DOMContentLoaded", () => {

  const marker = document.querySelector('[mindar-image-target]');
  const audio = document.querySelector("#heartbeat");

  marker.addEventListener("targetFound", () => {
      audio.play();
  });

  marker.addEventListener("targetLost", () => {
      audio.pause();
      audio.currentTime = 0;
  });

});