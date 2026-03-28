import style from "./PreviewItem.module.css";
import { createSignal, Show } from "solid-js";
import { A, useLocation } from "@solidjs/router";

interface PreviewItemProps {
  title: string;
  subtitle?: string;
  src: string;
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
