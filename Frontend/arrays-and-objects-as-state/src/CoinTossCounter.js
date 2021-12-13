import React, { useState } from "react";

function CoinTossCounter() {
  const [results, setResults] = useState([]);
  const [counts, setCounts] = useState({ H: 0, T: 0 });
  const handleClick = (value) => {
    setResults([...results, value]);
    setCounts({
      ...counts,
      [value]: counts[value] + 1,
    });
    console.log(counts);
  };
  const listResult = results.map((result, index) => (
    <li key={index} style={{ listStyle: "none" }}>
      {result === "H" ? "Heads" : "Tails"}
    </li>
  ));
  const handleDeleteLast = () => {
    const last = results[results.length - 1];
    const list = results.slice(0, -1);

    setResults(list);
    if (last) {
      setCounts({
        ...counts,
        [last]: counts[last] - 1,
      });
    }
  };
  return (
    <section>
      <div>
        <button onClick={() => handleClick("H")}>Heads</button>
        <button onClick={() => handleClick("T")}>Tails</button>
        <button onClick={handleDeleteLast}>Delete Last</button>
      </div>
      <ul>
        <li>Heads: {counts["H"]}</li>
        <li>Tails: {counts["T"]}</li>
      </ul>
      <ul>{listResult}</ul>
    </section>
  );
}

export default CoinTossCounter;
