import { useState, useLayoutEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { styler } from './styles'
import { Line } from './components/Line'

function App() {
  const [count, setCount] = useState(0)
  styler()

  return (
    <>
      <Line />
      <main className="pn-relative">
        <div>
          <a href="https://vite.dev" target="_blank" className="gray-logo">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" className="gray-logo">
            <img
              src={reactLogo}
              className="logo [filter,anim]-none hover:[filter]-[drop-shadow(0_0_2em_#61dafbaa)] hover:anim-[logo-spin_infinite_20s_linear]"
              alt="React logo"
            />
          </a>
        </div>
        <h1 className="fs-3.2rem lh-1 text-#777">Vite + React</h1>
        <div className="p-2rem">
          <button className="btn" onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="text-#888">Click on the Vite and React logos to learn more</p>
      </main>
    </>
  )
}

export default App
