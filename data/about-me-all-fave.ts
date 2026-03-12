import { createStore } from "solid-js/store";
const [_items, setItems] = createStore<Item[]>([]);

image("/drawings/rafayelbust.webp", "Rafayel", "L+Deepspace");
image("/pins/Lily.webp", "Aventurine", "something");
image("/pins/Lily.webp", "Aventurine", "something");
image("/pins/Lily.webp", "Aventurine", "something");
image("/pins/Lily.webp", "Aventurine", "something");
image("/pins/Lily.webp", "Aventurine", "something");

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
