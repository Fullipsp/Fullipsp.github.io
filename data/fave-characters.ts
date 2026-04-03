import { createStore } from "solid-js/store";
const [_displays, setDisplays] = createStore<Display[]>([]);

display("/fave-characters/moran.webp", "Mo Weiyu", "Erha: Husky & Shizun");
display("/fave-characters/cwn.webp", "Chu Wanning", "Erha: Husky & Shizun");
display("/fave-characters/xielian.webp", "Xie Lian", "Heaven Officials Blessin'");
display("/fave-characters/huacheng.webp", "Hua Cheng", "Heaven Officials Blessin'");
display("/fave-characters/binghe.webp", "Luo Binghe", "Scum Villain System");
display("/fave-characters/sqq.webp", "Shen Qingqiu", "Scum Villain System");
display("/fave-characters/tlj.jpg", "Tianlang-Jun", "Scum Villain System");
display("/fave-characters/muqing.jpg", "Mu Qing", "Heaven Officials Blessin'");

display("/fave-characters/hexuan.jpg", "He Xuan", "Heaven Officials Blessin'");
display("/fave-characters/weiwuxian.jpg", "Wei Wuxian", "Mo Dao Zu Shi");
display("/fave-characters/lanzhan.jpg", "Lan Wangji", "Mo Dao Zu Shi");
display("/fave-characters/luguang.jpg", "Lu Guang", "Link Click");
display("/fave-characters/chengxiaoshi.jpg", "Cheng Xiaoshi", "Link Click");
display("/fave-characters/neuvilette.jpg", "Neuvilette", "Genshin Impact");
display("/fave-characters/phainon.jpg", "Phainon / Khaslana", "Honkai Star Rail");
display("/fave-characters/moze.jpg", "Moze", "Honkai Star Rail");

display("/fave-characters/danheng.jpg", "Dan Heng", "Honkai Star Rail");
display("/fave-characters/aventurine.jpg", "Aventurine", "Honkai Star Rail");
display("/fave-characters/kaveh.jpg", "Kaveh", "Genshin Impact");
display("/fave-characters/alhaitham.jpg", "Alhaitham", "Genshin Impact");
display("/fave-characters/tamonk.jpg", "Tamon Fukuhara", "Tamon's B Side");
display("/fave-characters/dazai.jpg", "Dazai Osamu", "Bungou Stray Dogs");
display("/fave-characters/chuuya.jpg", "Chuuya Nakahara", "Bungou Stray Dogs");
display("/fave-characters/tetchou.jpg", "Tetcho Suehiro", "Bungou Stray Dogs");

display("/fave-characters/choso.jpg", "Choso", "Jujutsu Kaisen");
display("/fave-characters/sasaki.jpg", "Sasaki", "Sasaki to Miyano");
display("/fave-characters/jinshi.jpg", "Jinshi", "Apothecary Diaries");
display("/fave-characters/kaguya.jpg", "Kaguya Shinomiya", "Love is War");
display("/fave-characters/simon.jpg", "Simeon", "Obey Me!");
display("/fave-characters/mammon.jpg", "Mammon", "Obey Me!");
display("/fave-characters/belphie.jpg", "Belphegor", "Obey Me!");
display("/fave-characters/saeran.jpg", "Saeran Choi", "Mystic Messenger");

display("/fave-characters/thanatos.jpg", "Thanatos", "Hades I");
display("/fave-characters/morpheus.jpg", "Morpheus", "Hades II");
display("/fave-characters/astarion.jpg", "Astarion Ancunín", "Baldur's Gate 3");
display("/fave-characters/sylus1.jpg", "Sylus", "Love & Deepspace");
display("/fave-characters/xavier1.jpg", "Xavier", "Love & Deepspace");
display("/fave-characters/rafayel.jpg", "Rafayel", "Love & Deepspace");
display("/fave-characters/stolas.jpg", "Stolas", "Helluva Boss");
display("/fave-characters/lucifer.jpg", "Lucifer", "Hazbin Hotel");
display("/fave-characters/clawnoir.jpg", "Claw Noir", "Mir4culous Ladybug");
display("/fave-characters/catnoir.jpg", "Cat Noir", "Mir4culous Ladybug");
display("/fave-characters/lifeweaver.jpg", "Lifeweaver (Niran)", "Overwatch");
display("/fave-characters/wuyang.jpg", "Wuyang Ye", "Overwatch");
display("/fave-characters/mizuki.jpg", "Mizuki Kawano", "Overwatch");












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
