import axios from "axios";
import { useState } from "react";
import { UndergroundLines } from "../types";

export type StationOptions = {
  line: UndergroundLines;
  station: string;
};

export const useStation = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | undefined>(undefined);

  async function getStation(options: StationOptions) {
    try {
      const { line, station } = options;

      setError(undefined);
      setIsLoading(true);

      const url = `http://localhost:8080/?line=${line}&station=&{station}`;
      console.log(url);
      //decodeURI(
      const response = await axios.get(url);
      return response;
    } catch (error: any) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  return {
    isLoading,
    error,
    data: getStation,
  };
};
