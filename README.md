# React + TypeScript + Vite

## What's this?

This is a react + vite starter template but using tenoxui as styling framework.

## How's it looks like

This is how the new styles looks like :

```javascript
import { tenoxui, use, applyStyles } from 'tenoxui'
import { property } from '@tenoxui/property'

use({ property })
applyStyles({
  body: 'm-0 d-flex place-items-center w-mn-320px h-mn-100vh',
  '#root': 'w-mx-1280px mx-auto'
  // more styles
})
tenoxui()
```

Here's the breakdown :

1. Import all necessary module

```javascript
import { tenoxui, use, applyStyles } from 'tenoxui'
import { property } from '@tenoxui/property'
```

2. What is `property`?

```javascript
import { property } from '@tenoxui/property'

console.log(property)

// Output:
// {
//   bg: 'background',
//   p: 'padding',
//   px: ['paddingLeft', 'paddingRight'],
// }
```

`property` can optionally imported if you don't wanna rewrite your types and properties manually. The `property` is basically pre-defined types and properties (or shorthands) that ready to use.

3. `use` function

`use` is a function can store your tenoxui configuration. It will make sure the functions like `applyStyles()` and `tenoxui()`

```javascript
use({
  property: { c: 'color', fs: 'fontSize' },
  values: { full: '100%' }
})
```

After added some types and properties inside of it, you can immediately use the types as prefix class to your element :

```html
<h1 class="c-#ccf654 fs-3rem">Hello World!</h1>
```

4. `applyStyles` function

```javascript
applyStyles({
  body: 'bg-red',
  'p.text': 'fs-0.8rem'
  // more
})
```

This function allows you to give styles using specific selectors.

5. Applying the styles (React)

```javascript
import { useLayoutEffect } from 'react'

function App() {
  useLayoutEffect(() => {
    tenoxui({ c: 'color', fs: 'fontSize' })
  }, [])

  return <h1 className="c-#ccf654 fs-3rem">Hello World!</h1>
}
```

## Getting Started with TenoxUI

### Add tenoxui to your project

Install tenoxui using npm or whatever you have :

```sh
npm i tenoxui --save-dev
```

### Include tenoxui to your project

Here's a simple configuration on your `App.jsx` file :

```javascript
import { useLayoutEffect } from 'react'
import { tenoxui } from 'tenoxui'

const App = () => {
  useLayoutEffect(() => {
    tenoxui({ property: { c: 'color' } })
  }, [])

  return <h1 className="c-#ccf654">Hello World!</h1>
}

export default App
```

