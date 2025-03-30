// Video Controls
const video = document.getElementById('mainVideo');
const playButton = document.getElementById('playButton');
const progress = document.getElementById('progress');

// Play/Pause functionality
playButton.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playButton.textContent = 'Pause';
    } else {
        video.pause();
        playButton.textContent = 'Play';
    }
});

// Update progress bar
video.addEventListener('timeupdate', () => {
    const progressPercent = (video.currentTime / video.duration) * 100;
    progress.style.width = `${progressPercent}%`;
});

// Click to seek
document.getElementById('progressBar').addEventListener('click', (e) => {
    const rect = e.target.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    video.currentTime = pos * video.duration;
});

// Handle video end
video.addEventListener('ended', () => {
    playButton.textContent = 'Play';
    progress.style.width = '0%';
});