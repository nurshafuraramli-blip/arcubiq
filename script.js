document.addEventListener("DOMContentLoaded", () => {

    const marker = document.querySelector('[mindar-image-target]');
    const heartbeat = document.getElementById("heartbeat");
    const heartVoice = document.getElementById("heartVoice");

    marker.addEventListener("targetFound", () => {

        // Mainkan bunyi degupan
        heartbeat.currentTime = 0;
        heartbeat.play();

        // Selepas 1.5 saat, mainkan suara AI
       setTimeout(() => {

    console.log("Suara AI sedang dimainkan...");

    heartVoice.currentTime = 0;

    heartVoice.play()
    .then(() => {
        console.log("Berjaya mainkan suara AI.");
    })
    .catch(err => {
        console.log("ERROR:", err);
    });

}, 1500);

    });

    marker.addEventListener("targetLost", () => {

        heartbeat.pause();
        heartbeat.currentTime = 0;

        heartVoice.pause();
        heartVoice.currentTime = 0;

    });

});