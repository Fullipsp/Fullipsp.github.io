categories = 0;








addCategory("ArcadeHealer", "https://arcadehealer.carrd.co")

addPin('sakura.jpg', 'Sakura Kirby Public Variant 🌸', "Owned")
addPin('kirby.jpg', 'Star Wand Kirby ⭐️', "Owned")

addCategory("Birduyen", "https://birduyen.com")

addPin('mouse.jpg', 'Spring Mouse ☼ Flora Series', "Owned")
addPin('birb.jpg', 'Spring Tit ☼ Flora Series', "Owned")
addPin('bunbun.jpg', 'Spring Bunny ☼ Flora Series', "Owned")
addPin('lily kitty.jpg', 'Lily ❀ Studio Ghibli Enamel Pin Series ', "Owned")
addPin('wooloo.jpg', 'Wooloo ♡ Pokemon Series', "Owned")
addPin('sylveon.jpg', 'Sylveon ♡ Pokemon Series', "Owned")
addPin('eevee.jpg', 'Eevee ♡ Pokemon Series', "Owned")

addCategory('Blushsprout', "https://blushsprout.carrd.co")

addPin('lion.jpg', 'Lion Meringue Pie ☆ Rainbow Food Animals Series', "Owned")
addPin('raspbunny.jpg', 'Raspbunny Crepe ☆ Rainbow Food Animals Series', "Owned")
addPin('fawnfetti.jpg', 'Fawnfetti ☆ Rainbow Food Animals Series', "Owned")
addPin('sloth baby.jpg', 'Cute Sloth ☆ Floranimals Series <br>(Seconds Pin)', "Owned")
addPin('froggies.jpg', 'Ice Cream Froggies (Patreon)', "Pre-ordered")
addPin('froggie bag.jpg', 'Froggie ITA Bag (Kickstarter)', "Pre-ordered")
addPin('froggie pin bag.jpg', 'Froggie Bag Freebie Frog (Kickstarter)', "Pre-ordered")
addPin('gator.jpg', 'Froggie Bag Pond Pals Gator (Kickstarter)', "Pre-ordered")
addPin('duckies.jpg', 'Daffodil Duck and Duckling Floranimals Series', "Considering")
addPin('kitten.jpg', 'Cherry Blossom Spring Kitten Mini Pin', "Considering")


addCategory('Goldfishkang', "https://goldfishkang.com")

addPin('adventurer.jpg', 'Little Adventurer ❀', "Owned")
addPin('teatime.jpg', 'Reynard Manor Pin: Luna the Bookworm ♡', "Owned")
addPin('fox.jpg', 'Artsy Fox: Cloud Painter☆', "Owned")
addPin('laundrocat.jpg', 'Laundrocats Pin: Dawn ☆', "Owned")
addPin('spooky.jpg', 'Spooky Teatime Set (Waiting)', "Considering")

addCategory('Mamobot', "https://linktr.ee/mamobot")

addPin('mage.jpg', 'White Mage RPG Series (Patreon)', "Pre-ordered")
addPin('knight.jpg', 'Prestige Knight RPG Series (Patreon)', "Pre-ordered")
addPin('wicked.jpg', 'Wicked Lady (Miracle Mirrors)', "Pre-ordered")
addPin('sailorv.jpg', 'Sailor Moon V (Miracle Mirrors)', "Pre-ordered")

addCategory('', "")
addInlinePin('mybuns.png', 'Two bunnies (Luna & Bianca)', "Ordered", "Lilycli (UpbeatPals)", "https://lilycli.com")
addInlinePin('birthday bun.png', 'Sprinkle Birthday Bunny', "Ordered", "Sharodactylart", "https://sharodactylart.com")
addInlinePin('weishi.jpg', 'Lilys Hanami (September 2020 Pin Club)', "Pre-ordered", "Weishi", "https://linktr.ee/weishi_art")

addCategory('Xhilyn', "https://xhilyn.carrd.co")

addPin('witch.jpg', 'Pastel Kitty Witch Mascot', "Ordered")
addPin('cinamorroll.jpg', 'Cinnamoroll Sprinkle Bunny', "Ordered")
addPin('star.jpg', 'Star Bunny Witch', "Ordered")













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
    if (status.toLowerCase() === "considering") {
        el.classList.add("considering")
    }
    if (status.toLowerCase() === "ordered") {
        el.classList.add("ordered")
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
    if (status.toLowerCase() === "considering") {
        el.classList.add("considering")
    }
    if (status.toLowerCase() === "ordered") {
        el.classList.add("ordered")
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
