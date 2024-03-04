import { getWarServiceUrl } from "./foxhole.endpoint";

interface IParams {
  live: number;
}

export async function fetchMaps(props: IParams): Promise<string[]> {
  const { live } = props;
  const response = await fetch(
    `${getWarServiceUrl({ live })}/worldconquest/maps`
  );

  const maps = (await response.json()) as string[];
  return maps;
}

export async function getWinner(map:Map) {
  
}
