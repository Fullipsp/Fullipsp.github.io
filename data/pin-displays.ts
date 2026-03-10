import { createStore } from "solid-js/store"
const [_displays, setDisplays] = createStore<Display[]>([]);


display("/pins/pinuwu.png", "Aventurine Chibi", "")
display("/pins/pinuwu.png", "Aventurine Chibi", "something")
display("/pins/pinuwu.png", "Aventurine Chibi", "something")
display("/pins/pinuwu.png", "Aventurine Chibi", "something")
display("/pins/pinuwu.png", "Aventurine Chibi", "something")
display("/pins/pinuwu.png", "Aventurine Chibi", "something")
display("/pins/pinuwu.png", "Aventurine Chibi", "something")
display("/pins/pinuwu.png", "Aventurine Chibi", "something")
display("/pins/pinuwu.png", "Aventurine Chibi", "something")
display("/pins/pinuwu.png", "Aventurine Chibi", "something")




export interface Display {
  src: string;
  title: string
  subtitle?: string
}


 function display (src: string, title: string, subtitle?: string)  {
    setDisplays((prev) => [...prev, { src, title, subtitle }])
}

export const displays = () => {
  return _displays;
}