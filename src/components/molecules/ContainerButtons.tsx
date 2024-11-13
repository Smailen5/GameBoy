import { ActionButtons } from "../atoms/ActionButtons";
import { CrossButtons } from "../atoms/CrossButtons";

export const ContainerButtons = () => {
  return (
    <>
      <div className="flex justify-between pl-5">
        <CrossButtons />
        <ActionButtons />
      </div>
    </>
  );
};
