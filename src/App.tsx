import { useState } from "react";
import "./App.css";
import { useWar } from "./components/War/useWar";
import { War } from "./modules/models/war";
import Button from "@mui/joy/Button";
import "@fontsource/inter";
import ButtonGroup from "@mui/joy/ButtonGroup";
import { Snackbar } from "@mui/joy";
import { WarComponent } from "./components/War/war.component";

function App() {
  const [selectedLive, setSelectedLive] = useState(1);
  const [fetchError, setFetchError] = useState("");
  const [war, setWar] = useState({} as War);

  const [open, setOpen] = useState(false);

  const { getWar } = useWar({ setWar, setFetchError, setOpen });

  const handleSelectLive = (selected: number) => {
    setSelectedLive(selected);
    getWar(selected);
  }

  return (
    <>
      <ButtonGroup variant="soft">
        <Button onClick={() => handleSelectLive(1)}>LIVE-1</Button>
        <Button onClick={() => handleSelectLive(2)}>LIVE-2</Button>
        <Button onClick={() => handleSelectLive(3)}>LIVE-3</Button>
      </ButtonGroup>
      {war && <WarComponent war={war} selectedLive={selectedLive} />}
      {fetchError && (
        <Snackbar
          color="danger"
          open={open}
          autoHideDuration={3000}
          onClose={() => setOpen(false)}
        >
          {fetchError}
        </Snackbar>
      )}
    </>
  );
}

export default App;
