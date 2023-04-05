import "./App.css";
import useStore from "./store/store";

function App() {
  const { count, increment, initCount } = useStore((state) => state);
  return (
    <div className="App">
      <div>카운트 : {count}</div>
      <div>
        <button onClick={() => initCount()}>초기화</button>
        <button onClick={() => increment()}>증가</button>
      </div>
    </div>
  );
}

export default App;
