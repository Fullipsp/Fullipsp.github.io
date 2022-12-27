
const header = `
    <link rel="stylesheet" href="./css/header.css">
    <header>
        <a href="./index.html" class="title">Fullipsp</a>
        <div class="links">
            <a class="link" href="./"> <span class="material-icons">house</span> Home</a>
            <a class="link" href="./drawings.html"> <span class="material-icons">draw</span> My Drawings</a>
            <a class="link" href="./pins.html"> <span class="material-icons">collections</span> My Pins</a>
            <a class="link" href="./figures.html"> <span class="material-icons">settings_accessibility</span> My Figures</a>
        </div>
    </header>
`;

document.querySelector("header").outerHTML = header;


const footer = `
    <link rel="stylesheet" href="./css/footer.css">
    <footer>
        ©️ 2020-${new Date().getFullYear()} Copyright of the photography under "Owned" & all art
    </footer>
`;

document.querySelector("footer").outerHTML = footer;


document.querySelectorAll("a").forEach(aEl => {
    let linkHref = aEl.getAttribute("href");
    linkHref = linkHref.substring(1, linkHref.length);
    if (linkHref === window.location.pathname) {
        aEl.classList.add("active");
    }
})