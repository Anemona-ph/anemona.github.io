// Ensure the audio file cannot be downloaded by hiding the download button
document.addEventListener('DOMContentLoaded', function() {
    const audioElements = document.querySelectorAll('audio');

    audioElements.forEach(audio => {
        // Create a custom control to hide the download button
        const controls = audio.querySelector('control');
        if (controls) {
            controls.style.display = 'none';
        }
    });
});
