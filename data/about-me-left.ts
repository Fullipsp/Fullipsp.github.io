import { createStore } from "solid-js/store";
const [_items, setItems] = createStore<Item[]>([]);

image("/pins/Lily.webp", "Aventurine", "");
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

export const AboutMeLeftItems = () => {
  return _items;
};
