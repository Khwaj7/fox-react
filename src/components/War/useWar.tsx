import { fetchWar } from "../../modules/apis/war.endpoint";
import type { War } from "../../modules/models/war";

export function useWar() {
 async function getWar(): Promise<void> {
    // use war.endpoint to fetch war
    const war: War = await fetchWar();
  };

  return { getWar };
}
