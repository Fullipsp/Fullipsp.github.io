import { createStore } from "solid-js/store";
const [_displays, setDisplays] = createStore<Display[]>([]);

display("/pins/redpinz.webp", "🎀 Pin Collage: Red 🍒", " ♥️ Pin a Day May Day 2025 🌹");
display("/pins/orangepinz.webp", "🌼 Pin Collage: Orange 🍊", "🧡 Pin a Day May Day 2025 📙");
display("/pins/yellowpinz.webp", "🌻 Pin Collage: Yellow 🍋", "💛 Pin a Day May Day 2025 🌅");
display("/pins/greenpinz.webp", "🍀 Pin Collage: Green 🍏", "💚 Pin a Day May Day 2025 📗");
display("/pins/bluepinz.webp", "🫧 Pin Collage: Blue 🌊", "💙 Pin a Day May Day 2025 📘");

display("/pins/astarionboard.webp", "Indie / Astarion Board", "Latest Photo: 13.03.2026");
display("/pins/bingqiuboard.webp", "Bingqiu Pin Board", "Latest Photo: 13.03.2026");
display("/pins/mdzsboard.webp", "MDZS / Beefleaf Board", "Latest Photo: 13.03.2026");
display("/pins/jjkboard.webp", "JJK: Satosugu Board", "Latest Photo: 13.03.2026");
display("/pins/zuchibiboard.webp", "ZuPins HSR Chibi Board", "Latest Photo: 13.03.2026");

display("/pins/genshindiamondboard.webp", "Genshin / HSR Diamond Board", "Latest Photo: 13.03.2026");
display("/pins/helluvaboard.webp", "Helluva / Hazbin Board", "Latest Photo: 13.03.2026");
display("/pins/shadyclawboard.webp", "Shadyclaw / Hades Board", "Latest Photo: 13.03.2026");
display("/pins/neuviboard.webp", "HSR / Genshin Board", "Latest Photo: 13.03.2026");
display("/pins/ivantillboard.webp", "Ivantill Pin Board", "Latest Photo: 13.03.2026");

display("/pins/botwboard.webp", "Zelink BOTW Board", "Latest Photo: 13.03.2026");
display("/pins/ranwanboard.webp", "ERHA: Ranwan Board", "Latest Photo: 13.03.2026");
display("/pins/linkclickboard.webp", "Shiguang: Link Click Board ", "Latest Photo: 13.03.2026");
display("/pins/tarotboard.webp", "Tarot / Pin Panel Board", "Latest Photo: 13.03.2026");
display("/pins/purplepinz.webp", "🪻 Pin Collage: Violet 🍇", "💜 Pin a Day May Day 2025 🫐");

display("/pins/hualianboard.webp", "Hualian TGCF Pin Banner", "Latest Photo: 13.03.2026");
display("/pins/orangeloveboard.webp", "Sasamiya / MLB Pin Banner", "Latest Photo: 13.03.2026");
display("/pins/foxiboard1.webp", "FoxiPins MXTX Windows 1", "Latest Photo: 13.03.2026");
display("/pins/foxiboard2.webp", "FoxiPins MXTX Windows 1", "Latest Photo: 13.03.2026");
display("/pins/diamondglassboard.webp", "Insomnia Diamond Glass Case", "Latest Photo: 13.03.2026");

display("/pins/pastelboard.webp", "Saeran / Kawaii Pin Boards", "Latest Photo: 13.03.2026");



export interface Display {
  src: string;
  title: string;
  subtitle?: string;
}

function display(src: string, title: string, subtitle?: string) {
  setDisplays((prev) => [...prev, { src, title, subtitle }]);
}

export const displays = () => {
  return _displays;
};
