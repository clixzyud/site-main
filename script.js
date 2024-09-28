const audio = new Audio('https://clixzyud.github.io/site-main/poyliotragoudo.mp3');

document.getElementById('play-button').addEventListener('click', function() {
    audio.play().then(() => {
        document.getElementById('play-button').style.display = 'none';
        document.getElementById('now-playing').style.display = 'inline-block';
    }).catch(error => {
        console.error('Error playing audio:', error);
        alert('Failed to play audio. Please check the console for more information.');
    });
});

audio.addEventListener('error', function() {
    console.error('Audio error:', audio.error);
    console.log('Audio URL:', audio.src);
    alert('Failed to load audio. Please check the console for more information.');
});
