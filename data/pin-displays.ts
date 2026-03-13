import { createStore } from "solid-js/store";
const [_displays, setDisplays] = createStore<Display[]>([]);

display("/pins/redpinz.webp", "WIP", "UPDATE");
display("/pins/orangepinz.webp", "WIP", "UPDATE");
display("/pins/yellowpinz.webp", "WIP", "UPDATE");
display("/pins/greenpinz.webp", "WIP", "UPDATE");
display("/pins/bluepinz.webp", "WIP", "UPDATE");

display("/pins/astarionboard.webp", "WIP", "UPDATE");
display("/pins/bingqiuboard.webp", "WIP", "UPDATE");
display("/pins/mdzsboard.webp", "WIP", "UPDATE");
display("/pins/jjkboard.webp", "WIP", "UPDATE");
display("/pins/zuchibiboard.webp", "WIP", "UPDATE");

display("/pins/genshindiamondboard.webp", "WIP", "UPDATE");
display("/pins/helluvaboard.webp", "WIP", "UPDATE");
display("/pins/shadyclawboard.webp", "WIP", "UPDATE");
display("/pins/neuviboard.webp", "WIP", "UPDATE");
display("/pins/ivantillboard.webp", "WIP", "UPDATE");

display("/pins/botwboard.webp", "WIP", "UPDATE");
display("/pins/ranwanboard.webp", "WIP", "UPDATE");
display("/pins/linkclickboard.webp", "WIP", "UPDATE");
display("/pins/tarotboard.webp", "WIP", "UPDATE");
display("/pins/purplepinz.webp", "WIP", "UPDATE");

display("/pins/hualianboard.webp", "WIP", "UPDATE");
display("/pins/orangeloveboard.webp", "WIP", "UPDATE");
display("/pins/foxiboard1.webp", "WIP", "UPDATE");
display("/pins/foxiboard2.webp", "WIP", "UPDATE");
display("/pins/diamondglassboard.webp", "WIP", "UPDATE");

display("/pins/pastelboard.webp", "WIP", "UPDATE");



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
