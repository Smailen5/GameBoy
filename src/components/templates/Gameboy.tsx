import { Logo } from "../atoms/Logo";
import { Schermo } from "../atoms/Schermo";
// import { ActionButtons } from "../atoms/Tasto";
import { ContainerButtons } from "../molecules/ContainerButtons";

export const Gameboy = () => {
  return (
    <div className="rounded-lg bg-white p-10">
      <Schermo />
      <Logo />

      <ContainerButtons/>
    </div>
  );
};
