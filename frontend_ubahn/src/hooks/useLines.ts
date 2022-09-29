import axios from "axios";
import { useEffect, useState } from "react";
import { Line, UndergroundLines } from "../types";

export type LinesOptions = {
  id?: UndergroundLines;
};

export const useLines = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | undefined>(undefined);
  const [lines, setLines] = useState<Line[] | undefined>(undefined);

  useEffect(() => {
    fetchData().then((r) => r);
  }, []);

  const fetchData = async () => {
    try {
      const url = "http://localhost:8080/lines/";
      const response = await axios.get(url);
      setIsLoading(true);
      setError(undefined);
      setLines(response.data);
    } catch (error: any) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    error,
    data: lines,
    refresh: fetchData,
  };
};
