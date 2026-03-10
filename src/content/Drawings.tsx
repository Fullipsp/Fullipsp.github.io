import style from "./drawings.module.css";
import { For } from "solid-js";
import { drawings } from "../../data/drawings";
import { PreviewItem } from "../PreviewItem";
import { PreviewPopup } from "../PreviewPopup";

const DrawingsContent = () => {
  return (
    <div class={style.container}>
      <PreviewPopup drawings={drawings()} />

      <div class={style.drawings}>
        <For each={drawings()}>
          {(pin) => (
            <PreviewItem
              src={pin.src}
              title={pin.title}
              subtitle={pin.subtitle}
            />
          )}
        </For>
      </div>
    </div>
  );
};

export default DrawingsContent;
