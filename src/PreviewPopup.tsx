import { useLocation, useNavigate } from "@solidjs/router";
import style from "./PreviewPopup.module.css";
import { createEffect, createMemo, onCleanup, Show } from "solid-js";
import type { Drawing } from "../data/drawings";
import type { Category, Pin } from "../data/pins";
import { Portal } from "solid-js/web";

export const PreviewPopup = (props: {
  categories?: Category[];
  drawings?: Drawing[];
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const src = () =>
    location.hash.startsWith("#preview=")
      ? location.hash.slice("#preview=".length)
      : null;


  const item = createMemo(() => {
    if (!src()) return;
    if (props.categories?.length) {
      let pin: Pin | undefined;
      props.categories.find((category) => {
        pin = category.pins.find((pin) => pin.src === src());
        return pin;
      });
      return pin;
    }
    if (props.drawings?.length) {
      return props.drawings.find((drawing) => drawing.src === src());
    }
    return;
  });

  createEffect(() => {
    if (item()) {
      document.body.classList.add("preview");
    }
    onCleanup(() => {
      document.body.classList.remove("preview");
    });
  });
  const handleBackgroundClick = (event: MouseEvent) => {
    if (event.target === event.currentTarget) {
      navigate(location.pathname, { scroll: false });
    }
  };

  return (
    <Show when={item()}>
      <Portal>
        <div class={style.container} onClick={handleBackgroundClick}>
          <img src={item()?.src} />
        </div>
      </Portal>
    </Show>
  );
};
