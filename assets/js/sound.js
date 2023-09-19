// Get the button and audio elements
const button = document.querySelector('.animated-btn');
const hoverSound = document.getElementById('hoverSound');

// Add a event listener to play the sound on hover
button.addEventListener('hover', function () {
    hoverSound.play();
});