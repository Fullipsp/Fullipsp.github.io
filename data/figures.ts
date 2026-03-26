import { createStore } from "solid-js/store"
import type { PreviewType } from "../src/PreviewItem"
const [categories, setCategories] = createStore<Category[]>([]);

// ==================================================================================================================================================
category("Pre-Ordered Nendoroids")
.fig('kafka.webp', 'Kafka', 'Honkai Star Rail', "ordered")
.fig('phainon.webp', 'Phainon', 'Honkai Star Rail', "ordered")
.fig('kaeya.webp', 'Kaeya', 'Honkai Star Rail', "ordered")
.fig('xiao.webp', 'Xiao', 'Honkai Star Rail', "ordered")
// =====================================================================================================================================================================================================================
category("Looking for these Nendoroids!")
.fig('aobing.webp', 'Ao Bing', 'NeZha', "looking-for")
.fig('xiaoshi.webp', 'Cheng Xiaoshi', 'Link Click', "looking-for")
.fig('guang.webp', 'Lu Guang', 'Link Click', "looking-for")
.fig('miyano.webp', 'Miyano Yoshikazu', 'Sasaki & Miyano', "looking-for")
.fig('sasaki.webp', 'Sasaki Shuumei', 'Sasaki & Miyano', "looking-for")
// =====================================================================================================================================================================================================================
category("MXTX & Danmei Figures")
.fig('cwnnendo.webp', 'Chu Wanning Nendo Doll', 'Dumb Husky & White Cat', "owned")
.fig('morannendo.webp', 'Mo Ran Nendo Doll', 'Dumb Husky & White Cat', "owned")
.fig('reachheart.webp', 'Until I Reach Your Heart', 'Tian Guan Ci Fu', "owned")
.fig('amonglotus.webp', 'Among The Lotus', 'Tian Guan Ci Fu', "owned")
.fig('shenq.webp', 'Shen Qingqiu', 'ScumVillain', "owned")
.fig('binghe.webp', 'Luo Binghe', 'ScumVillain', "owned")
.fig('yllz.webp', 'YLLZ Wei Wuxian', 'Mo Dao Zu Shi', "owned")
.fig('lwj.webp', 'Lan Wangji DX', 'Mo Dao Zu Shi', "owned")
.fig('wwx.webp', 'Wei Wuxian DX', 'Mo Dao Zu Shi', "owned")
.fig('xielian.webp', 'Xie Lian', 'Tian Guan Ci Fu', "owned")
.fig('huacheng.webp', 'Hua Cheng', 'Tian Guan Ci Fu', "owned")
.fig('dianxiafigure.webp', 'Dianxia Lucky Figure', 'Tian Guan Ci Fu', "owned")
.fig('juniorlwj.webp', 'Junior LWJ', 'Mo Dao Zu Shi', "owned")
.fig('juniorwwx.webp', 'Junior WWX', 'Mo Dao Zu Shi', "owned")
.fig('teenlwj.webp', 'Teen LWJ', 'Mo Dao Zu Shi', "owned")
.fig('teenwwx.webp', 'Teen WWX', 'Mo Dao Zu Shi', "owned")
.fig('adultlwj.webp', 'Adult LWJ', 'Mo Dao Zu Shi', "owned")
.fig('adultwwx.webp', 'Adult WWX', 'Mo Dao Zu Shi', "owned")
// =====================================================================================================================================================================================================================
category("Anime Nendoroids")
.fig('langa.webp', 'Langa Hasegawa', 'SK8 Infinity', "owned")
.fig('reki.webp', 'Reki Kyan', 'SK8 Infinity', "owned")
.fig('akuta.webp', 'Akutagawa R.', 'Bungou Stray Dogs', "owned")
.fig('dazai.webp', 'Dazai Osamu', 'Bungou Stray Dogs', "owned")
.fig('chuuya.webp', 'Chuuya Nakahara', 'Bungou Stray Dogs', "owned")
.fig('miyuki.webp', 'Shirogane Miyuki', 'Love is War', "owned")
.fig('kaguya.webp', 'Shinomiya Kaguya', 'Love is War', "owned")
// =====================================================================================================================================================================================================================
category("Hoyo / Game Nendoroids")
.fig('ratio.webp', 'Dr Ratio', 'Honkai Star Rail', "owned")
.fig('aventurine.webp', 'Aventurine', 'Honkai Star Rail', "owned")
.fig('sunday.webp', 'Sunday', 'Honkai Star Rail', "owned")
.fig('robin.webp', 'Robin', 'Honkai Star Rail', "owned")
.fig('blade.webp', 'Blade', 'Honkai Star Rail', "owned")
.fig('danheng.webp', 'Dan Heng', 'Honkai Star Rail', "owned")
.fig('zhongli.webp', 'Aether', 'Genshin Impact', "owned")
.fig('aether.webp', 'Aether', 'Genshin Impact', "owned")
.fig('lumine.webp', 'Lumine', 'Genshin Impact', "owned")
.fig('luke.webp', 'Luke Pearce', 'Tears of Themis', "owned")
.fig('ozymandias.webp', 'Ozymandias', 'Fate Grand Order', "owned")
.fig('sylvanas.webp', 'Sylvanas', 'World of Warcraft', "owned")
.fig('zagreus.webp', 'Zagreus', 'Hades', "owned")
.fig('thanatos.webp', 'Thanatos', 'Hades', "owned")
// =====================================================================================================================================================================================================================
category("Shounen Figures")
.fig('giyu.webp', 'Tomioka Giyu', 'Demon Slayer', "owned")
.fig('muichiro.webp', 'Tokito Muichiro', 'Demon Slayer', "owned")
.fig('rengoku.webp', 'Rengoku Kyojuro', 'Demon Slayer', "owned")
.fig('uzui.webp', 'Uzui Tengen', 'Demon Slayer', "owned")
.fig('gemuzui.webp', 'Uzui Tengen G.E.M 1/8', 'Demon Slayer', "owned")
.fig('figmalink.webp', 'Figma Link', 'Breath of the Wild', "owned")
.fig('link.webp', 'Link', 'Breath of the Wild', "owned")
//
.fig('choso.webp', 'Choso', 'Jujutsu Kaisen', "owned")
.fig('toji.webp', 'Toji Fushiguro', 'Jujutsu Kaisen', "owned")
.fig('yuuta.webp', 'Okkotsu Yuta', 'Jujutsu Kaisen', "owned")
.fig('geto.webp', 'Geto Suguru', 'Jujutsu Kaisen', "owned")
.fig('gojo.webp', 'Gojo Satoru', 'Jujutsu Kaisen', "owned")
.fig('juniorgojo.webp', 'Junior Gojo', 'Jujutsu Kaisen', "owned")
.fig('juniorgeto.webp', 'Junior Geto', 'Jujutsu Kaisen', "owned")
//
.fig('junioreren.webp', 'Eren Yeager','Shingeki no Kyojin', "owned")
.fig('juniormikasa.webp', 'Mikasa Ackerman','Shingeki no Kyojin', "owned")
.fig('mikasa.webp', 'Eren Yeager (Season 4)','Shingeki no Kyojin', "owned")
.fig('eren.webp', 'Eren Yeager (Season 4)','Shingeki no Kyojin', "owned")
.fig('levi.webp', 'Levi Ackerman', 'Shingeki no Kyojin',"owned")
.fig('dumpling.webp', 'Gyoza Fairy', 'Dorohedoro', "owned")
.fig('santa.webp', 'Eren Yeager (Santa ver.)','Shingeki no Kyojin', "owned")
// =====================================================================================================================================================================================================================
category("Monster High Dolls")
.fig('draculauradoll.webp', 'Reel Drama: Draculaura', 'Monster High',"owned")
.fig('frankiedoll.webp', 'Reel Drama: Frankie Stein', 'Monster High',"owned")
.fig('clawdeendoll.webp', 'Clawdeen Wolf G1', 'Monster High',"owned")
.fig('clawdeen16.webp', 'Clawdeen Wolf: Sweet 16', 'Monster High',"owned")
// =====================================================================================================================================================================================================================
category("FOR SALE / Sold")
.fig('muichirochoko.webp', 'Tokito Muichiro Prize Fig', 'Demon Slayer', "owned")
.fig('giyuchoko.webp', 'Chokonose Giyu T.', 'Demon Slayer', "owned")
.fig('todoroki.webp', 'Shoto Torodoki Movie Ver.', 'My Hero Academia', "for-sale")
.fig('02.webp', 'Zero Two', 'Darling in the Franxx', "for-sale")
.fig('kogitsunemaru.webp', 'Kogitsunemaru', 'Touken Ranbu', "for-sale")
.fig('mizuki.webp', 'Mikazuki', 'Touken Ranbu', "for-sale")
.fig('joker.webp', 'Joker', 'Persona 5', "for-sale")
.fig('gojo.webp', 'Gojo Satoru', 'Jujutsu Kaisen', "for-sale")
.fig('hollowknight.webp', 'The Knight', 'Hollow Knight', "sold")
.fig('armin.webp', 'Armin Arlert','Shingeki no Kyojin', "sold")
.fig('miku.webp', 'Miku Nakano', 'Quintessential Quintuplets', "sold")
.fig('miyamura.webp', 'Miyamura Izumi', 'Horimiya', "sold")
.fig('hatsune.webp', 'Hatsune Miku Summer Prize Fig','', "sold")


export interface Pin {
  src: string
  title: string
  subtitle: string;
  status: PreviewType
}

export interface Category {
  title: string
  url?: string
  pins: Pin[]
}


function category  (title: string, url?: string) {
  setCategories((prev) => [...prev, { title, url, pins: [] }])
  const index = categories.length - 1


  const fig = (src: string, title: string, subtitle: string, status: PreviewType) => {
    setCategories(index, "pins", (prev) => [...prev, { src: `/figures/${src}`, title, subtitle, status }])
    return {fig}
  }
  return {
    fig,
  }
}

export const figureCategories = () => {
  return categories;
}