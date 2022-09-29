import { Line } from "./types";

/**
 * returns an array of `Line`s that are accessible from the station with name `fromStation`.
 *
 * @returns all lines that are accessible on station `fromStation` in line `onLine`, except `onLine` itself
 */

export function getAccessibleLines(
  onLine: Line,
  fromStation: string,
  allLines: Line[]
): Line[] {
  const currentLineName = onLine.name;
  const accessibleLines = allLines.filter(
    (line) =>
      line.name != currentLineName && line.stations.includes(fromStation)
  );
  return accessibleLines;
}
