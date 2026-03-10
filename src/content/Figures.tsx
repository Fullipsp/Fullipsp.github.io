import style from "./Pins.module.css";
import { For } from "solid-js";
import { figureCategories } from "../../data/figures";
import { PinCategory } from "./PinCategory";
import { PreviewPopup } from "../PreviewPopup";

const PinsContent = () => {
  return (
    <div class={style.container}>
      <PreviewPopup categories={figureCategories()} />

      <div class={style.categories}>
        <For each={figureCategories()}>
          {(category) => <PinCategory category={category} />}
        </For>
      </div>
    </div>
  );
};

export default PinsContent;
