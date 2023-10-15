let drawingUrls = [];
const imageLength = () => drawingUrls.length;
const changeAfter = 10; // seconds
let currentSeconds = 1;
let currentIndex = 0;


setAvatar("./images/drawings/hualianp.webp");

// 3 images max
addImages([
    './images/frames.jpg',
    './images/drawings/belpher.webp',
    './images/drawings/catnoir.webp',
])

addSlideshow([
    './images/drawings/hualianp.webp',
    './images/drawings/AxL.webp',
    './images/drawings/gorouarcher.webp',
    './images/drawings/catxiao.webp',
    './images/drawings/catnoir.webp',
    './images/drawings/childe.webp',
    './images/drawings/kazuhabday.webp',
    './images/drawings/tomo.webp',
    './images/drawings/celestial.webp',
    './images/drawings/winterxiao.webp',
    './images/drawings/belpher.webp'
])




setImage();

setInterval(() => {
    if (currentSeconds >= changeAfter) {
        currentSeconds = 1;
        switchImage();
        return;
    }
    currentSeconds++;
}, 1000);

function switchImage() {
    if (currentIndex + 1 >= imageLength()) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    setImage();
}

function setImage() {
    resetProgressBar();
    const image = drawingUrls[currentIndex];
    document.getElementById("slideshow-image").src = image;
    document.getElementById("image-index").innerText = `${currentIndex+1}/${imageLength()}`;
}

function resetProgressBar() {
    const el = document.getElementById("bar");
    el.animate(
        [
          { width: "0" },
          { width: "100%" },
        ], {
          duration: changeAfter * 1000,
          fill: 'forwards',
        }
    );
}


function addSlideshow(images) {
    drawingUrls = images;
}


function setAvatar(src) {
    document.getElementById("avatar-image").src = src;
}

function addImages([image1, image2, image3]) {
    document.getElementById("image-1").src = image1;
    document.getElementById("image-2").src = image2;
    document.getElementById("image-3").src = image3;
}
