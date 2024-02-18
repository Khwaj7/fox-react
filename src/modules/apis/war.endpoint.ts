import type { War } from "../models/war";

export async function fetchWar(): Promise<War> {
    const response = await fetch('https://api.example.com/war');
    const war = await response.json();
    return war;
}
