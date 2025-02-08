document.addEventListener('DOMContentLoaded', () => {
    const endDate = new Date("2025-06-27T12:00:00.000Z").getTime();

    const interval = setInterval(function() {

        const now = new Date().getTime();

        const diff = endDate - now;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        document.querySelector('.day').innerHTML = days;
        document.querySelector('.hour').innerHTML = hours;
        document.querySelector('.minute').innerHTML = minutes;
        document.querySelector('.second').innerHTML = seconds;

        if (diff < 0) {
            clearInterval(interval);
            document.querySelector('.day').innerHTML = 0;
            document.querySelector('.hour').innerHTML = 0;
            document.querySelector('.minute').innerHTML = 0;
            document.querySelector('.second').innerHTML = 0;
        }
    }, 1000);

    const audio = document.querySelector('.bg-sound');
    audio.volume = 0.7;
    const playButton = document.querySelector('.play-music');
    const playButtonImg = document.querySelector('.play-music img');
    playButton.addEventListener('click', () => {
        if (playButton.classList.contains('pause')) {
            audio.play();
            playButtonImg.src = "../images/play3.gif"
            playButton.classList.remove('pause');
            playButton.classList.add('play');
        } else if (playButton.classList.contains('play')) {
            audio.pause();
            playButtonImg.src = "../images/play2.gif"
            playButton.classList.remove('play');
            playButton.classList.add('pause');
        }
    })
})