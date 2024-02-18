import { useState } from "react";
import "./App.css";
import { useWar } from "./components/War/useWar";
import { War } from "./modules/models/war";
import Button from "@mui/joy/Button";
import "@fontsource/inter";
import ButtonGroup from '@mui/joy/ButtonGroup';
import Snackbar from '@mui/joy/Snackbar';


function App() {
  const [selectedLive, setSelectedLive] = useState(1);
  const [war, setWar] = useState({} as War);

  const { getWar } = useWar({ setWar, selectedLive });

  function retrieveWar() {
    
  }

  //getWar({ setWar });

  return (
    <>
      <ButtonGroup variant="soft">
        <Button onClick={() => setSelectedLive(1)}>LIVE-1</Button>
        <Button onClick={() => setSelectedLive(2)}>LIVE-2</Button>
        <Button onClick={() => setSelectedLive(3)}>LIVE-3</Button>
      </ButtonGroup>
      <Button variant="solid" onClick={() => getWar()}>Get warID</Button>
      <p>{war.warId}</p>
      <Snackbar color="danger" variant="solid" />
    </>
  );
}

export default App;
