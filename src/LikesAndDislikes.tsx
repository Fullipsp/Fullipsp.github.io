import { useMatch } from "@solidjs/router";
import style from "./LikesAndDislikes.module.css";
import { createEffect, createMemo, For, Show } from "solid-js";
import { useCurrentPage } from "./currentPage";

const likes = [
    "item1",
    "item2",
    "item3",
    "item3",
    "item3",
    "item3",
    "item3",
    "item3",
    "item3",
    "item3",
    "item3",
    "item3",
    "item3",
    "item3",
    "item3",
    "item3",
    "item3",
    "item3",
    "item3",
    "item3",
    "item3",
    "item3"
]

const dislikes = [
    "item1",
    "item2",
    "item3",
    "item4"
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