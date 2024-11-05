

// FAQ section JS start
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        faqItem.classList.toggle('open');
    });
});
// FAQ section JS end



    const video = document.getElementById('video');
    const playButton = document.getElementById('playButton');

    playButton.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            playButton.style.display = 'none'; // Hide button when video is playing
        } else {
            video.pause();
            playButton.style.display = 'flex'; // Show button when video is paused
        }
    });

    video.addEventListener('pause', () => {
        playButton.style.display = 'flex';
    });

    video.addEventListener('play', () => {
        playButton.style.display = 'none';
    });
