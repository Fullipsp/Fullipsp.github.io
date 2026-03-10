import { Virtualizer } from "virtua/solid";
import { PinCategory } from "./content/PinCategory";
import type { Category } from "../data/pins";
import { createSignal, onCleanup, onMount } from "solid-js";
import { createThrottledResize } from "./utils";

export const VirtualPinCategories = (props: { categories: Category[] }) => {
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
    <Virtualizer
      data={props.categories}
      scrollRef={document.getElementById("root")!}
      startMargin={startMargin()}
    >
      {(category) => <PinCategory category={category} />}
    </Virtualizer>
  );
};
