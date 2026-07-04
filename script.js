document.addEventListener("DOMContentLoaded",()=>{

const marker=document.querySelector("[mindar-image-target]");
const audio=document.querySelector("#heartbeat");
const info=document.querySelector("#infoBox");

marker.addEventListener("targetFound",()=>{

audio.play();

info.style.display="block";

});

marker.addEventListener("targetLost",()=>{

audio.pause();

audio.currentTime=0;

info.style.display="none";

});

});