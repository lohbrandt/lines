/* eslint-disable jsx-a11y/no-redundant-roles */
import { Line } from "../../../types";
import { LineItem } from "./LineItem";
import "./LinesNav.css";

type LinesNavProps = {
  currentLine?: number;
  data?: Line[];
  setLine: (id: number) => void;
};

export const LinesNav = (props: LinesNavProps) => {
  const { currentLine, data, setLine } = props;

  return (
    <nav className="lines-nav">
      {data && (
        <ul role="list" className="lines-list">
          {data.map((line, idx) => (
            <LineItem
              active={currentLine}
              color={line.color}
              id={idx}
              key={idx}
              name={line.name}
              setLineItem={setLine}
            />
          ))}
        </ul>
      )}
    </nav>
  );
};
