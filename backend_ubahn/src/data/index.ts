/**
 * Contains the read raw data from `lines.json`.
 */

import { Line } from "../domain/types";

export const lines = require("./lines.json") as Line[];
