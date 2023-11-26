// cSpell:disable
let categoryIndex = 0;

addCategory("For Sale! - DM me if interested! (Discord: hualian.exe)")

.addPin('inlink.webp', 'BOTW Link x2 <br>LE50 by Ins***Pins.', "For-Sale")
.addPin('Clefairy.webp', 'Clefairy Tamagotchi <br>by Arcade Healer', "For-Sale")
.addPin('FS.jpg', 'Hualian Window <br>by SerenaDanmeiPins', "For-Sale")
.addPin('fiveitto.webp', 'Itto <br>by Fiveonthe', "For-Sale")
.addPin('fivethoma.webp', 'Thoma <br>by Fiveonthe', "For-Sale")
.addPin('lunalbedo.webp', 'Kitty Albedo <br>by angryeggmerch', "For-Sale")
.addPin('chibichilde.webp', 'Chibi Childe <br>by AkuoArt', "For-Sale")
.addPin('childechibiprofile.webp', 'Chibi Childe Bust <br>by AkuoArt', "For-Sale")
.addPin('xiaochibiprofile.webp', 'Chibi Xiao <br>by AkuoArt', "For-Sale")
.addPin('albedochibiprofile.webp', 'Chibi Albedo <br>by AkuoArt', "For-Sale")
.addPin('zhonglichibiprofile.webp', 'Chibi Zhongli <br>by AkuoArt', "For-Sale") 
.addPin('luminechibiprofile.webp', 'Chibi Lumine <br>by AkuoArt', "For-Sale")
.addPin('lumine.webp', 'Lumine <br>by Sugar Cubed Studios', "For-Sale")
.addPin('childebby.webp', 'Childe (Tartaglia) <br>by Sugar Cubed Studios', "For-Sale")
.addPin('promise.webp', 'Snezhnayan Promise <br>by Hollichoo', "For-Sale")
.addPin('WitchKitty.webp', 'Pastel Kitty Witch Mascot', "For-Sale")
.addPin('VioletEvergarden.webp', 'Violet x Gilbert Pin <br>(Nostalgia Couples KS)', "For-Sale")
.addPin('lenpaimon.webp', 'Paimon <br>by Lenacchi', "For-Sale")
.addPin('anemo.webp', 'Anemoculus (GLOWS) <br>by Theartthatran', "For-Sale")
.addPin('bunnywitch.jpg', 'Snow Bunny Witch <br>by Mamobot', "For-Sale")

// ------------------------------------------------------------------------------------------------



function closePin() {
    const el = document.getElementById("preview");
    el.firstChild.remove();
    el.style.display = "none";

}

function showPin(imageName) {
    const el = document.getElementById("preview");
    el.setAttribute("onClick", "closePin()");
    el.setAttribute("oncontextmenu", "return false;");
    el.style.display = "flex";
    const img = new Image();
    img.src = `images/pins/${imageName}`;
    el.append(img);
}


function statusToIconName(status) {
    if (status === "waiting") return 'schedule';
    if (status === "owned") return 'done';
    if (status === "for-sale") return 'shopping_cart';
    if (status === "ordered") return 'shopping_bag';
    if (status === "sold") return 'monetization_on';
}


function addGap() {
    const contentEl = document.querySelector(".content");
    
    const gapEl = document.createElement("div");
    gapEl.style.height = "6px";
    gapEl.style.margin = "50px";
    
    gapEl.style.borderRadius = "6px";
    gapEl.style.background = "var(--primary-color)";


    contentEl.append(gapEl);
}

function addCategory(title, url) {
    categoryIndex++;
    let currentIndex = categoryIndex;

    const contentEl = document.querySelector(".content");
    
    const categoryTagType = url ? 'a': 'div';
    
    const categoryTitleEl = `<${categoryTagType} class="category-title" href="${url}" target="_blank" rel="noopener noreferrer">${title}</${categoryTagType}>`;
    contentEl.innerHTML+=(categoryTitleEl);

    const categoryEl = document.createElement("div");
    categoryEl.id = `category-${currentIndex}`
    categoryEl.classList.add("category");
    contentEl.append(categoryEl);

    this.addPin = (pinImage, pinTitle, pinStatus) => {
        const iconName = () => {
            const lowercasePin = pinStatus.toLowerCase();
            return statusToIconName(lowercasePin);
        }
        const status = () => {
            if (pinStatus.toLowerCase() === "for-sale") {
                return "For Sale"
            }
            return pinStatus;
        }

        const el = `
            <div class="pin-item">
                <img oncontextmenu="return false;" onClick="showPin('${pinImage}')" src="images/pins/${pinImage}" loading="lazy" alt="${pinTitle}" />
                <div class="pin-title">${pinTitle}</div>
                <div class="status ${pinStatus.toLowerCase()}"><span class="material-icons">${iconName()}</span>${status()}</div>
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

    this.addPin = (title, url, pinImage, pinTitle, pinStatus) => {
        const iconName = () => {
            const lowercasePin = pinStatus.toLowerCase();
            return statusToIconName(lowercasePin);
        }
        const status = () => {
            if (pinStatus.toLowerCase() === "for-sale") {
                return "For Sale"
            }
            return pinStatus;
        }

        const el = `
            <div class="pin-outer">
                <a class="category-title" href="${url}" target="_blank" rel="noopener noreferrer">${title}</a>
                <div class="pin-item">
                    <img oncontextmenu="return false;" onClick="showPin('${pinImage}')" src="images/pins/${pinImage}" loading="lazy" alt="${pinTitle}" />
                    <div class="pin-title">${pinTitle}</div>
                    <div class="status ${pinStatus.toLowerCase()}"><span class="material-icons">${iconName()}</span>${status()}</div>
              </div>
           </div>
        `;
        document.getElementById(categoryEl.id).innerHTML+= el;
        return this;
    }

    return this;
}


const categoryEl = document.querySelector(".pin-item");
const contentEl = document.querySelector(".content")


const moveTitle = () => {
    const categoryLeft = categoryEl.getBoundingClientRect().left;
    const contentLeft = contentEl.getBoundingClientRect().left;

    document.querySelectorAll(".category-title").forEach(el => {
        if (el.parentElement.classList.contains("pin-outer")) return;
        el.style.transform = `translate(${categoryLeft - contentLeft}px, 0)`;
    });
}

moveTitle();

window.addEventListener("resize", moveTitle)
