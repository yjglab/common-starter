import ActionButton from "@/app/_global/partials/ActionButton";
import { FC } from "react";

interface Props {}
const MainButton: FC<Props> = () => {
  return (
    <ActionButton label="Jaekyeong Yuk" className="bg-white text-black p-2" />
  );
};

export default MainButton;
