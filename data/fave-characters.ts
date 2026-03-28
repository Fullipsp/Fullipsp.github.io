import { createStore } from "solid-js/store";
const [_displays, setDisplays] = createStore<Display[]>([]);




display("/fave-characters/2minfizz.webp", "test", "test");









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
