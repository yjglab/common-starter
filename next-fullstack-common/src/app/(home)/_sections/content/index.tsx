import { FC } from "react";
import StandardContentSection from "@/app/_global/sections/StandardContentSection";
import MainButton from "./MainButton";

interface Props {}
const ContentSection: FC<Props> = ({}) => {
  return (
    <StandardContentSection id="Home" className="justify-center">
      <MainButton />
    </StandardContentSection>
  );
};

export default ContentSection;
