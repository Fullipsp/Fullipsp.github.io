import { createStore } from "solid-js/store";
const [_drawings, setDrawings] = createStore<Drawing[]>([]);

drawing("hualianp.webp", "Hualian Portrait", "TGCF 2023");
drawing("AxL.webp", "Arwin & Latte Portrait", "Miss Not So Sidekick 2022");
drawing("freakynoir.webp", "Cl4w N0ir Fanart", "Miraqulous Laydaybug 2024");
drawing("emofurry.webp", "Fluffy Femboye", "EPIC FURSONA 2025");
drawing("gorouarcher.webp", "Gorou Bow Practice", "Genshin Impact 2022");
drawing("catxiao.webp", "Catboy Xiao", "Genshin Impact 2021");

drawing("winterxiao.webp", "Winter Xiao - Otome AU", "Genshin Impact 2021");
drawing("tomo.webp", "Kazuhas Friend", "Genshin Impact 2021");
drawing("kazuhabday.webp", "Kazuhas Birthday", "Genshin Impact");
drawing("childe.webp", "Childe - Tartaglia", "Independence Day 2021");
drawing("catnoir.webp", "Cat Noir", "Miraculous Ladybug 2021");
drawing("celestial.webp", "Celestial Dragon OC ", "Art Trade 2022");
drawing("belpher.webp", "Belphegor Underwater", "Obey Me 2021");
drawing("chongyunsketch.webp", "Drummer Chongyun WIP", "Genshin Impact 2021");
drawing("rayphone.webp", "Ray on the Phone", "Mystic Messenger 2021");

drawing("bobaqueens.webp", "Boba Queens BDay", "2025");
drawing("to postie.webp", "MXTX Best Boy Trio", "MXTX 2024");
drawing("uzui.webp", "Uzui Birthday Party", "Demon Slayer 2023");
drawing("hollydragon.webp", "Holly Christmas Dragon", "Bday Gift 2022");
drawing("kofi.webp", "Saeran Drinking Ko-fi :3", "Mystic Messenger 2021");

drawing("thanatos.webp", "Thanatos", "Hades 2021");
drawing("zagreus.webp", "Zagreus", "Hades 2021");
drawing("mxs.webp", "Saeran x MC", "Mystic Messenger 2021");
drawing("sxm.webp", "Saeran x MC Portrait", "Mystic Messenger 2021");
drawing("gesaeran.webp", "Saeran Portrait", "Mystic Messenger 2021");
drawing("astarionchibi.webp", "Astarion x Arsene Chibi", "BaldursGate3 2024");
drawing("myocsketch.webp", "Arsene Sketch BG3", "BaldursGate3 2024");
drawing("leviathan.webp", "Leviathan", "Obey Me 2021");
drawing("genshincomic.webp", "My Old Genshin Team", "Genshin Impact 2022");
drawing("6challenge.webp", "6 Characters Challenge", "Multifandom 2021");

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
