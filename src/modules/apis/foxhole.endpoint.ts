
interface IParams {
    live: number;
}

export function getWarServiceUrl(props: IParams): string {
    const { live } = props;
    let liveSelector: string = '';
    
    if (live !== 1) {
        liveSelector = `-${live}`;
    }

    return `https://war-service-live${liveSelector}.foxholeservices.com/api`;
}