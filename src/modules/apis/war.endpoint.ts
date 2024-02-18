import type { War } from "../models/war";

export async function fetchWar(): Promise<War> {
    const response = await fetch('https://war-service-live.foxholeservices.com/api/worldconquest/war');
    const war = await response.json() as War;
    return war;
}

function getWarServiceUrl(live: number): string {
    return 'https://war-service-live.foxholeservices.com/api/worldconquest/war';
}
