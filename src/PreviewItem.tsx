import style from "./PreviewItem.module.css";
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

export const PreviewItem = (props: PreviewItemProps) => {
  const location = useLocation();
  const [loaded, setLoaded] = createSignal(false);
  return (
    <A
      href={location.pathname + "#preview=" + props.src}
      noScroll
      class={style.container}
    >
      <img
        onload={() => setLoaded(true)}
        loading="lazy"
        class={`${style.image} ${loaded() ? style.loaded : ""}`}
        src={props.src}
        alt="preview"
      />
      <div class={style.detailsOverlay}>
        <div class={style.title}>{props.title}</div>
        <Show when={props.subtitle?.trim()}>
          <div class={style.subtitle}>{props.subtitle}</div>
        </Show>
      </div>
    </A>
  );
};
