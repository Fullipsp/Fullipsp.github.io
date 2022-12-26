// cSpell:disable
let categoryIndex = 0;


addCategory("Demonic Cultivation Nendoroids")
.addFigure('wwx.jpg', 'Wei Wuxian DX', "Owned")
.addFigure('lwj.jpg', 'Lan Wangji DX', "Owned")
.addFigure('yllzwwx.jpg', 'YLLZ Wei Wuxian', "Owned")


addCategory("Genshin Impact Nendoroids")
.addFigure('aether.jpg', 'Aether', "Owned")
.addFigure('lumine.jpg', 'Lumine', "Owned")

addCategory("Demon Slayer Figures")
.addFigure('giyu.jpg', 'Tomioka Giyu', "Owned")
.addFigure('rengoku.jpg', 'Rengoku Kyojuro', "Owned")
.addFigure('uzui.jpg', 'Uzui Tengen', "Pre-Ordered")
.addFigure('muichiro.jpg', 'Chokonose Muichiro', "Owned")
.addFigure('giyuchoko.jpg', 'Chokonose Giyu T.', "Owned")



function closeFigure() {
    const el = document.getElementById("preview");
    el.firstChild.remove();
    el.style.display = "none";

}

function showFigure(imageName) {
    const el = document.getElementById("preview");
    el.setAttribute("onClick", "closeFigure()");
    el.setAttribute("oncontextmenu", "return false;");
    el.style.display = "flex";
    const img = new Image();
    img.src = `images/figures/${imageName}`;
    el.append(img);
}


function addCategory(title, url) {
    categoryIndex++;
    let currentIndex = categoryIndex;

    const contentEl = document.querySelector(".content");

    const categoryTitleEl = `<a class="category-title" href="${url}" target="_blank" rel="noopener noreferrer">${title}</a>`;
    contentEl.innerHTML+=(categoryTitleEl);

    const categoryEl = document.createElement("div");
    categoryEl.id = `category-${currentIndex}`
    categoryEl.classList.add("category");
    contentEl.append(categoryEl);

    this.addFigure = (figureImage, figureTitle, figureStatus) => {
        const iconName = () => {
            const lowercaseFigure = figureStatus.toLowerCase();
            if (lowercaseFigure === "waiting") return 'schedule';
            if (lowercaseFigure === "owned") return 'done';
            if (lowercaseFigure === "shipped") return 'local_shipfigureg';
            if (lowercaseFigure === "pre-ordered") return 'shopfigureg_bag';
            if (lowercaseFigure === "sold") return 'monetization_on';
        }

        const el = `
            <div class="figure-item">
                <img oncontextmenu="return false;" onClick="showFigure('${figureImage}')" src="images/figures/${figureImage}" loading="lazy" alt="${figureTitle}" />
                <div class="figure-title">${figureTitle}</div>
                <div class="status ${figureStatus.toLowerCase()}"><span class="material-icons">${iconName()}</span>${figureStatus}</div>
            </div>
        `;
        document.getElementById(categoryEl.id).innerHTML+= el;
        return this;
    }

    return this;
}
function addInlineCategory() {
    categoryIndex++;
    let currentIndex = categoryIndex;

    const contentEl = document.querySelector(".content");


    const categoryEl = document.createElement("div");
    categoryEl.id = `category-${currentIndex}`
    categoryEl.classList.add("category", "inline");
    contentEl.append(categoryEl);

    this.addFigure = (title, url, figureImage, figureTitle, figureStatus) => {
        const iconName = () => {
            const lowercaseFigure = figureStatus.toLowerCase();
            if (lowercaseFigure === "waiting") return 'schedule';
            if (lowercaseFigure === "owned") return 'done';
            if (lowercaseFigure === "shipped") return 'local_shipfigureg';
            if (lowercaseFigure === "pre-ordered") return 'shopfigureg_bag';
            if (lowercaseFigure === "sold") return 'monetization_on';
        }

        const el = `
            <div class="figure-outer">
                <a class="category-title" href="${url}" target="_blank" rel="noopener noreferrer">${title}</a>
                <div class="figure-item">
                    <img oncontextmenu="return false;" onClick="showFigure('${figureImage}')" src="images/figures/${figureImage}" loading="lazy" alt="${figureTitle}" />
                    <div class="figure-title">${figureTitle}</div>
                    <div class="status ${figureStatus.toLowerCase()}"><span class="material-icons">${iconName()}</span>${figureStatus}</div>
              </div>
           </div>
        `;
        document.getElementById(categoryEl.id).innerHTML+= el;
        return this;
    }

    return this;
}


const categoryEl = document.querySelector(".figure-item");
const contentEl = document.querySelector(".content")


const moveTitle = () => {
    const categoryLeft = categoryEl.getBoundingClientRect().left;
    const contentLeft = contentEl.getBoundingClientRect().left;

    document.querySelectorAll(".category-title").forEach(el => {
        if (el.parentElement.classList.contains("figure-outer")) return;
        el.style.transform = `translate(${categoryLeft - contentLeft}px, 0)`;
    });
}

moveTitle();

window.addEventListener("resize", moveTitle)
