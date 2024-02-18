import { fetchWar } from "../../modules/apis/war.endpoint";
import type { War } from "../../modules/models/war";

interface IParams {
  setWar: (war: War) => void;
  selectedLive: number;
}

export function useWar(props: IParams) {
  const { setWar, selectedLive } = props;

  async function getWar(): Promise<void> {
    console.log(`selectedLive: ${selectedLive}`);
    
    const response = await fetchWar({ live:selectedLive });

    setWar(response);
  }

  return { getWar };
}
