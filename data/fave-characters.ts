import { createStore } from "solid-js/store";
const [_displays, setDisplays] = createStore<Display[]>([]);

display("/fave-characters/moran.webp", "Mo Weiyu", "Erha: Husky & Shizun");
display("/fave-characters/cwn.webp", "Chu Wanning", "Erha: Husky & Shizun");
display("/fave-characters/binghe.webp", "Luo Binghe", "Scum Villain System");
display("/fave-characters/sqq.webp", "Shen Qingqiu", "Scum Villain System");
display("/fave-characters/xielian.webp", "Xie Lian", "Heaven Officials Blessin'");
display("/fave-characters/huacheng.webp", "Hua Cheng", "Heaven Officials Blessin'");
display("/fave-characters/saeran.jpg", "Cat Noir", "Mir4culous Ladybug");

display("/fave-characters/catnoir.jpg", "Cat Noir", "Mir4culous Ladybug");
display("/fave-characters/xavier.jpg", "Sylus", "Love & Deepspace");
display("/fave-characters/astarion.jpg", "Astarion", "Baldur's Gate 3");
display("/fave-characters/sylus.jpg", "Sylus", "Love & Deepspace");
display("/fave-characters/rafayel.jpg", "Rafayel", "Love & Deepspace");
display("/fave-characters/xavier.jpg", "Xavier", "Love & Deepspace");









export interface Display {
  src: string;
  title: string;
  subtitle?: string;
}

function display(src: string, title: string, subtitle?: string) {
  setDisplays((prev) => [...prev, { src, title, subtitle }]);
}

export const faveCharacters = () => {
  return _displays;
};
