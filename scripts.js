document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('bg-video');
    const soundToggle = document.getElementById('sound-toggle');
    const soundIcon = document.getElementById('sound-icon');
    const bgMusic = document.getElementById('bg-music');

    updateSoundToggleIcon();
    soundToggle.addEventListener('click', () => {
        video.muted = !video.muted;
        bgMusic.muted = video.muted;

        if (!video.muted) {
            bgMusic.play();
        } else {
            bgMusic.pause();
        }

        updateSoundToggleIcon();
    });

    function updateSoundToggleIcon() {
        soundIcon.innerHTML = video.muted ? '&#128263;' : '&#128266;';
    }
});