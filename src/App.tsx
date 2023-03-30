import React from "react";
import { useAtom } from "jotai";
import "./App.css";
import { countAtom } from "./store/atoms";
import Box from "./components/Box";

function App() {
  const [numberAtom, setNumberAtom] = useAtom(countAtom);

  return (
    <div className="App">
      <div>
        <Box />
      </div>
      <div>
        <div>{numberAtom}</div>
        <div>
          <button onClick={() => setNumberAtom((prev) => prev + 1)}>
            증가
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
