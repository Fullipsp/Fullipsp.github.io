categories = 0;








addCategory("ArcadeHealer", "https://arcadehealer.carrd.co")

addPin('OGKirby.jpg', 'Star Wand Kirby ⭐️', "Owned")
addPin('SakuraKirby.jpg', 'Sakura Kirby Public Variant 🌸', "Owned")

addCategory("Birduyen", "https://birduyen.com")

addPin('Mousie.jpg', 'Spring Mouse ☼ Flora Series', "Owned")
addPin('Birb.jpg', 'Spring Tit ☼ Flora Series', "Owned")
addPin('LavenderBun.jpg', 'Spring Bunny ☼ Flora Series', "Owned")
addPin('Lily.jpg', 'Lily ❀ Studio Ghibli Enamel Pin Series ', "Owned")
addPin('wooloo.jpg', 'Wooloo ♡ Pokemon Series', "Owned")
addPin('sylveon.jpg', 'Sylveon ♡ Pokemon Series', "Owned")
addPin('eevee.jpg', 'Eevee ♡ Pokemon Series', "Owned")

addCategory('Blushsprout', "https://blushsprout.carrd.co")

addPin('lionm.jpg', 'Lion Meringue Pie ☆ Rainbow Food Animals Series', "Owned")
addPin('raspbunny.jpg', 'Raspbunny Crepe ☆ Rainbow Food Animals Series', "Owned")
addPin('Fawnfetti.jpg', 'Fawnfetti ☆ Rainbow Food Animals Series', "Owned")
addPin('Sloth.jpg', 'Cute Sloth ☆ Floranimals Series <br>(Seconds)', "Owned")
addPin('night.jpg', 'Froggie ITA (Nighttime) Bag (Kickstarter) (Peach and Holo inserts)', "Pre-ordered")
addPin('froggie pin bag.jpg', 'Froggie Bag Freebie Frog (Kickstarter)', "Pre-ordered")
addPin('witchfroggie.jpg', 'Witch Froggie (October 2020 Pin Club)', "Pre-ordered")
addPin('daffodil.jpg', 'Daffodil Duckling Floranimals Series', "Pre-ordered")
addPin('kitten.jpg', 'Cherry Blossom Spring Kitten Mini Pin', "Pre-ordered")

addCategory('Goldfishkang', "https://goldfishkang.com")

addPin('LaundroCat.jpg', 'Laundrocats Pin: Dawn ☆', "Owned")
addPin('Teacup.jpg', 'Reynard Manor Pin: Luna the Bookworm ♡', "Owned")
addPin('Adventurer.jpg', 'Little Adventurer ❀', "Owned")
addPin('PainterFox.jpg', 'Artsy Fox: Cloud Painter☆', "Owned")

addCategory('Mamobot', "https://linktr.ee/mamobot")

addPin('SSailor.jpg', 'Super Sailor Moon (Fashion Scouts) x2', "Owned")
addPin('SCosmos.jpg', 'Sailor Moon Cosmos (Fashion Scouts) x2', "Owned")
addPin('SSerenity.jpg', 'Princess Serenity V3 (Fashion Scouts) x2', "Owned")
addPin('sailorv.jpg', 'Sailor Moon V (Miracle Mirrors)', "Shipped")
addPin('wicked.jpg', 'Wicked Lady (Miracle Mirrors)', "Shipped")
addPin('mage.jpg', 'White Mage RPG Series (September 2020 Pin Club)', "Shipped")
addPin('knight.jpg', 'Prestige Knight RPG Series (September 2020 Pin Club)', "Shipped")
addPin('zelda.jpg', 'Super Smash Bros. Zelda (Nintendolls V2)', "Shipped")
addPin('rosalina.jpg', 'Original Rosalina (Nintendolls V2)', "Shipped")
addPin('bikerrosa.jpg', 'Mario Kart (Biker) Rosalina (Nintendolls V2)', "Shipped")
addPin('bowsette.jpg', 'Racer Bowsette (Fashion Fandom October 2020 Pin Club)', "Shipped")
addPin('Wedding.jpg', 'Wedding Peach (Fashion Fandom November 2020 Pin Club)', "Pre-ordered")
addPin('helioschibiusa.jpg', 'Chibiusa and Helios (Sailor Moon Fashion Scouts V3 Preorder)', "Pre-ordered")
addPin('humanluna.jpg', 'Human Luna (Sailor Moon Fashion Scouts V3 Preorder)', "Pre-ordered")
addPin('witchwicked.jpg', 'Wicked Lady Witch (Sailor Moon Fashion Scouts V3 Preorder PATREON EXCLUSIVE)', "Pre-ordered")
addPin('smfamily.jpg', 'Luna, Artemis and Diana kitties (Sailor Moon Fashion Scouts V3 Preorder PATREON EXCLUSIVE)', "Pre-ordered")

