import { createStore } from "solid-js/store";
const [_items, setItems] = createStore<Item[]>([]);



image("/drawings/cwnbust.webp", "Chu Wanning", "Erha (Danmei)");
image("/drawings/moranbust.webp", "Mo Ran", "Erha (Danmei)");
image("/drawings/tamonbust.webp", "Tamon", "Tamon's B Side");
image("/drawings/phainonbust.webp", "Phainon", "Honkai StarRail");
image("/drawings/danhengbust.webp", "Dan Heng", "Honkai StarRail");
image("/fave-characters/megumi.jpg", "Megumi", "Jujutsu Kaisen");



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
