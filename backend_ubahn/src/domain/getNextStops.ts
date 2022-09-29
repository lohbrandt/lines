import { Direction, Line } from "./types";

/**
 * Computes which stations of a given line follow next after a given station
 *
 * @returns the next `nStops` stations of `line`, counting from `fromStation` and in direction `direction`
 */

export function getNextStops(
  line: Line,
  /**
   * which station within `line` to base the computation on
   */
  fromStation: string,
  /**
   * if `forward`, returns the stations that follow `fromStation` in the `line.stations` array.
   *
   * if `backward`, returns the stations that precede `fromStation` in the `line.stations` array.
   */
  direction: Direction = Direction.Forward,
  /**
   * the maximum number of stops that should be returned
   */
  nStops: number = 3
): string[] {
  if (!line || !fromStation)
    throw new Error(`No line ${line} with stattion ${fromStation} avalible`);
  const stationId = line.stations.indexOf(fromStation);
  if (stationId === -1)
    throw new Error(`No line ${line} with stattion ${fromStation} avalible`);
  const stations = line.stations;
  if (direction === Direction.Forward)
    return stations.slice(stationId + 1, stationId + 1 + nStops);
  else {
    const reverseStations = stations.reverse();
    return reverseStations.slice(stations.length - stationId, nStops + 1);
  }
}
