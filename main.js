categories = 0;








addCategory("ArcadeHealer", "https://arcadehealer.carrd.co")

addPin('kirby.jpg', 'Star Wand Kirby ⭐️', "Owned")
addPin('sakura.jpg', 'Sakura Kirby Public Variant 🌸', "Owned")

addCategory("Birduyen", "https://birduyen.com")

addPin('mouse.jpg', 'Spring Mouse ☼ Flora Series', "Owned")
addPin('birb.jpg', 'Spring Tit ☼ Flora Series', "Owned")
addPin('bunbun.jpg', 'Spring Bunny ☼ Flora Series', "Owned")
addPin('lily kitty.jpg', 'Lily ❀ Studio Ghibli Enamel Pin Series ', "Owned")
addPin('wooloo.jpg', 'Wooloo ♡ Pokemon Series', "Owned")
addPin('sylveon.jpg', 'Sylveon ♡ Pokemon Series', "Owned")
addPin('eevee.jpg', 'Eevee ♡ Pokemon Series', "Owned")

addCategory('Blushsprout', "https://blushsprout.carrd.co")

addPin('lionm.jpg', 'Lion Meringue Pie ☆ Rainbow Food Animals Series', "Owned")
addPin('raspbunny.jpg', 'Raspbunny Crepe ☆ Rainbow Food Animals Series', "Owned")
addPin('fawnfetti.jpg', 'Fawnfetti ☆ Rainbow Food Animals Series', "Owned")
addPin('sloth baby.jpg', 'Cute Sloth ☆ Floranimals Series <br>(Seconds Pin)', "Owned")
addPin('night.jpg', 'Froggie ITA (Nighttime) Bag (Kickstarter) (Peach and Holo inserts)', "Pre-ordered")
addPin('froggie pin bag.jpg', 'Froggie Bag Freebie Frog (Kickstarter)', "Pre-ordered")
addPin('daffodil.jpg', 'Daffodil Duckling Floranimals Series', "Pre-ordered")
addPin('kitten.jpg', 'Cherry Blossom Spring Kitten Mini Pin', "Pre-ordered")

addCategory('Goldfishkang', "https://goldfishkang.com")

addPin('laundrocat.jpg', 'Laundrocats Pin: Dawn ☆', "Owned")
addPin('teatime.jpg', 'Reynard Manor Pin: Luna the Bookworm ♡', "Owned")
addPin('adventurer.jpg', 'Little Adventurer ❀', "Owned")
addPin('fox.jpg', 'Artsy Fox: Cloud Painter☆', "Owned")

addCategory('Mamobot', "https://linktr.ee/mamobot")

addPin('supers.png', 'Super Sailor Moon (Fashion Scouts) x2', "Shipped")
addPin('cosmos.png', 'Sailor Moon Cosmos (Fashion Scouts) x2', "Shipped")
addPin('serenity.png', 'Princess Serenity V3 (Fashion Scouts) x2', "Shipped")
addPin('mage.jpg', 'White Mage RPG Series (September 2020 Pin Club)', "Pre-ordered")
addPin('knight.jpg', 'Prestige Knight RPG Series (September 2020 Pin Club)', "Pre-ordered")
addPin('sailorv.jpg', 'Sailor Moon V (Miracle Mirrors)', "Pre-ordered")
addPin('wicked.jpg', 'Wicked Lady (Miracle Mirrors)', "Pre-ordered")
addPin('peach.jpg', 'Peach Biker (Nintendolls V2)', "Waiting")
addPin('rosalina.jpg', 'Rosalina Biker (Nintendolls V2)', "Waiting")
addPin('samus.jpg', 'Samus After Battle (Nintendolls V2)', "Waiting")
addPin('zelda.jpg', 'Zelda (Nintendolls V2)', "Waiting")


addCategory('', "")
addInlinePin('mybuns.png', 'Two bunnies (Luna & Bianca)', "Shipped", "Lilycli (UpbeatPals)", "https://lilycli.com")
addInlinePin('birthday bun.png', 'Sprinkle Birthday Bunny', "Shipped", "Sharodactylart", "https://sharodactylart.com")
addInlinePin('weishi.jpg', 'Lilys Hanami (September 2020 Pin Club)', "Pre-ordered", "Weishi", "https://linktr.ee/weishi_art")

addCategory('Xhilyn', "https://xhilyn.carrd.co")

addPin('witch.jpg', 'Pastel Kitty Witch Mascot', "Shipped")
addPin('cinamorroll.jpg', 'Cinnamoroll Sprinkle Bunny', "Shipped")
addPin('star.jpg', 'Star Bunny Witch', "Shipped")
addPin('aurorac.jpg', 'Aurora Borealis Cutie (Limited Edition)', "Shipped")













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
