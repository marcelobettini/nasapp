import { useState } from "react";
import { API_KEY } from "../API";
import { useGet } from "../hooks/useGet";

import "./App.css";

function App() {
  const [rover, setRover] = useState("");
  const [sol, setSol] = useState(1);
  const [endpoint, setEndpoint] = useState("");
  const [data, error, loading] = useGet(endpoint);

  return (
    <>
      <select
        name="rover"
        id="rover"
        defaultValue={"choose"}
        onChange={(e) => setRover((prev) => (prev = e.target.value))}
      >
        <option
          value="choose"
          disabled
          onChange={(e) => setSol((prev) => (prev = e.target.value))}
        >
          SELECT ROVER
        </option>
        <option value="curiosity">Curiosity</option>
        <option value="opportunity">Opportunity</option>
        <option value="spirit">Spirit</option>
      </select>
      <input
        type="number"
        name="sol"
        id="sol"
        onChange={(e) => setSol((prev) => (prev = e.target.value))}
      />
      <button
        onClick={() => {
          setEndpoint(
            (prev) => (prev = `/${rover}/photos/?sol=${sol}&api_key=${API_KEY}`)
          );
        }}
      >
        go
      </button>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error</h1>}
      {data && data.photos.map((el) => <img src={el.img_src} />)}
    </>
  );
}

export default App;
