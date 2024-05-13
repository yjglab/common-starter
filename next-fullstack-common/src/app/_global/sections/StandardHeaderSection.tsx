import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";
interface Props {
  id: string;
  children?: ReactNode;
  className?: string;
}
const StandardHeaderSection: FC<Props> = ({ id, children, className }) => {
  return (
    <section
      id={id + "HeaderSection"}
      className={cn(
        className,
        "w-full bg-slate-300 flex items-center py-4 px-10"
      )}
    >
      {children}
    </section>
  );
};
export default StandardHeaderSection;
