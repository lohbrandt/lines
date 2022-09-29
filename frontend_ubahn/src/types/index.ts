export type UndergroundLines =
  | "U1"
  | "U2"
  | "U3"
  | "U4"
  | "U5"
  | "U6"
  | "U7"
  | "U8"
  | "U9";

export enum Direction {
  Forward = "forward",
  Backward = "backward",
}

export enum LineType {
  /** if a linear line reaches the end station, the car turns over and runs the line backward.
   * if it reaches the starting station, it changes direction again */
  Linear = "linear",
  /**
   * a cyclic line runs in circles, i.e. if it reaches the end station it does not change direction but continues with the starting station.
   */
  Cyclic = "cyclic",
}

export type Line = {
  /** name of the line, can be used as an ID */
  name: string;
  /** the brand color to display the line with */
  color: string;
  /** ignore this for now */
  type: LineType;
  /** the stations corresponding to that line */
  stations: string[];
};
