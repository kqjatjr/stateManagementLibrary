import React from "react";
import { useAtom } from "jotai";
import "./App.css";
import { countAtom } from "./store/atoms";

function App() {
  const [numberAtom, setNumberAtom] = useAtom(countAtom);

  return (
    <div className="App">
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
