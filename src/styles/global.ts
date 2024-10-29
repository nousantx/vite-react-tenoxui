export const globalStyles = {
  // default styles for all elements
  ':root': `
  text-$root-color
  bg-$root-back
  family-[Inter,_system-ui,_Avenir,_Helvetica,_Arial,_sans-serif]
  lh-1.5 fw-400
  [color-scheme]-[light_dark]
  [font-synthesis]-none
  [text-rendering]-optimizeLegibility
  [-webkit-font-smoothing]-antialiased
  [-moz-osx-font-smoothing]-grayscale
  `,
  body: 'm-0 d-flex pc-i-center w-mn-320px h-mn-100vh',
  main: 'pn-relative',
  a: 'fw-500 [--old-text]-#646cff text-inherit hover:text-$primary td-inherit',
  button: `
  br-8px bdr-[1px_solid_transparent] hover:bdr-[1px_solid_var(--primary)]
  px-1.2em py-0.6em
  fs-1em fw-500
  family-inherit
  bg-$button-color
  cursor-pointer
  tr-prop-border-color tr-time-0.25s
  `,
  // App.css
  '#root': 'w-100% w-mx-1280px h-mn-100vh mx-auto ta-center pn-relative d-flex flex-parent-center',
  // custom class names
  '.logo': 'h-6rem p-1.5rem [will-change]-filter tr-[filter_300ms]',
  '.gray-logo': 'tr-prop-all tr-time-0.3s [filter]-[grayscale(100%)] hover:[filter]-[grayscale(0)]'
}
