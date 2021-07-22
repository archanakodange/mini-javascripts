const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    showcase.classList.toggle('active');
});

const video = document.getElementById('bgvideo');
const control = document.querySelector('.control');

control.addEventListener('click', () => {
    control.classList.toggle('play');
    if (video.paused) {
        video.play();
        control.title = "pause";
    }
    else {
        video.pause();
        control.title = "play";
    }
});