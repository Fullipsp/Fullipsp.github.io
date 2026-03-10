import { createStore } from "solid-js/store";
const [_items, setItems] = createStore<Item[]>([]);

image(
  "/pins/pinuwu.png",
  "Aventurine",
  "",
);
image(
  "/pins/pinuwu.png",
  "Aventurine",
  "something",
);
image(
  "/pins/pinuwu.png",
  "Aventurine",
  "something",
);
image(
  "/pins/pinuwu.png",
  "Aventurine",
  "something",
);

export interface Item {
  src: string;
  title: string;
  subtitle?: string;
}

function image(src: string, title: string, subtitle?: string) {
  setItems((prev) => [...prev, { src, title, subtitle }]);
}

export const AboutMeRightItems = () => {
  return _items;
};
