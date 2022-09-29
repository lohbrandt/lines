// import { useStation } from "../../../hooks/useStation";

/* eslint-disable jsx-a11y/no-redundant-roles */
type StationConnectionsProps = {
  // currentStation?: number;
  // data?: string[];
  // setLine?: (id: number) => void;
  line?: any;
  station?: any;
};

export const StationConnection = (props: StationConnectionsProps) => {
  // const { currentStation, data, setStation } = props;
  const { line, station } = props;
  console.info(line, station);

  // const { data } = useStation();
  // console.info(data({ line, station }));

  return (
    <div className="lines-connections">
      <h3>Station AAA</h3>
      <div className="lines-connection__access">
        <label>Access to</label>
        <div>
          <ul role="list" className="access-list">
            <li>
              <button
                className="cta line-select"
                style={{ backgroundColor: "orange" }}
              >
                <label>U4</label>
              </button>
            </li>
            <li>
              <button
                className="cta line-select"
                style={{ backgroundColor: "orange" }}
              >
                <label>U5</label>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h4>Next 3 Stops</h4>
        <ul role="list" className="next-list">
          <li>Station AAA</li>
          <li>Station BBB</li>
          <li>Station CCC</li>
        </ul>
      </div>
    </div>
    // <div className="lines-stations">
    //   {data && (
    //     <ul role="list" className="stations-list">
    //       {data.map((station, idx) => (
    //         <StationItem
    //           active={currentStation}
    //           setStationItem={setStation}
    //           id={idx}
    //           key={idx}
    //           name={station}
    //         />
    //       ))}
    //     </ul>
    //   )}
    // </div>
  );
};
