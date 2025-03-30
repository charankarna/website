// Ensure video plays automatically
document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('background-video');
    video.play().catch(error => {
        // Handle autoplay restrictions
        console.log('Video autoplay failed:', error);
    });
});