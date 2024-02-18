import { fetchWar } from "../../modules/apis/war.endpoint";
import type { War } from "../../modules/models/war";

interface IParams {
  setWar: (war: War) => void;
  selectedLive: number;
}

export function useWar(props: IParams) {
  const { setWar } = props;
  async function getWar(): Promise<void> {
    // use war.endpoint to fetch war
    const response = await fetchWar();

    setWar(response);
  }

  return { getWar };
}
