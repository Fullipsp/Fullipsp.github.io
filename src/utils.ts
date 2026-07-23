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



export const websiteUpdatedAt = (split?: boolean) => {
  const timestamp = import.meta.env.VITE_UPDATED_AT;


  const date = !timestamp ? new Date() : new Date(parseInt(timestamp));

  const datePart = date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const timePart = date.toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });

  return `Website last updated:${split ? "\n" : " "}${datePart} at ${timePart}`;
}