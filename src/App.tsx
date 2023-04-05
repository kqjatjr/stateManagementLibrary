import { useState } from "react";
import "./App.css";
import useStore from "./store/store";

function App() {
  const [targetNumber, setTargetNumber] = useState(0);
  const { count, increment, initCount, incrementByNumber } = useStore(
    (state) => state,
  );
  return (
    <div className="App">
      <div>카운트 : {count}</div>
      <div>
        <button onClick={() => initCount()}>초기화</button>
        <button onClick={() => increment()}>증가</button>
        <div>
          <input
            placeholder="증가시킬 숫자"
            type="number"
            onChange={(e) => {
              setTargetNumber(Number(e.target.value));
            }}
          />
          <button onClick={() => incrementByNumber(targetNumber)}>
            증가(target)
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
