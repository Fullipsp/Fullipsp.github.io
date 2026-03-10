import { createStore } from "solid-js/store";
const [_drawings, setDrawings] = createStore<Drawing[]>([]);

drawing("hualianp.webp", "Hualian Portrait", "TGCF 2023");
drawing("AxL.webp", "Arwin & Latte Portrait", "Miss Not So Sidekick 2022");
drawing("freakynoir.webp", "Cl4w N0ir Fanart", "Miraqulous Laydaybug 2024");
drawing("emofurry.webp", "Fluffy Femboye", "EPIC FURSONA 2025");
drawing("kofi.webp", "Saeran Drinking Ko-fi :3", "Mystic Messenger");

drawing("gorouarcher.webp", "Gorou Bow Practice", "Genshin Impact");
drawing("catxiao.webp", "Catboy Xiao", "Genshin Impact");
drawing("tomo.webp", "Kazuhas Friend", "Genshin Impact");
drawing("kazuhabday.webp", "Kazuhas Birthday", "Genshin Impact");
drawing("childe.webp", "Childe - Tartaglia", "Independence Day 2021");

drawing("winterxiao.webp", "Winter Xiao - Otome AU", "Genshin Impact");
drawing("celestial.webp", "Celestial Dragon OC ", "Art Trade");
drawing("belpher.webp", "Belphegor Underwater", "Obey Me");
drawing("chongyunsketch.webp", "Drummer Chongyun WIP", "Genshin Impact");
drawing("rayphone.webp", "Ray on the Phone", "Mystic Messenger");

drawing("bobaqueens.webp", "Boba Queens BDay", "2025");
drawing("to postie.webp", "MXTX Best Boy Trio", "MXTX 2024");
drawing("hollydragon.webp", "Holly Christmas Dragon", "Bday Gift");
drawing("catnoir.webp", "Cat Noir", "Miraculous Ladybug");
drawing("uzui.webp", "Uzui Birthday Party", "Demon Slayer");

drawing("thanatos.webp", "Thanatos", "Hades");
drawing("zagreus.webp", "Zagreus", "Hades");
drawing("mxs.webp", "Saeran x MC", "Mystic Messenger");
drawing("sxm.webp", "Saeran x Me Portrait", "Mystic Messenger");
drawing("gesaeran.webp", "Saeran Portrait", "Mystic Messenger");
drawing("astarionchibi.webp", "Astarion x Arsene Chibi", "BaldursGate3");
drawing("myocsketch.webp", "Arsene Sketch BG3", "BaldursGate3");
drawing("leviathan.webp", "Leviathan", "Obey Me");
drawing("genshincomic.webp", "My Old Genshin Team", "Genshin Impact");
drawing("6challenge.webp", "6 Characters Challenge", "Multifandom");

export interface Drawing {
  src: string;
  title: string;
  subtitle?: string;
}

function drawing(src: string, title: string, subtitle?: string) {
  setDrawings((prev) => [
    ...prev,
    { src: `/drawings/${src}`, title, subtitle },
  ]);
  return { drawing };
}

export const drawings = () => {
  return _drawings;
};
