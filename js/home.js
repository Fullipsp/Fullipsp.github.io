
const imageLength = drawingUrls.length;
const changeAfter = 10; // seconds
let currentSeconds = 1;
let currentIndex = 0;



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
    if (currentIndex + 1 >= imageLength) {
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
    document.getElementById("image-index").innerText = `${currentIndex+1}/${imageLength}`;
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