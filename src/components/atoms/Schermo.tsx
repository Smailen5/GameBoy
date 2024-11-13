import { twMerge } from "tailwind-merge";

const Display = () => {
  return (
    <main className="h-40 w-44 bg-green-300 shadow-inner shadow-black"></main>
  );
};

const BatteryCheck = () => {
  return (
    <div className="absolute left-0 top-20 flex translate-x-1/2 flex-col items-center gap-2">
      <div className="size-2 rounded-full bg-red-500 shadow-inner shadow-black" />
      <span className="text-[.5rem] uppercase text-white">battery</span>
    </div>
  );
};

const Bar = ({ className }: { className?: string }) => {
  return (
    <div className={twMerge("flex w-full flex-col gap-0.5", className)}>
      <div className="h-0.5 w-full bg-red-500" />
      <div className="h-0.5 w-full bg-blue-500" />
    </div>
  );
};

const Header = () => {
  return (
    <header className="absolute top-2 grid w-full grid-cols-6 items-center px-2 gap-2">
      <Bar className="col-span-2" />
      <span className="col-span-3 text-[.5rem] uppercase text-white">
        dot matrix with stero sound
      </span>
      <Bar className="col-span-1" />
    </header>
  );
};

export const Schermo = () => {
  return (
    <section className="relative flex h-52 w-72 items-center justify-center rounded-s-xl rounded-br-[3rem] rounded-tr-xl bg-zinc-500">
      <Header />
      <BatteryCheck />
      <Display />
    </section>
  );
};
