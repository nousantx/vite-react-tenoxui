import tenoxui, { use, makeStyles, applyHovers } from "tenoxui";
import property from "@tenoxui/property";

export function styles() {
  // define types and properties
  use(property, {
    animation: "animation",
    "anim-name": "animationName",
    "anim-time": "animationDuration",
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
    main: "position-relative",
    a: "fw-500 tc-#646cff td-inherit",
    h1: "fs-3.2em lh-1.1",
    button:
      "br-8px bw-1px bs-solid bc-transparent px-1.2em py-0.6em fs-1em fw-500 family-inherit back-c-$button-color cursor-pointer tr-prop-[border-color] tr-time-0.25s",
    // app.css
    "#root":
      "w-100% w-mx-1280px h-mn-100vh mx-auto ta-center position-relative d-flex flex-parent-center",
    ".card": "p-2em",
    ".read-the-docs": "tc-#888",
    ".line": "bg-#b6bdc630 position-absolute",
    ".line-y": "w-1px h-100% t-0",
    ".line-x": "h-1px w-100% l-0 r-0",
    ".line-anim": {
      "": "box-100% position-relative d-flex jc-center",
      ".x": "w-$line-size h-1px bg-$primary position-absolute br-0 blur-0 animation-[line-x\\_infinite\\_30s\\_linear]",
      ".y": "h-$line-size w-1px bg-$primary position-absolute br-0 blur-0 animation-[line-y\\_infinite\\_20s\\_linear]"
    },
    // re-usable class
    ".flex-center": "d-flex flex-parent-center"
  });

  // hover handler 😁
  applyHovers({
    button: ["bc-transparent", "bc-$primary"],
    a: ["tc-inherit", "tc-$primary"],
    ".logo": [
      "filter-none",
      "filter-[drop-shadow(0\\_0\\_\\_2em\\_#646cffaa)]",
      "h-6rem p-1.5rem wl-ch-filter transition-[filter\\_300ms]"
    ],
    ".logo.react": [
      "filter-none animation-none",
      "filter-[drop-shadow(0\\_0\\_\\_2em\\_#61dafbaa)] animation-[logo-spin\\_infinite\\_20s\\_linear]"
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
