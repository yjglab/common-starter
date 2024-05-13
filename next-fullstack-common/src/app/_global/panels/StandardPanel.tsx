import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";
interface Props {
  id: string;
  children?: ReactNode;
  className?: string;
}
const StandardPanel: FC<Props> = ({ id, children, className }) => {
  return (
    <div
      id={id + "Panel"}
      className={cn(className, "py-2.5 px-4 bg-slate-400")}
    >
      {children}
    </div>
  );
};
export default StandardPanel;
