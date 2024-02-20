import { useState } from "react";
import "./App.css";
import { useWar } from "./components/War/useWar";
import { War } from "./modules/models/war";
import Button from "@mui/joy/Button";
import "@fontsource/inter";
import ButtonGroup from "@mui/joy/ButtonGroup";
import { Snackbar, SnackbarOrigin } from "@mui/joy";

interface SnackbarState extends SnackbarOrigin {
  open: boolean;
}

function App() {
  const [selectedLive, setSelectedLive] = useState(1);
  const [fetchError, setFetchError] = useState("");
  const [war, setWar] = useState({} as War);

  const [open, setOpen] = useState(false);

  const { getWar } = useWar({ setWar, selectedLive, setFetchError, setOpen });

  return (
    <>
      <ButtonGroup variant="soft">
        <Button onClick={() => setSelectedLive(1)}>LIVE-1</Button>
        <Button onClick={() => setSelectedLive(2)}>LIVE-2</Button>
        <Button onClick={() => setSelectedLive(3)}>LIVE-3</Button>
      </ButtonGroup>
      <Button variant="solid" onClick={() => getWar()}>
        Get warID
      </Button>
      <p>{war.warId}</p>
      {fetchError && (
        <Snackbar color="danger" open={open}>
          {fetchError}
        </Snackbar>
      )}
    </>
  );
}

export default App;
