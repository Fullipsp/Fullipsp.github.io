import { Dynamic, For } from "solid-js/web";
import type { Category } from "../../data/pins";
import style from "./Pins.module.css";
import { PreviewItem } from "../PreviewItem";
import { PinItem } from "../PinItem";

export const PinCategory = (props: { category: Category }) => {
  return (
    <div class={style.category}>
      <Dynamic
        component={props.category.url ? "a" : "div"}
        href={props.category.url}
        target="_blank"
        rel="noreferrer"
        class={style.title}
      >
        {props.category.title}
      </Dynamic>
      <div class={style.pins}>
        <For each={props.category.pins}>
          {(pin) => (
            <PinItem
              src={pin.src}
              title={pin.title}
              subtitle={pin.subtitle}
              type={pin.status}
            />
          )}
        </For>
      </div>
    </div>
  );
};
