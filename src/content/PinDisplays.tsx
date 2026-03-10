import style from "./drawings.module.css";
import { For } from "solid-js";
import { displays } from "../../data/pin-displays";
import { PreviewItem } from "../PreviewItem";
import { PreviewPopup } from "../PreviewPopup";

const PinDisplaysContent = () => {
  return (
    <div class={style.container}>
      <PreviewPopup drawings={displays()} />

      <div class={style.drawings}>
        <For each={displays()}>
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

export default PinDisplaysContent;
