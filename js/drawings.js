// cSpell:disable
const categoryEl = document.querySelector(".category");
let drawingUrls = [];


addDrawing('AxL.jpg', 'Arwin & Latte Portrait <br>Miss Not So Sidekick');
addDrawing('gorouarcher.jpg', 'Gorou Bow Practice <br>Genshin Impact');
addDrawing('catxiao.jpg', 'Catboy Xiao <br>Genshin Impact');
addDrawing('catnoir.jpg', 'Cat Noir <br>Miraculous Ladybug');





shuffleArray(drawingUrls);

function closeDrawing() {
    const el = document.getElementById("preview");
    el.firstChild.remove();
    el.style.display = "none";
}

function showDrawing(imageName) {
    const el = document.getElementById("preview");
    el.setAttribute("onClick", "closeDrawing()");
    el.setAttribute("oncontextmenu", "return false;");
    el.style.display = "flex";
    const img = new Image();
    img.src = `images/drawings/${imageName}`;
    el.append(img);
}

function addDrawing (image, title) {
    drawingUrls.push(`images/drawings/${image}`);
    const el = `
        <div class="drawing-item" onClick="showDrawing('${image}')">
            <img src="images/drawings/${image}" oncontextmenu="return false;" loading="lazy" alt="${title}" />
            <div class="drawing-title">${title}</div>
        </div>
    `;
    categoryEl ? (categoryEl.innerHTML+= el) : null;
}


function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
