import {  Show } from "solid-js";
import { Icon } from "./Icon";
import style from "./Sidebar.module.css";
import { useTheme } from "./theme";
import { LikesAndDislikes } from "./LikesAndDislikes";
import { useCurrentPage } from "./currentPage";




export const Sidebar = () => {
  const currentPage = useCurrentPage();
  
  const isAboutPage = () => currentPage()?.name === "About Me"


  return (
    <div class={style.container}>
      <Avatar />
      <div class={style.username}>Fullipsp</div>
      <Roles />
      <img class={style.divider} src="/icons/divider.gif" />
      <Socials />
      <img class={style.divider} src="/icons/divider.gif" />

      <div class={style.description}>
        <p>
          <strong>Taurus | INTJ-T | 5w4 | Fujoshi <br />˚ʚ♡ɞ˚</strong><br />
          I'm a Polish artist & collector in love with danmei. ･ﾟ✧ Currently obsessed with Erha

        </p>
        <Show when={isAboutPage()}>
          <p >
            You can find me on my socials above, and more fun facts about me below! (´• ω •`)
            <span class={style.heart}>ꨄ</span>
          </p>
        </Show>
             <Show when={!isAboutPage()}>
          <p >
            You can find me on my socials above, and my {currentPage()?.name.toLowerCase()} on this page!
          </p>
        </Show>
      </div>

      {/* <img class={style.sidebarImage} src="/banner.webp" /> */}
      <LikesAndDislikes />

      <div class={style.copyright}>
        2020-2026 Copyright of all art in "Drawings" & photos under "Owned".
      </div>
    </div>
  );
};

export const Avatar = () => {
  const { toggleTheme, theme } = useTheme();
  return (
    <div class={`${style.avatarContainer} avatar`} onClick={toggleTheme}>
      <img fetchpriority="high" src="/avatar.webp" alt="Avatar" />
      <div class={style.baseSun} classList={{ [style.dark]: theme() === "dark" }}>
        <div class={style.moon}>

        </div>
        <div class={style.sun}>
        </div>
      </div>
    </div>
  );
};

const Roles = () => {
  return (
    <div class={style.roles}>
      <RoleItem title="Otaku" icon="/icons/collector.webp" />
      <RoleItem title="Seller" icon="/icons/seller.webp" />
      <RoleItem title="Artist" icon="/icons/paint-brush1.webp" />
      <RoleItem title="Gamer" icon="/icons/gamepad.webp" size={20} />
    </div>
  );
};

const RoleItem = (props: { title: string; icon: string; size?: number }) => {
  return (
    <div class={style.role}>
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
      <div class={style.title}>{props.title}</div>
    </div>
  );
};

const Socials = () => {
  return (
    <div class={style.socialsOuter}>
      <div class={style.socialsTitle}>Socials</div>
      <div class={style.socials}>
        <SocialItem
          title="Buy Me A Kofi"
          icon="/social-media-icons/kofi.svg"
          href="https://ko-fi.com/fullipsp"
        />
        <SocialItem
          title="Instagram"
          icon="/social-media-icons/instagram.svg"
          href="https://www.instagram.com/fullipsp"
        />
        <SocialItem
          title="Reddit"
          icon="/social-media-icons/reddit.png"
          href="https://www.reddit.com/user/Ryzuakii"
        />
        <SocialItem
          title="My Anime List"
          icon="/social-media-icons/myanimelist.png"
          href="https://myanimelist.net/profile/Fullipsp"
        />
        <SocialItem
          title="My Figure Collection"
          icon="/social-media-icons/myfigurecollection.svg"
          href="https://myfigurecollection.net/profile/Fullipsp"
        />
        <SocialItem
          title="Twitter"
          icon="/social-media-icons/twitter.svg"
          href="https://twitter.com/fullipsp"
        />
        <SocialItem
          title="DeviantArt"
          icon="/social-media-icons/deviantart.svg"
          href="https://www.deviantart.com/fullipsp"
        />


        <SocialItem
          title="Steam"
          icon="/social-media-icons/steam.svg"
          href="https://steamcommunity.com/id/fullipsp"
        />
      </div>
    </div>
  );
};

const SocialItem = (props: { title: string; icon: string; href: string }) => {
  return (
    <a class={style.social} href={props.href} target="_blank" rel="noreferrer">
      <img class={style.icon} src={props.icon} alt={props.title} />
    </a>
  );
};
