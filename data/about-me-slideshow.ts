import { createStore } from "solid-js/store"
const [_items, setItems] = createStore<Item[]>([]);




slide('slideshow/figure1.jpg')
slide('slideshow/figure2.jpg')
slide('slideshow/hualianp.webp')
slide('slideshow/winterxiao.webp')
slide('slideshow/gorouarcher.webp')
slide('slideshow/freakynoir.webp')
slide('slideshow/AxL.webp')
slide('slideshow/childe.webp')
slide('slideshow/celestial.webp')
slide('slideshow/figure3.jpg')








export interface Item {
  src: string;
  title?: string
  subtitle?: string
}


 function slide (src: string, title?: string, subtitle?: string)  {
    setItems((prev) => [...prev, { src, title, subtitle }])
}

export const aboutMeSlides = () => {
  return _items;
}