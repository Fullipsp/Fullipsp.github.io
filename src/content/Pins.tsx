import style from "./Pins.module.css";
import { createSignal, For, onCleanup, onMount, Show } from "solid-js";
import { pinCategories } from "../../data/pins";
import { PinCategory } from "./PinCategory";
import { PreviewPopup } from "../PreviewPopup";
import { Virtualizer } from "virtua/solid";

const createThrottledResize = (callback: () => void): (() => void) => {
  let frameId: number | null = null;

  const throttled = () => {
    if (frameId !== null) return;

    frameId = requestAnimationFrame(() => {
      callback();
      frameId = null;
    });
  };

  onCleanup(() => {
    if (frameId !== null) {
      cancelAnimationFrame(frameId);
    }
  });

  return throttled;
};

const PinsContent = () => {
  const [startMargin, setStartMargin] = createSignal(0);
  const throttled = createThrottledResize(() => {
    updateStartMargin();
  });

  const updateStartMargin = () => {
    const tab = document.getElementById("tab");
    setStartMargin(tab!.offsetTop);
  };
  updateStartMargin();

  onMount(() => {
    window.addEventListener("resize", throttled);
    onCleanup(() => {
      window.removeEventListener("resize", throttled);
    });
  });

  return (
    <div class={style.container}>
      <PreviewPopup categories={pinCategories()} />
      <div class={style.categories}>
        <Virtualizer
          data={pinCategories()}
          scrollRef={document.getElementById("root")!}
          startMargin={startMargin()}
        >
          {(category) => <PinCategory category={category} />}
        </Virtualizer>

        {/* <For each={pinCategories()}>
          {(category) => <PinCategory category={category} />}
        </For> */}
      </div>
    </div>
  );
};

export default PinsContent;
