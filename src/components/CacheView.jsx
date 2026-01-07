const CacheView = ({ cache }) => {
  return (
    <div className="cache-visual">
      {cache.map((item, index) => (
        <div key={index} className="cache-node-wrapper">
          <div className="cache-node">
            <div className="key">Key: {item.key}</div>
            <div className="value">Val: {item.value}</div>
          </div>

          {index !== cache.length - 1 && (
            <div className="arrow">→</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CacheView;
