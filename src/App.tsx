import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { useStyles } from "./styles/lib/useStyles";
import { Line } from "./components/Line";

function App() {
  const [count, setCount] = useState(0);
  useStyles();
  return (
    <>
      <Line />

      <main>
        <div>
          <a href="https://vitejs.dev" target="_blank" className="gray-logo">
            <img src={viteLogo} className="logo" alt="Vite logo " />
          </a>
          <a href="https://react.dev" target="_blank" className="gray-logo">
            <img src={reactLogo} className="logo react" alt="React logo " />
          </a>
        </div>

        <h1 className="tc-#777">
          Vite + React
        </h1>
        <div className="card">
          <button onClick={() => setCount(count => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </main>
    </>
  );
}

export default App;