addCategory('', "")
addInlinePin('MyBuns.jpg', 'Two bunnies (Luna & Bianca)', "Owned", "Lilycli (UpbeatPals)", "https://lilycli.com")
addInlinePin('BirthdayBun.jpg', 'Sprinkle Birthday Bunny', "Owned", "Sharodactylart", "https://sharodactylart.com")

addCategory('Weishi', "https://linktr.ee/weishi_art")

addPin('Weishi.jpg', 'Lily`s Hanami (September 2020 Pin Club)', "Owned")
addPin('WishingWell.jpg', 'Bunny`s Wishing Pond (August 2020 Pin Club) <br>(Seconds)', "Owned")
addPin('Isabelle.jpg', 'Animal Crossing: New Horizons Vacation Isabelle (Seconds)', "Owned")

addCategory('Xhilyn', "https://xhilyn.carrd.co")

addPin('WitchKitty.jpg', 'Pastel Kitty Witch Mascot', "Owned")
addPin('Cinamoroll.jpg', 'Cinnamoroll Sprinkle Bunny', "Owned")
addPin('StarBun.jpg', 'Star Bunny Witch', "Owned")
addPin('Aurora.jpg', 'Aurora Borealis Cutie (Limited Edition)', "Owned")













$("html").easeScroll({
    frameRate: 60,
    animationTime: 1000,
    stepSize: 120,
    pulseAlgorithm: 1,
    pulseScale: 8,
    pulseNormalize: 1,
    accelerationDelta: 20,
    accelerationMax: 1,
    keyboardSupport: true,
    arrowScroll: 50,
    touchpadSupport: true,
    fixedBackground: true
  });







function addCategory(name, link) {
    categories++;
    const pins = document.getElementById('pins');
    const catName = document.createElement("div"); 
    catName.classList.add("cat-name")
    const el = document.createElement("div"); 
    el.classList.add("pins-category")
    el.id = "c" + categories;
    catName.innerHTML =  `<a href="${link}" target="_blank" rel="noopener noreferrer">${name}</a>`
    pins.innerHTML += catName.outerHTML + el.outerHTML
}

function addPin(image, name, status) {
    const pins = document.getElementById("c" + categories);
    const el = document.createElement("div");
    el.classList.add("pin");
    if (status.toLowerCase() === "owned") {
        el.classList.add("owned")
    }
    if (status.toLowerCase() === "pre-ordered") {
        el.classList.add("preordered")
    }
    if (status.toLowerCase() === "waiting") {
        el.classList.add("waiting")
    }
    if (status.toLowerCase() === "shipped") {
        el.classList.add("shipped")
    }

    el.innerHTML = `
<img class="image" src="images/pins/${image}"/>
<div class="name">${name}</div>
<div class="status">${status}</div>
    
    `
    pins.innerHTML += el.outerHTML
}

function addInlinePin(image, name, status, catname, catlink) {
    const pins = document.getElementById("c" + categories);
    const el = document.createElement("div");
    const el2 = document.createElement("div");
    el.classList.add("pin");
    el2.classList.add("inline-pin");
    if (status.toLowerCase() === "owned") {
        el.classList.add("owned")
    }
    if (status.toLowerCase() === "pre-ordered") {
        el.classList.add("preordered")
    }
    if (status.toLowerCase() === "waiting") {
        el.classList.add("waiting")
    }
    if (status.toLowerCase() === "shipped") {
        el.classList.add("shipped")
    }
    
    el.innerHTML = `
    <img class="image" src="images/pins/${image}"/>
    <div class="name">${name}</div>
    <div class="status">${status}</div>
    
    `
    el2.innerHTML = `<a href="${catlink}" class="cat-name" target="_blank" rel="noopener noreferrer">${catname}</a>` + el.outerHTML

    pins.innerHTML += el2.outerHTML
}

document.getElementById("pins").addEventListener('click', event => {
    if(!event.target.closest(".image")) return;
    document.getElementById("popout").style.display = "flex"
    document.getElementById("popout-image").setAttribute("src", event.target.closest(".image").getAttribute("src"))
})

document.getElementById("popout").addEventListener("click", event => {
    if (!event.target.classList.contains("popout")) return;
    document.getElementById("popout").style.display = "none"

})
