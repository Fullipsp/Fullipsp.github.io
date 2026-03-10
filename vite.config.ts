import { defineConfig, type Plugin } from "vite";
import solid from "vite-plugin-solid";

const IconRegex = /<Icon\b[^>]*>([^{}<]+)<\/Icon>/g;
const IconFuncRegex = /ic\("([^"]+)"\)/g;

const icons = (): Plugin => {
  let iconSet = new Set<string>();
  let isDev = false;

  return {
    name: "icons",
    enforce: "pre",

    configResolved(config) {
      isDev = config.command === "serve";
    },
    transform(code) {
      for (const match of code.matchAll(IconRegex)) {
        iconSet.add(match[1]);
      }

      for (const match of code.matchAll(IconFuncRegex)) {
        iconSet.add(match[1]);
      }
    },
    transformIndexHtml() {
      const base = `https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200`;
      const url = isDev
        ? base
        : `${base}&icon_names=${[...iconSet].sort().join(",")}&display=swap`;

      return [
        {
          tag: "link",
          attrs: { rel: "preconnect", href: "https://fonts.googleapis.com" },
          injectTo: "head",
        },
        {
          tag: "link",
          attrs: {
            rel: "preconnect",
            href: "https://fonts.gstatic.com",
            crossorigin: "",
          },
          injectTo: "head",
        },
        {
          tag: "link",
          attrs: {
            rel: "stylesheet",
            href: url,
            media: "print",
            onload: "this.media='all'",
          },
          injectTo: "head",
        },
      ];
    },
  };
};

export default defineConfig({
  plugins: [icons(), solid()],
  server: {
    allowedHosts: true,
  },
});
