// Get references to elements
const addImageBtns = document.querySelectorAll('.add-image-btn');
const addVideoBtns = document.querySelectorAll('.add-video-btn');
const imageGalleries = document.querySelectorAll('.image-gallery');
const videoGalleries = document.querySelectorAll('.video-gallery');

// Add event listeners for image upload buttons
addImageBtns.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Handle image upload logic here
        const imageGallery = imageGalleries[index];

        // Create and display the image element
        const image = document.createElement('img');
        image.src = 'assets/img/about.jpg'; // Replace with actual image URL
        imageGallery.appendChild(image);
    });
});

// Add event listeners for video upload buttons
addVideoBtns.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Handle video upload logic here
        const videoGallery = videoGalleries[index];

        // Create and display the video element
        const video = document.createElement('video');
        // video.atrr(controls);
        video.setAttribute('controls','')
        video.src = 'assets/video/personal.mp4'; // Replace with actual video URL
        videoGallery.appendChild(video);
    });
});
