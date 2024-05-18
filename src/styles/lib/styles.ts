import tenoxui, { use, makeStyles, applyHovers } from "tenoxui";
import property from "@tenoxui/property";

export function styles() {
  // define types and properties
  use(property, {
    animation: "animation",
    bc: "borderColor",
    shadow: "dropShadow",
    "drop-shadow": "ftr",
    "wl-ch": "willChange",
    "place-items": "placeItems",
    "back-c": "backgroundColor",
    "font-synt": "fontSynthesis",
    "color-scheme": "colorScheme",
    "text-render": "textRendering",
    "web-font-smooth": "webkitFontSmoothing",
    "moz-font-smooth": "MozOsxFontSmoothing"
  });

  // styles using selector
  makeStyles({
    // index.css
    ":root":
      "tc-$root-color back-c-$root-back family-[Inter,\\_system-ui,\\_Avenir,\\_Helvetica,\\_Arial,\\_sans-serif] lh-1.5 fw-400 color-scheme-[light\\_dark] font-synt-none text-render-optimizeLegibility web-font-smooth-antialiased moz-font-smooth-grayscale",
    body: "m-0 d-flex place-items-center w-mn-320px h-mn-100vh",
    a: "fw-500 tc-#646cff td-inherit",
    h1: "fs-3.2em lh-1.1",
    button:
      "br-8px bw-1px bs-solid bc-transparent ph-1.2em pv-0.6em fs-1em fw-500 family-inherit back-c-$button-color cursor-pointer tr-prop-[border-color] tr-time-0.25s",
    // app.css
    "#root": "w-mx-1280px mh-auto p-2rem ta-center",
    ".card": "p-2em",
    ".read-the-docs": "tc-#888"
  });

  // hover handler 😁
  applyHovers({
    button: ["bc-transparent", "bc-#646cff"],
    a: ["tc-#646cff", "tc-$anchor-color"],
    ".logo": [
      "filter-none",
      "filter-[drop-shadow(0\\_0\\_\\_2em\\_#646cffaa)]",
      "h-6rem p-1.5rem wl-ch-filter transition-[filter\\_300ms]"
    ],
    ".logo.react": [
      "filter-none",
      "filter-[drop-shadow(0\\_0\\_\\_2em\\_#61dafbaa)]",
      "animation-[logo-spin\\_infinite\\_20s\\_linear]"
    ],
    ".gray-logo": [
      "grayscale-100%",
      "grayscale-0",
      "tr-prop-all tr-time-0.3s grayscale-100%"
    ]
  });

  // tenoxui init
  tenoxui();
}

const ts = () => {
  use(property);

  makeStyles({
    body: "m-0 d-flex place-items-center w-mn-320px h-mn-100vh",
    "#root": "w-mx-1280px mh-auto"
    // more styles
  });

  tenoxui();
};
