import { createStore } from "solid-js/store";
const [_displays, setDisplays] = createStore<Display[]>([]);

display("/pins/Lily.webp", "WORK IN PROGRESS", "WILL UPDATE SOON");
display("/pins/Lily.webp", "WORK IN PROGRESS", "WILL UPDATE SOON");
display("/pins/Lily.webp", "WORK IN PROGRESS", "WILL UPDATE SOON");
display("/pins/Lily.webp", "WORK IN PROGRESS", "WILL UPDATE SOON");
display("/pins/Lily.webp", "WORK IN PROGRESS", "WILL UPDATE SOON");

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
