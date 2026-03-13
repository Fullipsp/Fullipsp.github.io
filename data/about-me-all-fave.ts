import { createStore } from "solid-js/store";
const [_items, setItems] = createStore<Item[]>([]);




image("/drawings/huachengbust.webp", "Hua Cheng", "TGCF (Danmei)");
image("/drawings/scarabust.webp", "Wanderer", "Genshin Impact");
image("/drawings/belphiebust.webp", "Belphegor", "Obey Me");
image("/drawings/xiaofavebust.webp", "Xiao / Alatus", "Genshin Impact");
image("/drawings/rafayelbust.webp", "Rafayel", "LuvDeepSpace");
image("/drawings/erenbust.webp", "Eren Yeager", "Attack on Titan");




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
