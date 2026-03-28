import style from "./FaveCharacters.module.css";
import { For } from "solid-js";
import { PreviewItem } from "../PreviewItem";
import { PreviewPopup } from "../PreviewPopup";
import { faveCharacters } from "../../data/fave-characters";

const FaveCharactersContent = () => {
  return (
    <div class={style.container}>
      <PreviewPopup drawings={faveCharacters()} />

      <div class={style.drawings}>
        <For each={faveCharacters()}>
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

export default FaveCharactersContent;
