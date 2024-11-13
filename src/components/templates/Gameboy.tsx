import { Schermo } from "../atoms/Schermo";
import { Tasto } from "../atoms/Tasto";

export const Gameboy = () => {
  return (
    <div className="rounded-lg bg-white p-10">
      <Schermo />

      <Tasto/>
    </div>
  );
};
