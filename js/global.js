// Load header
const header = `
    <link rel="stylesheet" href="./css/header.css">
    <header>
        <a href="./index.html" class="title">Fullipsp</a>
        <div class="links">
            <a class="link" href="./drawings.html"> <span class="material-icons">draw</span> My Drawings</a>
            <a class="link" href="./pins.html"> <span class="material-icons">collections</span> My Pin Collection</a>
        </div>
    </header>
`;

document.querySelector("header").outerHTML = header;


document.querySelectorAll("a").forEach(aEl => {
    let linkHref = aEl.getAttribute("href");
    linkHref = linkHref.substring(1, linkHref.length);
    if (linkHref === window.location.pathname) {
        aEl.classList.add("active");
    }
})