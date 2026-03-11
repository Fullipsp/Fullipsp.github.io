import { createStore } from "solid-js/store";
const [_drawings, setDrawings] = createStore<Drawing[]>([]);

drawing("hualianp.webp", "Hualian Portrait", "Tian Guan Ci Fu 2023");
drawing("AxL.webp", "Arwin & Latte Portrait", "Miss Not So Sidekick 2022");
drawing("freakynoir.webp", "Cl4w N0ir Fanart", "Miraqulous Laydaybug 2024");
drawing("emofurry.webp", "Fluffy Femboye Fursona ^v^", "EPIC FURSONA 2025");
drawing("gorouarcher.webp", "Gorou Bow Practice", "Genshin Impact 2022");
drawing("catxiao.webp", "Catboy Xiao Bust", "Genshin Impact 2021");

drawing("winterxiao.webp", "Winter Xiao - Otome AU", "Genshin Impact 2021");
drawing("tomo.webp", "Kazuhas Friend", "Genshin Impact 2021");
drawing("kazuhabday.webp", "Kazuhas Birthday", "Genshin Impact");
drawing("childe.webp", "Childe - Tartaglia", "Independence Day 2021");
drawing("catnoir.webp", "Cat Noir Bust", "Miraculous Ladybug 2021");
drawing("celestial.webp", "Celestial Dragon OC ", "Art Trade 2022");
drawing("belpher.webp", "Belphegor Underwater", "Obey Me 2021");
drawing("chongyunsketch.webp", "Drummer Chongyun WIP", "Genshin Impact 2021");
drawing("rayphone.webp", "Ray on the Phone", "Mystic Messenger 2021");
drawing("gencyart.webp", "Genji x Mercy SI Ship", "Overwatch 2023");

drawing("bobaqueens.webp", "Boba Queens BDay", "B-Day Gift 2025");
drawing("topostie.webp", "MXTX Best Boy Trio", "MXTX Bad Boyz 2024");
drawing("hollydragon.webp", "Holly Christmas Dragon", "Bday Gift 2022");
drawing("kofi.webp", "Saeran Drinking Ko-fi :3", "Mystic Messenger 2021");
drawing("kowalski.webp", "Kowalski, Analysis?", "Penguins of Madagascar 2023");
drawing("uzui.webp", "Uzui Birthday Party", "Demon Slayer 2022");

drawing("thanatos.webp", "Thanatos Chibi Bust", "Hades 2021");
drawing("zagreus.webp", "Zagreus Chibi Bust", "Hades 2021");
drawing("sxm.webp", "Saeran x MC Portrait", "Mystic Messenger 2021");
drawing("astarionchibi.webp", "Astarion x Arsene Chibi", "BaldursGate3 2024");
drawing("myocsketch.webp", "Arsene Sketch BG3", "BaldursGate3 2024");
drawing("albedosketch.webp", "Albedo Chalk Sketch", "Genshin Impact 2021");
drawing("genshincomic.webp", "My Old Genshin Team", "Genshin Impact 2022");
drawing("6challenge.webp", "6 Characters Challenge", "Multifandom 2021");
drawing("saeranstruggle.webp", "Saeran Endless Struggle", "Mystic Messenger 2021");
drawing("yandereray.webp", "Yandere Ray DTIYS", "Mystic Messenger 2021");
drawing("mxs.webp", "Saeran x MC", "Mystic Messenger 2021");
drawing("leviathan.webp", "Leviathan", "Obey Me 2021");
drawing("gesaeran.webp", "Saeran Portrait", "Mystic Messenger 2021");






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
