import express from "express";
import { getAccessibleLines } from "../domain/getAccessibleLines";
import { getLineByName } from "../domain/getLineByName";
import { getLines } from "../domain/getLines";
import { getNextStops } from "../domain/getNextStops";
import { Direction } from "../domain/types";
import { TypedRequestQuery } from "./types";

interface HomeQuery {
  id: string;
  line: string;
  station?: string;
  n?: string;
  direction?: string;
}

const router = express.Router();

const homeController = async (
  req: TypedRequestQuery<{
    line: string;
    station?: string;
    n?: string;
    direction?: Direction;
  }>,
  res: express.Response
): Promise<void> => {
  const {
    line: lineName,
    station,
    n = "3",
    direction = Direction.Forward,
  } = req.query;
  const nextCount = parseInt(n);
  if (!lineName) {
    res.status(400).json({ success: false, msg: "need line" });
    return;
  }
  const line = getLineByName(lineName);
  if (!line) {
    res.status(400).json({ success: false, msg: "need a corrent line name" }); // TS: corrent? also, IMO this should be 404
    return;
  }
  if (!station) {
    res.status(200).json({ sucess: false, msg: "need station" }); // TS: we shouldn't return 200 in this case
    return;
  }
  const lines = getLines();
  const nextStops = getNextStops(line, station, direction, nextCount);
  const connections = getAccessibleLines(line, station, lines);
  let simpleConnection;
  if (connections) {
    simpleConnection = connections.map((line) => {
      return { name: line.name, color: line.color };
    });
  } else {
    simpleConnection = undefined; // TS: why not return an empty array? IMO that's easier since you don't need to specially handle the undefined case
  }
  res.status(200).json({
    success: true, // TS: why have a 'success' field at all in the payload? IMO that's redundant and should be managed by the status code alone
    connections: simpleConnection,
    line,
    station,
    n,
    direction,
    nextStops,
  });
};

router.get(
  "/",
  /**
   * returns an array of line information from the route "/"":
   *
   * ```json
   * {
   *  "name": "string";
   *  "color": "string";
   * }
   * ```
   */
  homeController
);

// TODO: add further routes here

export const homeRoutes = router;
