import { useWar } from "./useWar";

export function WarComponent(): JSX.Element {
  const { getWar } = useWar();

  return (
    <div>
      <button onClick={getWar}>Get War</button>
    </div>
  );
}
