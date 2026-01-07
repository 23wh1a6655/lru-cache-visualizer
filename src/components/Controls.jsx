const Controls = ({
  capacity,
  setCapacity,
  keyInput,
  setKeyInput,
  valueInput,
  setValueInput,
  onPut,
  onGet,
  onReset
}) => {
  return (
    <div className="controls">
      <input
        type="number"
        placeholder="Cache Capacity"
        value={capacity}
        onChange={(e) => setCapacity(e.target.value)}
      />

      <input
        type="number"
        placeholder="Key"
        value={keyInput}
        onChange={(e) => setKeyInput(e.target.value)}
      />

      <input
        type="number"
        placeholder="Value"
        value={valueInput}
        onChange={(e) => setValueInput(e.target.value)}
      />

      <button className="put-btn" onClick={onPut}>
        PUT
      </button>

      <button className="get-btn" onClick={onGet}>
        GET
      </button>

      <button className="reset-btn" onClick={onReset}>
        Reset Cache
      </button>
    </div>
  );
};

export default Controls;
