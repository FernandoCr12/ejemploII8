function openApp() {
    const homeButton = document.querySelector('.home-button');
    const videoContainer = document.querySelector('.video-container');

    homeButton.style.display = 'none';
    videoContainer.style.display = 'block';

    const video = document.getElementById('video');
    video.play();
}
