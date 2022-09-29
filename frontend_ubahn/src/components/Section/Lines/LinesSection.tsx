/* eslint-disable jsx-a11y/no-redundant-roles */
import { useState } from "react";
import { useLines } from "../../../hooks/useLines";
import { LinesNav } from "../../Navigation";
import { LineStations } from "../../Navigation/LineStations/LineStations";
import { StationConnection } from "../../Navigation/LineStations/StationConnections";

type LinesSectionProps = {};

export const LinesSection = (props: LinesSectionProps) => {
  const { data: Lines } = useLines();
  const [currentLine, setLine] = useState<number>(0);
  const [currentStation, setStation] = useState<number>(0);

  return (
    <section aria-labelledby="lines-title" className="lines">
      <h1 id="lines-title" className="lines__title">
        Lines Example
      </h1>
      {Lines && (
        <div className="card card__lines">
          <LinesNav currentLine={currentLine} data={Lines} setLine={setLine} />
          <LineStations
            currentStation={currentStation}
            data={Lines[currentLine].stations}
            setStation={setStation}
          />
          <StationConnection
            line={Lines[currentLine].name}
            station={Lines[currentLine].stations[currentStation]}
          />
        </div>
      )}
    </section>
  );
};
