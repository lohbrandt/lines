import { lines } from "../data";

export const getLineByName = (name: string) =>
  lines.find((line) => (line.name = name));
