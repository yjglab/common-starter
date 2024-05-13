import { FC } from "react";
import StandardPage from "./_global/pages/StandardPage";
import { Disc3 } from "lucide-react";

interface Props {}
const Loading: FC<Props> = () => {
  return (
    <StandardPage id="Loading" className="w-screen h-screen">
      <Disc3 className="animate-spin" size={24} strokeWidth={1.5} />
    </StandardPage>
  );
};
export default Loading;
