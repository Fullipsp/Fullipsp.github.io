import { A, useMatch } from "@solidjs/router";
import style from "./App.module.css";
import { Banner } from "./Banner";
import { Icon } from "./Icon";
import { Sidebar } from "./Sidebar";
import { createEffect, createMemo, onMount, Show } from "solid-js";
import AboutMeContent from "./content/AboutMe";
import { convertAniBinaryToCSS } from "ani-cursor";
import { useCurrentPage } from "./currentPage";

const favicons = [
  "favicon.ico",
  "favicon1.ico",
  "favicon2.ico",
  "favicon3.ico",
];
let index = Math.floor(Math.random() * favicons.length);

function randomizeFavicon() {
  const favicon = favicons[index];
  var link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
  if (!link) {
    link = document.createElement("link");
    link.rel = "icon";
    document.head.appendChild(link);
  }
  link.href = "/" + favicon;

  if (index >= favicons.length - 1) {
    index = 0;
    return;
  }
  index++;
}

randomizeFavicon();
setInterval(() => {
  randomizeFavicon();
}, 2000);

let cursorCache: Record<string, Uint8Array> = {};
async function applyCursor(selector: string, aniUrl: string) {
  const getData = async () => {
    if (cursorCache[aniUrl]) {
      return cursorCache[aniUrl];
    }
    const response = await fetch(aniUrl);
    const data = new Uint8Array(await response.arrayBuffer());
    cursorCache[aniUrl] = data;
    return data;
  };

  const data = await getData();

  const style = document.createElement("style");
  style.innerText = convertAniBinaryToCSS(selector, data);

  document.head.appendChild(style);
}

function App() {
  onMount(async () => {
    await applyCursor("body", "/cursors/Normal.ani");
    await applyCursor("a, .avatar, button", "/cursors/Link.ani");
  });
  return (
    <div class={style.container}>
      <Banner />
      <div class={style.contentContainer}>
        <Sidebar />
        <Content />
      </div>
      <div class={style.copyright}>
        2020-2026 Copyright of all art in "Drawings" & photos under "Owned".
      </div>
    </div>
  );
}

const TabItem = (props: {
  icon: string;
  href: string;
  label: string;
  size?: number;
}) => {
  return (
    <A
      href={props.href}
      noScroll
      end
      activeClass={style.selected}
      class={style.tabItem}
    >
      <div class={style.iconContainer}>
        <Show when={!props.icon.startsWith("/")}>
          <Icon class={style.icon}>{props.icon}</Icon>
        </Show>
        <Show when={props.icon.startsWith("/")}>
          <img
            class={style.icon}
            style={props.size ? { height: props.size + "px" } : undefined}
            src={props.icon}
          />
        </Show>
      </div>
      {props.label}
    </A>
  );
};

const Content = () => {
  const currentPage = useCurrentPage();

  createEffect(() => {
    document.title = "Fullipsp ~ " + currentPage()?.name;
  });

  return (
    <div class={style.mainContentContainer}>
      <div class={style.tabs} id="tab">
        <TabItem href="/" icon="/icons/bunny-screen.webp" label="About Me" />
        <TabItem href="/drawings" icon="/icons/art.webp" label="My Drawings" />
        <TabItem
          href="/pins"
          icon="/icons/pin.webp"
          label="My Pin Collection"
        />
        <TabItem
          href="/sale"
          icon="/icons/sale.webp"
          label="For Sale & Trade"
        />
        <TabItem
          href="/figures"
          icon="/icons/fig.webp"
          label="My Figures & Dolls"
        />
        <TabItem
          href="/pin-displays"
          icon="/icons/wings-folder.webp"
          label="Pin Displays"
        />
        <TabItem
          href="/favorite-characters"
          icon="/icons/wings-folder.webp"
          label="Fave characters"
        />
      </div>
      <div class={style.contentInnerContainer}>
        {currentPage()?.component()}
      </div>
    </div>
  );
};

export default App;
