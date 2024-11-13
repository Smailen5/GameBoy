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

const Bar = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full flex-col gap-0.5">
      <div className="h-0.5 bg-red-500" />
      <div className="h-0.5 bg-blue-500" />
      {children}
    </div>
  );
};

const Header = () => {
  return (
    <header className="absolute top-3 flex w-full items-center px-3">
      <Bar>
        <span className="absolute -top-1 right-2 -translate-x-1/3 bg-zinc-500 px-1 text-[.5rem] uppercase text-white">
          dot matrix with stero sound
        </span>
      </Bar>
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
