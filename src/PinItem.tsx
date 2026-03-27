import style from "./PinItem.module.css";
import { ic, Icon } from "./Icon";
import { createSignal, onCleanup, onMount, Show } from "solid-js";
import { A, useLocation } from "@solidjs/router";
import type { JSX } from "solid-js/h/jsx-runtime";

const PreviewType = {
  sold: {
    text: "Sold / Traded",
    icon: ic("monetization_on"),
  },
  ordered: {
    text: "Ordered",
    icon: ic("shopping_bag"),
  },
  owned: {
    text: "Owned",
    icon: ic("done"),
  },
  "for-sale": {
    text: "For Sale",
    icon: ic("shopping_cart"),
  },
  "looking-for": {
    text: "Looking For",
    icon: ic("search"),
  },
  "for-trade": {
    text: "For Trade",
    icon: ic("spa"),
  },
};

export type PreviewType = keyof typeof PreviewType;

interface PreviewItemProps {
  title: string;
  subtitle?: string;
  src: string;
  type?: PreviewType;
  crop?: string;
}

function throttle<T extends (...args: any[]) => void>(fn: T, limit: number): T {
  let lastCall = 0;
  let trailingTimer: ReturnType<typeof setTimeout> | null = null;

  return function (...args: Parameters<T>) {
    const now = Date.now();
    const remaining = limit - (now - lastCall);

    if (trailingTimer) clearTimeout(trailingTimer);

    if (remaining <= 0) {
      lastCall = now;
      fn(...args);
    } else {
      // Schedule a trailing call for when it goes quiet
      trailingTimer = setTimeout(() => {
        lastCall = Date.now();
        trailingTimer = null;
        fn(...args);
      }, remaining);
    }
  } as T;
}

export const PinItem = (props: PreviewItemProps) => {
  const location = useLocation();
  let imgContainerRef: HTMLDivElement | undefined;
  const [loaded, setLoaded] = createSignal(false);
  const [imgSize, setImgSize] = createSignal<{ w: number; h: number } | null>(
    null,
  );
  const [viewportSize, setViewportSize] = createSignal<{
    w: number;
    h: number;
  }>();

  const handleResize = throttle(() => {
    if (imgContainerRef) {
      setViewportSize({
        w: imgContainerRef.clientWidth,
        h: imgContainerRef.clientHeight,
      });
    }
  }, 100);

  onMount(() => {
    if (imgContainerRef) {
      setViewportSize({
        w: imgContainerRef.clientWidth,
        h: imgContainerRef.clientHeight,
      });
    }
    window.addEventListener("resize", handleResize);
  });
  onCleanup(() => {
    window.removeEventListener("resize", handleResize);
  });

  const crop = () => {
    if (!props.crop) {
      return {
        "background-image": `url(${props.src})`,
        "background-repeat": "no-repeat",
        "background-size": "cover",
        "background-position": "center",
      };
    }

    const size = imgSize();
    if (!size) return undefined;

    const [x, y, w, h] = props.crop.split(" ").map(Number);

    const viewportW = viewportSize()?.w ?? 200;
    const viewportH = viewportSize()?.h ?? 200;

    // Scale so the crop region fills the 200x200 viewport
    const scaleX = viewportW / w;
    const scaleY = viewportH / h;

    const scaledW = size.w * scaleX;
    const scaledH = size.h * scaleY;

    // Offset so the crop origin aligns to the top-left of the viewport
    const offsetX = -(x * scaleX);
    const offsetY = -(y * scaleY);

    return {
      "background-image": `url(${props.src})`,
      "background-repeat": "no-repeat",
      "background-size": `${scaledW}px ${scaledH}px`,
      "background-position": `${offsetX}px ${offsetY}px`,
    };
  };
  return (
    <A
      href={location.pathname + "#preview=" + props.src}
      noScroll
      class={style.container}
    >
      <div class={style.imageContainer} ref={imgContainerRef}>
        <img
          onload={(e) => {
            const img = e.currentTarget;
            setImgSize({ w: img.naturalWidth, h: img.naturalHeight });
            setLoaded(true);
          }}
          style={{ display: "none" }}
          src={props.src}
          alt="preview"
        />
        <div
          class={`${style.image} ${viewportSize() && loaded() ? style.loaded : ""}`}
          style={crop()}
        ></div>
      </div>
      <div class={style.details}>
        <div class={style.innerDetails}>
          <div class={style.title}>{props.title}</div>
          <Show when={props.subtitle?.trim()}>
            <div class={style.subtitle}>{props.subtitle}</div>
          </Show>
        </div>
        <Show when={props.type}>
          <div
            style={{
              "--color": `var(--${props.type})`,
              "--color-text": `var(--${props.type}-text)`,
            }}
            class={style.itemStatusOverlay}
          >
            <Icon class={style.icon}>{PreviewType[props.type!].icon}</Icon>
            <div class={style.text}>{PreviewType[props.type!].text}</div>
          </div>
        </Show>
      </div>
    </A>
  );
};
