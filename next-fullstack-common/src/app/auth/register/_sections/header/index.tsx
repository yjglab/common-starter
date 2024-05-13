import { FC } from "react";
import StandardHeaderSection from "@/app/_global/sections/StandardHeaderSection";

interface Props {}
const HeaderSection: FC<Props> = ({}) => {
  return (
    <StandardHeaderSection id="Register">
      <header className="">등록하기</header>
    </StandardHeaderSection>
  );
};

export default HeaderSection;
