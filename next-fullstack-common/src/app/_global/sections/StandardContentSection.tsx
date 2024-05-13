import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";
interface Props {
  id: string;
  children?: ReactNode;
  className?: string;
}
const StandardContentSection: FC<Props> = ({ id, children, className }) => {
  return (
    <section
      id={id + "ContentSection"}
      className={cn(
        className,
        "w-full bg-slate-200 flex items-center py-4 px-10"
      )}
    >
      {children}
    </section>
  );
};
export default StandardContentSection;
