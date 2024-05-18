# React + TypeScript + Vite

## What's this?

This is a react + vite starter template but uses tenoxui css framework for styling.

## How's it looks like

This is how the new style looks like :

```js
import tenoxui, { use, makeStyles } from "tenoxui";
import property from "@tenoxui/property";

const styles = () => {
  use(property);

  makeStyles({
    body: "m-0 d-flex place-items-center w-mn-320px h-mn-100vh",
    "#root": "w-mx-1280px mh-auto"
    // more styles
  });

  tenoxui();
};
```

Here's the breakdown :

1. Import all necessary module

```js
import tenoxui, { use, makeStyles } from "tenoxui";
import property from "@tenoxui/property";
```

2. What is `property`?

```js
import property from "@tenoxui/property";

const styles = () => {
  use(property);

  // other code
};
```

`property` can optionally imported if you don't wanna re-define your types and properties manually. The `property` is basically bunch of types and properties that already defined before and you can just include it to your project.

3. `use` function

`use` is a function can store your types and properties. It will make sure the functions like `makeStyles()` and `tenoxui()` knows which class names they need to process or can processed.

```js
use({ c: "color", fs: "fontSize" });
```

After added some types and properties inside of it, you can immediately use the types as prefix class to your element :

```html
<h1 class="c-#ccf654 fs-3rem">Hello World!</h1>
```

4. `makeStyles` function

```js
makeStyles({
  body: "bg-red",
  "p.text": "fs-0.8rem"
  // more
});
```

This function allows you to give styles using specific selectors.

5. Applying the styles

```jsx
import { useLayoutEffect } from "react";

function App() {
  useLayoutEffect(() => {
    tenoxui({ c: "color", fs: "fontSize" });
  }, []);
  
  return <h1 className="c-#ccf654 fs-3rem">Hello World!</h1>
}
```

Not sure about this method, but it fast for developing your apps, styles will be applied to your element after a change to the className. The `useLayoutEffect`very rarely used rather than `useEffect`. But, since tenoxui is using DOM to handle the styling, `useLayoutEffect` make sure the style applied at the right time. Thanks :D

## Getting Started with TenoxUI

### Add tenoxui to your project

Install tenoxui using npm or whatever you have :

```sh
npm i tenoxui --save-dev
```

### Include tenoxui to your project

Here's a simple configuration on your `App.jsx` file :

```jsx
import { useLayoutEffect } from "react";
import tenoxui from "tenoxui";

const App = () => {
  useLayoutEffect(() => {
    tenoxui({ c: "color" });
  }, []);

  return <h1 className="c-#ccf654">Hello World!</h1>;
};

export default App;
```

## Resources

- React : https://react.dev
- Vite : https://vitejs.dev
- Typescript : https://www.typescriptlang.org
- TenoxUI : https://tenoxui.web.app
