function enlargeImage(imageElement) {
    const imageUrl = imageElement.querySelector('img').src;
    const enlargedImageElement = document.getElementById('enlarged-image');
    enlargedImageElement.innerHTML = `<img src="${imageUrl}" alt="Enlarged Image">`;

    const overlayElement = document.getElementById('overlay');
    overlayElement.classList.add('active');
}

function closeOverlay() {
    const overlayElement = document.getElementById('overlay');
    overlayElement.classList.remove('active');
}
