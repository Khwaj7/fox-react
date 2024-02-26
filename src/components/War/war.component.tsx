import { Card, Snackbar, Typography } from "@mui/joy";
import { War, Winner } from "../../modules/models/war";
import "./war.style.css";
import { useEffect, useState } from "react";
import { useMaps } from "../Maps/useMaps";

interface WarComponentProps {
  war: War;
  selectedLive: number;
}

export function WarComponent(props: WarComponentProps): JSX.Element {
  const { war, selectedLive } = props;
  const [maps, setMaps] = useState<string[]>([]);
  const [fetchError, setFetchError] = useState("");
  const [open, setOpen] = useState(false);
  const { getMaps } = useMaps({
    liveServer: selectedLive,
    setMaps,
    setFetchError,
  });
  const startDate = new Date(war.conquestStartTime!);

  useEffect(() => {
    getMaps();
  }, [selectedLive]);

  return (
    <>
      <Card className="warComp" variant="outlined" sx={{ maxWidth: 400 }}>
        {war.conquestEndTime === null && (
          <Typography level="h1">
            War {war.warNumber} is still running
          </Typography>
        )}
        <Typography level="h2" fontSize="xl" sx={{ mb: 0.5 }}>
          Declaration of War: {startDate.toLocaleString()}
        </Typography>
        <Typography>
          Number of required towns to win: {war.requiredVictoryTowns}
        </Typography>
      </Card>
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
      {!fetchError && (
        <div className="hexagon-container">
          <div className="hexagon">
            <div className="hexagon-content">Hexagon 1</div>
          </div>
          <div className="hexagon">
            <div className="hexagon-content">Hexagon 2</div>
          </div>
          <div className="hexagon">
            <div className="hexagon-content">Hexagon 3</div>
          </div>
        </div>
      )}
    </>
  );
}
