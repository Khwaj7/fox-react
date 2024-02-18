export enum Winner {
    NONE,
    WARDENS,
    COLONIALS
}

export interface War {
    warId: string;
    warNumber: number;
    winner: Winner;
    conquestStartTime: number | null;
    conquestEndTime: number | null;
    resistanceStartTime: number | null;
    requiredVictoryTowns: number;
}