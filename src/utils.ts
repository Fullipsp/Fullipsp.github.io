import { onCleanup } from "solid-js";

export const createThrottledResize = (callback: () => void): (() => void) => {
  let frameId: number | null = null;

  const throttled = () => {
    if (frameId !== null) return;

    frameId = requestAnimationFrame(() => {
      callback();
      frameId = null;
    });
  };

  onCleanup(() => {
    if (frameId !== null) {
      cancelAnimationFrame(frameId);
    }
  });

  return throttled;
};
