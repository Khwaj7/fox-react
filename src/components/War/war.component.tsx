import { Card, Typography } from "@mui/joy";
import { War, Winner } from "../../modules/models/war";
import "./war.style.css";
import { useState } from "react";

interface WarComponentProps {
  war: War;
}

export function WarComponent(props: WarComponentProps): JSX.Element {
  const { war } = props;
  const [maps, setMaps] = useState<string[]>([]);
  var startDate = new Date(war.conquestStartTime!);
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
    </>
  );
}
