import { twMerge } from "tailwind-merge";

const Line = ({ className }: { className?: string }) => {
  return (
    <div className={twMerge("h-16 w-6 rounded-sm bg-zinc-900", className)} />
  );
};

export const CrossButtons = () => {
  return (
    <>
      <div className="relative">
        <div className="relative flex">
          <Line className="absolute rotate-90" />
          <Line />
        </div>
        <div className="absolute top-1/2 size-6 -translate-y-1/2 rounded-full shadow-inner shadow-zinc-700" />
      </div>
    </>
  );
};
