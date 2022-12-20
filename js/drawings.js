// cSpell:disable
const categoryEl = document.querySelector(".category");

addDrawing('AxL.jpg', 'Arwin & Latte Portrait <br>Miss Not So Sidekick');

addDrawing('uzui.jpg', 'Uzui Birthday Party (for my mom) <br>Demon Slayer');

addDrawing('gorouarcher.jpg', 'Gorou Bow Practice <br>Genshin Impact');
addDrawing('catxiao.jpg', 'Catboy Xiao <br>Genshin Impact');
addDrawing('catnoir.jpg', 'Cat Noir <br>Miraculous Ladybug');
addDrawing('childe.jpg', 'Childe - Tartaglia <br>Independence Day 2021');
addDrawing('thanatos.jpg', 'Thanatos <br>Hades');
addDrawing('zagreus.jpg', 'Zagreus <br>Hades');
addDrawing('kazuhabday.jpg', 'Kazuhas Birthday <br>Genshin Impact');
addDrawing('tomo.jpg', 'Kazuhas Friend <br>Genshin Impact');
addDrawing('winterxiao.jpg', 'Winter Xiao - Otome AU <br>Genshin Impact');
addDrawing('genshincomic.jpg', 'My Old Genshin Team <br>Genshin Impact');

addDrawing('celestial.jpg', 'Celestial Dragon OC');
addDrawing('hollydragon.jpg', 'Holly Christmas Dragon');


addDrawing('rayphone.jpg', 'Ray on the Phone <br>Mystic Messenger');

addDrawing('belpher.jpg', 'Belphegor Underwater <br>Obey Me');
addDrawing('leviathan.jpg', 'Leviathan <br>Obey Me');

addDrawing('gesaeran.jpg', 'Saeran Portrait <br>Mystic Messenger');
addDrawing('kofi.jpg', 'Saeran Drinking Ko-fi :3 <br>Mystic Messenger');
addDrawing('sxm.jpg', 'Saeran x Me Portrait <br>Mystic Messenger');
addDrawing('mxs.jpg', 'Saeran x MC <br>Mystic Messenger');


addDrawing('chongyunsketch.jpg', 'Drummer Chongyun WIP <br>Genshin Impact');

addDrawing('6challenge.jpg', '6 Characters Challenge');

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
    const el = `
        <div class="drawing-item" >
            <img src="images/drawings/${image}" onClick="showDrawing('${image}')" oncontextmenu="return false;" loading="lazy" alt="${title}" />
            <div class="drawing-title">${title}</div>
        </div>
    `;
    categoryEl ? (categoryEl.innerHTML+= el) : null;
}


