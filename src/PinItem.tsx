import style from "./PinItem.module.css";
import { ic, Icon } from "./Icon";
import { createSignal, Show } from "solid-js";
import { A, useLocation } from "@solidjs/router";

const PreviewType = {
  sold: {
    text: "Sold / Traded",
    icon: ic("monetization_on"),
  },
  ordered: {
    text: "Ordered",
    icon: ic("shopping_bag"),
  },
  owned: {
    text: "Owned",
    icon: ic("done"),
  },
  "for-sale": {
    text: "For Sale",
    icon: ic("shopping_cart"),
  },
  "looking-for": {
    text: "Looking For",
    icon: ic("search"),
  },
  "for-trade": {
    text: "For Trade",
    icon: ic("spa"),
  },
};

export type PreviewType = keyof typeof PreviewType;

interface PreviewItemProps {
  title: string;
  subtitle?: string;
  src: string;
  type?: PreviewType;
}

export const PinItem = (props: PreviewItemProps) => {
  const location = useLocation();
  const [loaded, setLoaded] = createSignal(false);
  return (
    <A
      href={location.pathname + "#preview=" + props.src}
      noScroll
      class={style.container}
    >
      <div class={style.imageContainer}>
        <img
          onload={() => setLoaded(true)}
          loading="lazy"
          class={`${style.image} ${loaded() ? style.loaded : ""}`}
          src={props.src}
          alt="preview"
        />
      </div>
      <div class={style.details}>
        <div class={style.innerDetails}>
          <div class={style.title}>{props.title}</div>
          <Show when={props.subtitle?.trim()}>
            <div class={style.subtitle}>{props.subtitle}</div>
          </Show>
        </div>
        <Show when={props.type}>
          <div
            style={{ "--color": `var(--${props.type})`, "--color-text": `var(--${props.type}-text)` }}
            class={style.itemStatusOverlay}
          >
            <Icon class={style.icon}>{PreviewType[props.type!].icon}</Icon>
            <div class={style.text}>{PreviewType[props.type!].text}</div>
          </div>
        </Show>
      </div>
    </A>
  );
};
