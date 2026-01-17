// cSpell:disable
const categoryEl = document.querySelector(".category");

addDrawing('hualianp.webp', 'Hualian Portrait <br>TGCF 2023');
addDrawing('AxL.webp', 'Arwin & Latte Portrait <br>Miss Not So Sidekick 2022');
addDrawing('freakynoir.webp', 'Cl4w N0ir Fanart <br>2024');
addDrawing('emofurry.webp', 'Fluffy Femboye <br>2025');
addDrawing('kofi.webp', 'Saeran Drinking Ko-fi :3 <br>Mystic Messenger');

addDrawing('gorouarcher.webp', 'Gorou Bow Practice <br>Genshin Impact');
addDrawing('catxiao.webp', 'Catboy Xiao <br>Genshin Impact');
addDrawing('tomo.webp', 'Kazuhas Friend <br>Genshin Impact');
addDrawing('kazuhabday.webp', 'Kazuhas Birthday <br>Genshin Impact');
addDrawing('childe.webp', 'Childe - Tartaglia <br>Independence Day 2021');

addDrawing('winterxiao.webp', 'Winter Xiao - Otome AU <br>Genshin Impact');
addDrawing('celestial.webp', 'Celestial Dragon OC  <br>Art Trade');
addDrawing('belpher.webp', 'Belphegor Underwater <br>Obey Me');
addDrawing('chongyunsketch.webp', 'Drummer Chongyun WIP <br>Genshin Impact');
addDrawing('rayphone.webp', 'Ray on the Phone <br>Mystic Messenger');

addDrawing('bobaqueens.webp', 'Boba Queens BDay <br>2025');
addDrawing('to postie.webp', 'MXTX Best Boy Trio <br>MXTX 2024');
addDrawing('uzui.webp', 'Uzui Birthday Party <br>Demon Slayer');
addDrawing('hollydragon.webp', 'Holly Christmas Dragon <br>Bday Gift');
addDrawing('catnoir.webp', 'Cat Noir <br>Miraculous Ladybug');


addDrawing('thanatos.webp', 'Thanatos <br>Hades');
addDrawing('zagreus.webp', 'Zagreus <br>Hades');
addDrawing('leviathan.webp', 'Leviathan <br>Obey Me');
addDrawing('gesaeran.webp', 'Saeran Portrait <br>Mystic Messenger');
addDrawing('sxm.webp', 'Saeran x Me Portrait <br>Mystic Messenger');
addDrawing('mxs.webp', 'Saeran x MC <br>Mystic Messenger');
addDrawing('astarionchibi.webp', 'Astarion x Arsene Chibi <br>BaldursGate3');
addDrawing('myocsketch.webp', 'Arsene Sketch BG3 <br>BaldursGate3');
addDrawing('genshincomic.webp', 'My Old Genshin Team <br>Genshin Impact');
addDrawing('6challenge.webp', '6 Characters Challenge <br>Multifandom');

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







