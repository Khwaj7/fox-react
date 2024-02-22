import { fetchMaps } from "../../modules/apis/map.endpoint";

interface IParams {
  liveServer: number;
  setMaps: (maps: string[]) => void;
  setFetchError: (error: string) => void;
}

export function useMaps(params: IParams) {
  const { liveServer, setMaps, setFetchError } = params;
  
  async function getMaps(): Promise<void> {
    try {
      const response = await fetchMaps({ live: liveServer });
      setMaps(response as string[]);
    } catch (error) {
      console.error(error);
      setFetchError(`${error}`);
      setMaps([]);
    }
  }
}
