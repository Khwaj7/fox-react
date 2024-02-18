import type { War } from "../models/war";
import { getWarServiceUrl } from "./foxhole.endpoint";

interface IParams {
  live: number;
}

export async function fetchWar(props: IParams): Promise<War> {
  const { live } = props;
  const response = await fetch(
    `${getWarServiceUrl({ live })}/worldconquest/war`
  );

  const war = (await response.json()) as War;
  return war;
}
