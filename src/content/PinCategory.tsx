import { Dynamic, For, Show } from "solid-js/web";
import type { Category } from "../../data/pins";
import style from "./Pins.module.css";
import { PinItem } from "../PinItem";

export const PinCategory = (props: { category: Category }) => {
  const hasGap = () => props.category.pins.find(p => p.gap);
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
            <Show when={!pin.gap}>
              <PinItem
                src={pin.src!}
                title={pin.title!}
                subtitle={pin.subtitle}
                type={pin.status}
              />
            </Show>
          )}
        </For>
      </div>
      <Show when={hasGap()}>
        <div class={style.gap}></div>
      </Show>
    </div>
  );
};
