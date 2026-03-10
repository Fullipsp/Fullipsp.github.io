import style from "./Pins.module.css";
import { For } from "solid-js";
import { pinCategories } from "../../data/pins";
import { PinCategory } from "./PinCategory";
import { PreviewPopup } from "../PreviewPopup";

const PinsContent = () => {
  return (
    <div class={style.container}>
      <PreviewPopup categories={pinCategories()} />
      <div class={style.categories}>
        <For each={pinCategories()}>
          {(category) => <PinCategory category={category} />}
        </For>
      </div>
    </div>
  );
};

export default PinsContent;
