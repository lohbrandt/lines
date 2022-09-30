import axios, { Method } from "axios";
import { useEffect, useState } from "react";

// TS: we use a similar pattern in our of our apps and it works quite well, however react-query seems to do a better job
// TS: also, this is not even used in this project
const useFetch = <T extends Partial<T>>(
  url: string,
  method: Method,
  body?: T
): [boolean, string | null, T | null] => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios({
          url: url,
          method: method,
          data: body,
        });
        const data = response?.data;
        setData(data);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData().then((r) => r);
  }, [url]);

  return [isLoading, error, data];
};

export { useFetch };
