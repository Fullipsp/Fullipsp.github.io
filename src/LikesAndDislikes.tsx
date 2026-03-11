import style from "./LikesAndDislikes.module.css";
import {  For, Show } from "solid-js";
import { useCurrentPage } from "./currentPage";

const likes = [
    "Boba Tea🧋",
    "Collecting Merch🎀",
    "Danmei Books📖",
    "Enamel Pins🪷",
    "Nendoroids✨",
    "Photography 📸",
    "Fictional Guys🔥",
    "Money (˵ ¬ᴗ¬˵)💵",
    "Anime Figures",
    "Video Games",
    "Gacha Games",
    "Devotion, Romance",
    "Loyalty & Honesty",
    "Fanfictions (AO3)",
    "Being Organized",
    "Watching Anime",
    "Watching YouTube",
    "Exploring Pretty places",
    "Tofu Katsu Curry",
    "Margherita Pizza",
    "Selling Old Things",
]

const dislikes = [
    "Generative AI👎",
    "Dishonest People ❌",
    "Non Vegetarian Food",
    "Pineapples & Pickles",
    "Alcohol / Smoking",
    "Wearing Makeup",
    "Nerdy/Technical Convos",
    "Loud Chewing / Eating",
    "Alcohol / Smoking",
    "Unrealistic Headcanons"
    
]



export const LikesAndDislikes = () => {
    const currentPage = useCurrentPage();
    const isAboutPage = () => currentPage()?.name === "About Me"


    return <Show when={isAboutPage()}>
        <div class={style.outerContainer}>
            <Container icon="/icons/likes.gif" title="Likes" items={likes} />
            <Container icon="/icons/dislikes.gif" title="Dislikes" items={dislikes} />
        </div>
    </Show>
};


const Container = (props: { icon: string; title: string; items: string[] }) => {
    return <div class={style.container}>
        <div class={style.title}><img src={props.icon} />{props.title}</div>
        <For each={props.items}>{(item) => <div class={style.item}><img src="/icons/arrow.webp" />{item}</div>}</For>
    </div>;
}