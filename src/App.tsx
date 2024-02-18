import { useState } from "react";
import "./App.css";
import { useWar } from "./components/War/useWar";
import { War } from "./modules/models/war";
import Button from "@mui/joy/Button";
import "@fontsource/inter";

function App() {
  const [selectedLive, setSelectedLive] = useState(1);
  const [war, setWar] = useState({} as War);

  const { getWar } = useWar({ setWar, selectedLive });

  //getWar({ setWar });

  return (
    <>
      <div>
        <button onClick={() => setSelectedLive(1)}>LIVE-1</button>
        <button onClick={() => setSelectedLive(2)}>LIVE-2</button>
        <button onClick={() => setSelectedLive(1)}>LIVE-3</button>
      </div>
      <Button variant="solid" onClick={() => getWar()}>{war.warId}</Button>
    </>
  );
}

export default App;
