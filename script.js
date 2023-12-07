document.addEventListener("DOMContentLoaded", function () {
    const imageContainer = document.querySelector(".image-container");

    // Add placeholder images dynamically
    for (let i = 1; i <= 5; i++) {
        const image = document.createElement("img");
        image.src = `placeholder_image_${i}.jpg`;
        imageContainer.appendChild(image);
    }

    // Automatically change focus every 3 seconds
    setInterval(changeFocus, 3000);

    function changeFocus() {
        const images = imageContainer.querySelectorAll("img");
        const firstImage = images[0];
        imageContainer.removeChild(firstImage);
        imageContainer.appendChild(firstImage);
    }
});
