import { fetchWar } from "../../modules/apis/war.endpoint";
import type { War } from "../../modules/models/war";

interface IParams {
  setWar: (war: War) => void;
  setFetchError: (error: string) => void;
  setOpen: (open: boolean) => void;  
}

export function useWar(props: IParams) {
  const { setWar, setFetchError, setOpen } = props;

  async function getWar(selected: number): Promise<void> {
    console.log(`selectedLive: ${selected}`);

    try {
      const response = await fetchWar({ live: selected });
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
