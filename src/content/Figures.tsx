import style from "./Pins.module.css";
import { figureCategories } from "../../data/figures";
import { PreviewPopup } from "../PreviewPopup";
import { VirtualPinCategories } from "../VirtualPinCategories";

const PinsContent = () => {
  return (
    <div class={style.container}>
      <PreviewPopup categories={figureCategories()} />

      <div class={style.categories}>
        <VirtualPinCategories categories={figureCategories()} />
      </div>
    </div>
  );
};

export default PinsContent;
