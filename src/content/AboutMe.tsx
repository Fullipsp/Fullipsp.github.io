import { createSignal, For, onCleanup, onMount, Show } from "solid-js";
import style from "./AboutMe.module.css";
import { Icon } from "../Icon";
import { AboutMeLeftItems, type Item } from "../../data/about-me-current-fave";
import { AboutMeRightItems } from "../../data/about-me-all-fave";
import { aboutMeSlides } from "../../data/about-me-slideshow";
import { rightImage } from "../../data/about-me-right-image";

const Details = () => {
  return (
    <div class={style.details}>
      <div class={style.roses}>
        <img src="/roses.gif" />
        <img src="/roses.gif" />
      </div>
      <h2 class={style.title}>About Me</h2>
      <div class={style.description}>
        <p>Hello, I'm Fulli! Welcome to my portfolio & collection website! ˚ʚ♡ɞ˚</p>

        <p>
          This site is all about me, who I am, what I like and to display the
          things I cherish most. <br />I have organized all of my favourite artworks,
          photography, my entire pin & figure collections as well as how I
          display them in the corresponding folders above. ˚ʚ♡ɞ˚
        </p>

        <p>
          Feel free to check out and reach out to me via my socials! (especially
          if you'd like to trade or buy anything) I hope you enjoy exploring my
          page as much as I enjoyed creating it! ʕ•ᴥ•ʔ ₊˚⊹♡
        </p>
      </div>
      <div class={style.ribbonContainer}>
        <div class={style.ribbonEndings}></div>
        <img class={style.ribbon} src="/ribbon.png" />
        <div class={style.ribbonEndings}></div>
      </div>
    </div>
  );
};

const images = aboutMeSlides().map((item) => item.src);
const animOptions = {
  duration: 500,
  easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)", // ease-out-quad
};
const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = createSignal(0);
  let nextImageRef: HTMLImageElement | undefined;
  let currentImageRef: HTMLImageElement | undefined;
  let prevImageRef: HTMLImageElement | undefined;
  let intervalId: number | undefined;

  const nextImageSrc = () => {
    return images[(currentIndex() + 1) % images.length];
  };

  const prevImageSrc = () => {
    return images[(currentIndex() - 1 + images.length) % images.length];
  };

  let animating = false;

  const next = () => {
    handleInterval();
    if (animating) return;
    animating = true;
    const animation = nextImageRef?.animate(
      [
        {
          right: "-100%",
        },
        {
          right: "0",
        },
      ],
      animOptions,
    );
    if (animation) {
      animation.onfinish = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        animating = false;
      };
    }
  };
  const prev = () => {
    handleInterval();
    if (animating) return;
    animating = true;
    const animation = currentImageRef?.animate(
      [{ right: "0" }, { right: "-100%" }],
      animOptions,
    );

    if (animation) {
      animation.onfinish = () => {
        setCurrentIndex((i) => (i - 1 + images.length) % images.length);
        animating = false;
      };
    }
  };

  const handleInterval = () => {
    if (intervalId) {
      clearInterval(intervalId);
    }
    intervalId = setInterval(() => {
      next();
    }, 6000);
  }
  onMount(() => {
    handleInterval();
  })
  onCleanup(() => {
    clearInterval(intervalId);
  })
  

  return (
    <div class={style.slideshow}>
      <img
        ref={prevImageRef}
        class={style.prevImage}
        src={prevImageSrc()}
        alt=""
      />

      <img
        fetchpriority="high"
        ref={currentImageRef}
        src={images[currentIndex()]}
        alt="Slideshow Image"
      />
      <img ref={nextImageRef} class={style.nextImage} src={nextImageSrc()} />

      <div class={style.overlay}>
        <button onClick={prev}>
          <Icon class={style.icon}>chevron_backward</Icon>
        </button>
        <button onClick={next}>
          <Icon class={style.icon}>chevron_forward</Icon>
        </button>
      </div>
    </div>
  );
};

const SmallImages = (props: { items: Item[]; type: "current" | "all" }) => {
  return (
    <div class={style.smallImagesContainer}>
      <h2 class={style.title}>
        {props.type === "current" ? "Current Favorites" : "All-Time Favorites"}
      </h2>

      <div class={style.smallImages}>
        <For each={props.items}>{(item) => <SmallImageItem item={item} />}</For>
      </div>
    </div>
  );
};

const SmallImageItem = (props: { item: Item }) => {
  return (
    <div class={style.smallImageItem}>
      <img src={props.item.src} alt={props.item.title} />
      <div class={style.detailsOverlay}>
        <div class={style.title}>{props.item.title}</div>
        <Show when={props.item.subtitle?.trim()}>
          <div class={style.subtitle}>{props.item.subtitle}</div>
        </Show>
      </div>
    </div>
  );
};

const SomethingElse = () => {
  return (
    <div class={style.somethingElse}>
      <img src={rightImage} />
    </div>
  );
};

const AboutMeContent = () => {
  return (
    <div class={style.container}>
      <div class={style.topContentMobile}>
        <Details />
        <div class={style.mobileImages}>
          <SmallImages type="current" items={AboutMeLeftItems()} />
          <SmallImages type="all" items={AboutMeRightItems()} />
        </div>
      </div>
      <div class={style.topContent}>
        <SmallImages type="current" items={AboutMeLeftItems()} />
        <Details />
        <SmallImages type="all" items={AboutMeRightItems()} />
      </div>
      <div class={style.slideshowOuter}>
        <Slideshow />
        <SomethingElse />
      </div>
    </div>
  );
};

export default AboutMeContent;
