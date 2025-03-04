document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("myVideo");

    // Create an Intersection Observer to detect when the video is in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                video.play();  // Play when video is in view
            } else {
                video.pause(); // Pause when video is out of view
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% of the video is in view

    // Observe the video element
    observer.observe(video);
});
