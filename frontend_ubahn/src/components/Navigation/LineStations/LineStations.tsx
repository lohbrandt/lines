import { StationItem } from "./StationItem";

/* eslint-disable jsx-a11y/no-redundant-roles */
type LineStationsProps = {
  currentStation?: number;
  data?: string[];
  setStation: (id: number) => void;
};

export const LineStations = (props: LineStationsProps) => {
  const { currentStation, data, setStation } = props;

  return (
    <div className="lines-stations">
      {data && (
        <ul role="list" className="stations-list">
          {data.map((station, idx) => (
            <StationItem
              active={currentStation}
              setStationItem={setStation}
              id={idx}
              key={idx}
              name={station}
            />
          ))}
        </ul>
      )}
    </div>
  );
};
