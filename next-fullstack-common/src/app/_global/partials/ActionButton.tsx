import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FC } from "react";
interface Props {
  label: string;
  cb?: any;
  className?: string;
}
const ActionButton: FC<Props> = ({ label, cb, className }) => {
  return (
    <Button className={cn(className, "min-w-20")} onClick={cb}>
      {label}
    </Button>
  );
};
export default ActionButton;
