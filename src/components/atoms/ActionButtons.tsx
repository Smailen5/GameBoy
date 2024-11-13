interface ButtonProps {
  tasto: "a" | "b";
}

const Button = ({ tasto }: ButtonProps) => {
  return (
    <div className="relative flex flex-col items-center">
      <button className="size-8 rounded-full bg-red-500" />
      <span className="absolute -bottom-7 font-semibold uppercase text-blue-900">
        {tasto}
      </span>
    </div>
  );
};

export const ActionButtons = () => {
  return (
    <>
      <div className="flex h-12 w-24 -rotate-[25deg] items-center justify-center gap-4 rounded-full bg-zinc-300 p-2">
        <Button tasto="a" />
        <Button tasto="b" />
      </div>
    </>
  );
};
