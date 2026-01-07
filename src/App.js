import { useState } from "react";
import LRUCache from "./logic/LRUCache";
import Controls from "./components/Controls";
import CacheView from "./components/CacheView";
import "./App.css";

function App() {
  const [capacity, setCapacity] = useState(3);
  const [cacheObj, setCacheObj] = useState(new LRUCache(3));
  const [cacheState, setCacheState] = useState([]);

  const [keyInput, setKeyInput] = useState("");
  const [valueInput, setValueInput] = useState("");
  const [result, setResult] = useState("");

  const resetCache = () => {
    const newCache = new LRUCache(Number(capacity));
    setCacheObj(newCache);
    setCacheState([]);
    setResult("");
  };

  const handlePut = () => {
    if (keyInput === "" || valueInput === "") return;
    cacheObj.put(Number(keyInput), Number(valueInput));
    setCacheState(cacheObj.getCacheState());
    setResult(`PUT (${keyInput}, ${valueInput}) executed`);
  };

  const handleGet = () => {
    if (keyInput === "") return;
    const res = cacheObj.get(Number(keyInput));
    setCacheState(cacheObj.getCacheState());

    if (res === -1) {
      setResult(`GET (${keyInput}) → Key not found`);
    } else {
      setResult(`GET (${keyInput}) → Value = ${res}`);
    }
  };

  return (
    <div className="app">
      <h1>LRU Cache Visualizer</h1>

      <Controls
        capacity={capacity}
        setCapacity={setCapacity}
        keyInput={keyInput}
        setKeyInput={setKeyInput}
        valueInput={valueInput}
        setValueInput={setValueInput}
        onPut={handlePut}
        onGet={handleGet}
        onReset={resetCache}
      />

      <div className="layout">
        <div className="left-panel">
          <h3>Cache State (MRU → LRU)</h3>
          <CacheView cache={cacheState} />
        </div>

        <div className="right-panel">
          <h3>Operation Result</h3>
          <div className="result-box">{result || "—"}</div>

          <h3>Time Complexity</h3>
          <div className="tc-box">O(1) for GET & PUT</div>
        </div>
      </div>
    </div>
  );
}

export default App;
