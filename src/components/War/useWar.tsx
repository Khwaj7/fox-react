import { fetchWar } from "../../modules/apis/war.endpoint";
import type { War } from "../../modules/models/war";

interface IParams {
  setWar: (war: War) => void;
  selectedLive: number;
  setFetchError: (error: string) => void;
  setOpen: (open: boolean) => void;  
}

export function useWar(props: IParams) {
  const { setWar, selectedLive, setFetchError, setOpen } = props;

  async function getWar(): Promise<void> {
    console.log(`selectedLive: ${selectedLive}`);

    try {
      const response = await fetchWar({ live: selectedLive });
      setWar(response);
    } catch (error) {
      console.error(error);
      setFetchError(`${error}`);
      setWar({} as War);
      setOpen(true);
    }
  }

  return { getWar };
}
