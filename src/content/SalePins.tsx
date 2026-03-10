import style from "./Pins.module.css";
import { pinCategories } from "../../data/sale-pins";
import { PreviewPopup } from "../PreviewPopup";
import { VirtualPinCategories } from "../VirtualPinCategories";

const PinsContent = () => {
  return (
    <div class={style.container}>
      <PreviewPopup categories={pinCategories()} />
      <div class={style.categories}>
        <VirtualPinCategories categories={pinCategories()} />
      </div>
    </div>
  );
};

export default PinsContent;
