import { createStore } from "solid-js/store";
const [_displays, setDisplays] = createStore<Display[]>([]);

display("/fave-characters/moran.webp", "Mo Weiyu", "Erha: Husky & Shizun");
display("/fave-characters/cwn.webp", "Chu Wanning", "Erha: Husky & Shizun");
display("/fave-characters/xielian.webp", "Xie Lian", "Heaven Officials Blessin'");
display("/fave-characters/huacheng.webp", "Hua Cheng", "Heaven Officials Blessin'");
display("/fave-characters/binghe.webp", "Luo Binghe", "Scum Villain System");
display("/fave-characters/sqq.webp", "Shen Qingqiu", "Scum Villain System");
display("/fave-characters/luguang.jpg", "Lu Guang", "Link Click");
display("/fave-characters/chengxiaoshi.jpg", "Cheng Xiaoshi", "Link Click");

display("/fave-characters/neuvilette.jpg", "Neuvilette", "Genshin Impact");
display("/fave-characters/phainon.jpg", "Phainon / Khaslana", "Honkai Star Rail");
display("/fave-characters/aventurine.jpg", "Aventurine", "Honkai Star Rail");
display("/fave-characters/danheng.jpg", "Dan Heng", "Honkai Star Rail");
display("/fave-characters/saeran.jpg", "Saeran Choi", "Mystic Messenger");
display("/fave-characters/belphie.jpg", "Belphegor", "Obey Me!");
display("/fave-characters/sasaki.jpg", "Sasaki", "Sasaki to Miyano");
display("/fave-characters/saaki.jpg", "Sasaki", "Sasaki to Miyano");

display("/fave-characters/catnoir.jpg", "Cat Noir", "Mir4culous Ladybug");
display("/fave-characters/astarion.jpg", "Astarion", "Baldur's Gate 3");
display("/fave-characters/sylus.jpg", "Sylus", "Love & Deepspace");
display("/fave-characters/rafayel.jpg", "Rafayel", "Love & Deepspace");
display("/fave-characters/xavier.jpg", "Xavier", "Love & Deepspace");

display("/fave-characters/lifeweaver.jpg", "Lifeweaver", "Overwatch");
display("/fave-characters/wuyang.jpg", "Wuyang", "Overwatch");
display("/fave-characters/mizuki.jpg", "Mizuki", "Overwatch");

display("/fave-characters/stolas.jpg", "Stolas", "Helluva Boss");
display("/fave-characters/lucifer.jpg", "Lucifer", "Hazbin Hotel");





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
